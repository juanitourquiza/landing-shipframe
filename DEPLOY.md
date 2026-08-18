# Deploy — Cloudways (automatic via GitHub Actions)

Every push to `main` builds the static site and syncs it to Cloudways over SSH/rsync.
Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). You can also trigger it manually from the **Actions** tab (`workflow_dispatch`).

## One-time setup

### 1. Create a dedicated deploy SSH key (locally)

```bash
ssh-keygen -t ed25519 -C "github-actions-shipframe" -f ~/.ssh/cloudways_shipframe -N ""
```

This creates:
- `~/.ssh/cloudways_shipframe`     ← **private** key → goes into a GitHub secret
- `~/.ssh/cloudways_shipframe.pub` ← **public** key → goes into Cloudways

### 2. Add the PUBLIC key to Cloudways

In the Cloudways console: **Server → Settings & Packages → SSH Public Keys** (or **Server Management → SSH Public Keys**), add the contents of `~/.ssh/cloudways_shipframe.pub`.

> Prefer adding it at the **Master user** level. You can also append it to the application user's `~/.ssh/authorized_keys` if you use an app-level SSH user.

### 3. Gather the connection details from Cloudways

- **Host** — the server's public IP (Server → Master Credentials, or the app's SSH/SFTP access details).
- **User** — the Master username (e.g. `master_xxxxx`) or the application SFTP user.
- **Port** — `22` (default).
- **Remote path** — the app web root, typically:
  ```
  /home/master/applications/<APP_ID>/public_html
  ```
  Find `<APP_ID>` under **Application → Access Details**. This is the folder the subdomain `shipframe.hackeruna.com` serves.

### 4. Add the GitHub repository secrets

Via the GitHub UI (**Settings → Secrets and variables → Actions → New repository secret**) or the `gh` CLI:

```bash
gh secret set CLOUDWAYS_SSH_HOST    --repo juanitourquiza/landing-shipframe --body "YOUR_SERVER_IP"
gh secret set CLOUDWAYS_SSH_USER    --repo juanitourquiza/landing-shipframe --body "master_xxxxx"
gh secret set CLOUDWAYS_REMOTE_PATH --repo juanitourquiza/landing-shipframe --body "/home/master/applications/APP_ID/public_html"
gh secret set CLOUDWAYS_SSH_PORT    --repo juanitourquiza/landing-shipframe --body "22"
gh secret set CLOUDWAYS_SSH_KEY     --repo juanitourquiza/landing-shipframe < ~/.ssh/cloudways_shipframe
```

| Secret | Value |
|---|---|
| `CLOUDWAYS_SSH_HOST` | Server public IP |
| `CLOUDWAYS_SSH_USER` | Master or app SSH user |
| `CLOUDWAYS_SSH_KEY` | **Private** key contents (`cloudways_shipframe`) |
| `CLOUDWAYS_REMOTE_PATH` | App `public_html` absolute path |
| `CLOUDWAYS_SSH_PORT` | `22` (optional; defaults to 22) |

## How it works

1. `npm ci` → `npm run build` produces `dist/landing-shipframe/browser/`.
2. The output (including the hidden `.htaccess`) is synced with:
   ```
   rsync -avz --delete --exclude='.well-known' ... browser/ user@host:REMOTE_PATH/
   ```
   `--delete` keeps the web root clean (removes stale files); `.well-known` is preserved for SSL/ACME.
3. A production smoke check hits `/en/`, `/es/` and `/llms.txt` and warns if any is not `200`.

## First run

1. Complete the setup above.
2. Push to `main` (or run the workflow manually from the Actions tab).
3. Watch the run under **Actions → Deploy to Cloudways**.

## Manual fallback (no CI)

```bash
npm run build
rsync -avz --delete dist/landing-shipframe/browser/ user@host:/path/to/public_html/
```

## Notes

- The site is fully static — no Node runtime is needed on Cloudways.
- Enable the free **Let's Encrypt SSL** for `shipframe.hackeruna.com` in Cloudways (the `.htaccess` already forces HTTPS).
- If `rsync` is unavailable for the app user, switch the deploy step to `scp -r` or SFTP; the artifact is identical.
