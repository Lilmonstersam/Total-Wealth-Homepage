<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/bf0af3e7-9549-4afd-ab17-99539153322b

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment

This repository is configured to automatically deploy to GitHub Pages upon pushing to the `main` branch.

1. Ensure the `base` in `vite.config.ts` accurately matches the repository name (currently configured as `base: '/Total-Wealth-Homepage/'`).
2. Give the Actions the necessary Read and Write permissions for GitHub Pages in your repository Settings > Pages.
3. Push to `main` and the GitHub Actions flow `.github/workflows/deploy.yml` will build and publish your Vite application.
