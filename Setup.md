# Set up Bruktglede

NB! This project uses 'yarn' and NOT 'npm'. So all new dependencies you add NEED to be added through yarn.

## Vercel and Postgres SQL Db

1. Copy the GitHub repo link and add it to you computer, and open it in VSCode.
2. Install Vercel CLI globally on your computer: 'sudo yarn global add vercel@latest'.
3. Check if the download of vercel was successfull by typing 'vercel --version'.
4. Link the codebase to vercel with 'vercel link'.
5. Add the vercel .env database variables 'vercel env pull .env.development.local'.
6. Add the vercel postgres SDK package 'yarn add @vercel/postgres'.

## Prisma ORM

1. yarn add prisma --dev
