# Deploy — Cloudways (automatic via GitHub Actions)

Every push to `main` builds the static site and syncs it to Cloudways over SSH/rsync.
Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). You can also trigger it
manually from the **Actions** tab (`workflow_dispatch`).

> The Cloudways **application SSH/SFTP user is jailed** (its home `~/.ssh` is not writable), so
> key-based auth is not available for it. The workflow therefore uses **password auth** via
> `sshpass`, with the password stored as an encrypted GitHub secret.

## One-time setup — GitHub repository secrets

Add these under **Settings → Secrets and variables → Actions**, or with the `gh` CLI:

| Secret | Value | Example |
|---|---|---|
| `CLOUDWAYS_SSH_HOST` | Server public IP | `159.203.136.40` |
| `CLOUDWAYS_SSH_USER` | Application SSH/SFTP user | `shipframe` |
| `CLOUDWAYS_SSH_PASSWORD` | That user's password | `••••••••` |
| `CLOUDWAYS_REMOTE_PATH` | App web root (relative to home) | `public_html` |
| `CLOUDWAYS_SSH_PORT` | SSH port (optional) | `22` |

```bash
gh secret set CLOUDWAYS_SSH_HOST     --repo juanitourquiza/landing-shipframe --body "159.203.136.40"
gh secret set CLOUDWAYS_SSH_USER     --repo juanitourquiza/landing-shipframe --body "shipframe"
gh secret set CLOUDWAYS_REMOTE_PATH  --repo juanitourquiza/landing-shipframe --body "public_html"
gh secret set CLOUDWAYS_SSH_PORT     --repo juanitourquiza/landing-shipframe --body "22"
gh secret set CLOUDWAYS_SSH_PASSWORD --repo juanitourquiza/landing-shipframe   # prompts, paste the password
```

> **Security:** the password lives only in GitHub's encrypted secrets and is masked in logs.
> If you rotate it in Cloudways, update the `CLOUDWAYS_SSH_PASSWORD` secret to match.
> For fully keyless CI, add an SSH key at the Cloudways **Master** user level instead and switch
> the deploy step back to key auth.

## How it works

1. `npm ci` → `npm run build` produces `dist/landing-shipframe/browser/`.
2. The output (including the hidden `.htaccess`) is synced with:
   ```
   rsync -rlvz --delete --exclude='.well-known' \
     -e "sshpass -e ssh -o PreferredAuthentications=password -o PubkeyAuthentication=no" \
     dist/landing-shipframe/browser/ user@host:public_html/
   ```
   `--delete` keeps the web root clean; `.well-known` is preserved for SSL/ACME.
3. A production smoke check hits `/en/`, `/es/` and `/llms.txt` and warns if any is not `200`.

## Cloudways notes (important)

- Cloudways serves static files through **nginx**, so an Apache `.htaccess` in the web root is
  **ignored**. The bundled `.htaccess` is kept for portability (Apache hosts) but has no effect here.
- **Force HTTPS:** enable it in the Cloudways console — **Application → SSL Certificate →
  "Force HTTPS Redirection"**. (The `.htaccess` HTTPS rule does not apply under nginx.)
- **Root → language redirect** works via the `index.html` meta-refresh to `/en/` (served at `/`),
  independent of `.htaccess`.
- Security headers / custom cache rules from `.htaccess` won't apply; nginx already sends
  long-lived caching for hashed assets. Add nginx-level rules via Cloudways if you need the headers.

## Manual deploy (no CI)

```bash
npm run build
# with an SSH key on your machine, or type the password when prompted:
rsync -rlvz --delete dist/landing-shipframe/browser/ shipframe@159.203.136.40:public_html/
```

## First run

1. Add the secrets above.
2. Push to `main` (or run the workflow manually from the Actions tab).
3. Watch it under **Actions → Deploy to Cloudways**; the smoke step confirms production `200`s.
