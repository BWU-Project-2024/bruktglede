# Prisma CLI and ORM

## Documentation

[Prisma in fullstack](https://www.prisma.io/docs/orm/overview/prisma-in-your-stack/fullstack)
[Prisma Queries](https://www.prisma.io/docs/orm/prisma-client/queries)

## Definition

Prisma is a framework for writing easier SQL queries. We use this instead of the default Vercel Postgres quering. Therefore, always google "vercel postgres prisma" to find solutions, since there is a difference.

The SQL models are created in the "schema.prisma" file, while the APIs are created in the "api" folder under "app".

## Commands

`prisma migrate deploy`: This command is used specifically for managing migrations in Prisma Migrate. When you make changes to your Prisma schema, such as adding or modifying models, you create migrations to represent those changes.

`npx prisma db push`: This command, on the other hand, is part of Prisma Client and is used to synchronize the Prisma schema with the actual database schema. It directly interacts with the database specified in your Prisma schema file (schema.prisma) and applies any changes or additions to the database.

To get an actual visualization of the SQL schemas, type `npx prisma studio` that will open up the studio in the browser.
