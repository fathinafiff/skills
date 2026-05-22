---
name: threads-api
description: Publish and manage Meta Threads posts programmatically via the Threads API (create container + publish). Use for building Threads autoposting, scheduling daily posts, posting text/image/carousel via API, validating tokens/scopes, and wiring OpenClaw cron or scripts to publish to Threads.
---

# Threads API

Publish to Threads via API (2-step flow: **create container → publish**). This skill keeps a working, scriptable workflow you can plug into OpenClaw cron for daily autoposting.

## Quick start (text post)

Use the bundled script:

```bash
THREADS_USER_ID='...'
THREADS_ACCESS_TOKEN='...'
node scripts/post_text.mjs "test post"
```

By default it posts to `https://graph.threads.net`. Override if needed:

```bash
THREADS_GRAPH_BASE='https://graph.facebook.com/v19.0' node scripts/post_text.mjs "hello"
```

## Workflow (create → publish)

### 1) Create a container

`POST {GRAPH_BASE}/{threads_user_id}/threads`

Payload (text-only):

- `media_type=TEXT`
- `text=...`
- `access_token=...`

### 2) Publish the container

`POST {GRAPH_BASE}/{threads_user_id}/threads_publish`

Payload:

- `creation_id=<id from step 1>`
- `access_token=...`

## Common failure modes

- **OAuth error / token rejected**: token is invalid/expired/wrong app/user.
- **Missing permission**: token lacks `threads_basic` and/or `threads_content_publish`.
- **Media posts**: images/videos often require a processing delay before publish.

## Scheduling (OpenClaw cron)

Recommended pattern:
1) Cron triggers an isolated agentTurn that generates the post text.
2) That turn executes `node scripts/post_text.mjs "..."` with env vars.

If you want a purely deterministic job (no LLM generation), schedule a command that runs the script with fixed text.

## Resources

### scripts/
- `scripts/post_text.mjs` — posts a text-only thread (create + publish), outputs JSON with IDs.

### references/
Add API notes, scopes, and examples here if you want to expand the skill.
