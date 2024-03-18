# Set up Bruktglede

NB! This project uses 'yarn' and NOT 'npm'. So all new dependencies you add NEED to be added through yarn (instead of npm install, it is often yarn add).

## Step-by-step

1. Copy the GitHub repo link and add it to you computer, and open it in VSCode.
2. Add all dependencies with `yarn install`.
3. Install Vercel CLI globally on your computer: `sudo yarn global add vercel@latest`.
4. Check if the download of vercel was successfull by typing `vercel --version`.
5. Link the codebase to vercel with `vercel link`.
6. Add the vercel .env database variables `vercel env pull .env.development.local`. This will download all neccessary .env variables needed.
7. Run next app on local host with `yarn dev`.

## Domain

The aplication is available at `https://bruktglede.vercel.app/`
