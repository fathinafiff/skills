#!/usr/bin/env node
/**
 * Post a text thread using Threads API.
 *
 * Usage:
 *   THREADS_USER_ID=... THREADS_ACCESS_TOKEN=... node post_text.mjs "hello"
 *   node post_text.mjs --userId ... --token ... --text "hello"
 *
 * Output: JSON containing creation_id + thread_id.
 */

const args = process.argv.slice(2);

function getArg(name) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
}

const userId = getArg('userId') || process.env.THREADS_USER_ID;
const token = getArg('token') || process.env.THREADS_ACCESS_TOKEN || process.env.ACCESS_TOKEN;
const text = getArg('text') || args.find(a => !a.startsWith('--')) || process.env.THREADS_TEXT;

if (!userId || !token || !text) {
  console.error('Missing required inputs. Provide THREADS_USER_ID, THREADS_ACCESS_TOKEN, and text.');
  process.exit(1);
}

const base = process.env.THREADS_GRAPH_BASE || 'https://graph.threads.net';

async function postJson(url, payload) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const bodyText = await res.text();
  let json;
  try { json = JSON.parse(bodyText); } catch { json = { raw: bodyText }; }
  if (!res.ok || json.error) {
    const msg = json?.error?.message || bodyText;
    throw new Error(`HTTP ${res.status} ${res.statusText}: ${msg}`);
  }
  return json;
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  // Step 1: create container
  const container = await postJson(`${base}/${userId}/threads`, {
    media_type: 'TEXT',
    text,
    access_token: token,
  });

  if (!container?.id) throw new Error(`Create did not return id: ${JSON.stringify(container)}`);

  // Step 2: publish
  // (for text posts, no processing wait needed; keep tiny delay to avoid edge flakiness)
  await sleep(250);

  const published = await postJson(`${base}/${userId}/threads_publish`, {
    creation_id: container.id,
    access_token: token,
  });

  if (!published?.id) throw new Error(`Publish did not return id: ${JSON.stringify(published)}`);

  process.stdout.write(JSON.stringify({
    status: 'success',
    creation_id: container.id,
    thread_id: published.id,
    graph_base: base,
  }, null, 2));
  process.stdout.write('\n');
})().catch((err) => {
  console.error(err?.stack || String(err));
  process.exit(1);
});
