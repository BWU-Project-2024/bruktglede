# Prisma CLI and ORM

## Documentation

[Prisma in fullstack](https://www.prisma.io/docs/orm/overview/prisma-in-your-stack/fullstack)

[Prisma Queries](https://www.prisma.io/docs/orm/prisma-client/queries)

[Data modeling (relational databases)](https://www.prisma.io/docs/orm/prisma-schema/data-model/models)

[YT tutorial](https://www.youtube.com/watch?v=RebA5J-rlwg)

## Definition

Prisma is a framework for writing easier SQL queries. We use this instead of the default Vercel Postgres quering. Therefore, always google "vercel postgres prisma" to find solutions, since there is a difference.

The SQL models are created in the "schema.prisma" file, while the APIs are created in the `api` folder under `app`.

## Commands

`yarn prisma` to see all available commands.

`npx prisma studio`: This command let you get an actual visualization of the SQL schemas, that will open up the studio in the browser.

`npx prisma migrate dev` to migrate new changes from schema.prisma to the prisma studio.

`npx prisma generate`: populates/generates the project with model fields (need to be done after every migrate).

`npx prisma db push`: This command, on the other hand, is part of Prisma Client and is used to synchronize the Prisma schema with the actual database schema. It directly interacts with the database specified in your Prisma schema file (schema.prisma) and applies any changes or additions to the database.
