# Release Flow

The landing auto-deploys from pushes to `main` through the repository deployment workflow.

Before calling a release complete:

1. Run the Angular production build.
2. Push the exact commit to `origin/main`.
3. Confirm the deployment workflow or production routes.
4. Smoke `/`, `/es/`, and `/llms.txt` on `https://shipframe.hackeruna.com/`.
