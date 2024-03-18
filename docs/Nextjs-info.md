# Next.js Guide and Documentation

Next.js is rendered on the server, whereas in React it renderes in the client.

## Documentation

[Docs - To understand Next.js](https://nextjs.org/docs)

[Optimization - HTML elements](https://nextjs.org/docs/app/building-your-application/optimizing)

Next.js is built upon React, therefore we still use 'jsx' filetypes in Next.js. We can also use React dependencies for Next.js

## Routing

[Defining routes](https://nextjs.org/docs/app/building-your-application/routing)
Routing in Next.js is made by creating sub-folders within the "app" folder, and then adding a `page.jsx` inside the folder. The name of the folder is what the path would look like in the browser.

For example app/events/page.jsx, then the path/url would be "localhost:3000/events" in the browser.

If you need a `dynamic route` you need to add a folder inside the "events" folder, but this time it needs to have square brackets [] outside the folder name. This can look like: app/events/[eventId]/page.jsx. This way, the path/url will not be static, but will be shown as the "id" of the event, such as: `"localhost:3000/events/gratis+middag+for+studenter"` (id).

[YT tutorial that displays the concept well - start on 22:20](https://www.youtube.com/watch?v=GxUR4zIasB8&list=LL&index=2&t=2258s)

## Authentification, Authorization & Session Management

[Authentification docs](https://nextjs.org/docs/app/building-your-application/authentication)

## What if I need to make a Client Component?

In some cases, there is a need to create a `Client Component`, rather than a Server Component that is default for Next.js.

A Client Component is often needed if you have parts of your UI that need to change dynamically based on user interactions or data fetched from an API after the initial page load (provide immediate feedback to the user).

To use Client Components, you can add the React `"use client"` directive at the top of a file, above your imports.

The "use client" is used to declare a boundary between a Server and Client Component modules. This means that by defining a `"use client"` in a file, all other modules imported into it, including child components, are considered part of the client bundle.

An example of when to use a Client Component, is for example a "delete post button" where the UI will update after you click the button. If this was a Server Component, you would need to refresh the page to see the changes.
