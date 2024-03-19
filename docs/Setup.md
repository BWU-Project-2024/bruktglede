# Set up Bruktglede

NB! This project uses `yarn` and NOT `npm`. So all new dependencies you add NEED to be added through yarn (instead of npm install, it's often yarn add).

## Step-by-step

1. Create a account on Vercel.com
2. Copy the GitHub repo link and add it to you computer, and open it in VSCode.
3. Add all dependencies with `yarn install`.
4. Install Vercel CLI globally on your computer: `sudo yarn global add vercel@latest`.
5. Check if the download of vercel was successfull by typing `vercel --version`.
6. (Not sure about this one) Link the codebase to vercel with `vercel link` .
7. Add the vercel .env database variables `vercel env pull .env.development.local`. This will download all neccessary .env variables needed.
8. Run next app on local host with `yarn dev`.

## Domain

The aplication is available at `https://bruktglede.vercel.app/`

git remote show origin  
git remote set-url origin https://github.com/lisamarimyrene/bruktglede
