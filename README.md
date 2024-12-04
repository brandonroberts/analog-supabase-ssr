# analog-supabase-ssr

This is an example application that uses [Supabase](https://supabase.com) for authentication, database access, and SSR.

## Setup

Run `npm install` to install the application dependencies.

## Supabase Setup

- Create a new project in Supabase.
- Go to your Supabase dashboard and run the `Countries` Quickstart.
- Copy the `.env.example` to `.env` and fill in the Supabase environment variables from your `API settings`.
- Add a user with `email/password` under the `Authentication` section.

## Development

Run `npm start` for a dev server. Navigate to `http://localhost:5173/`. The application automatically reloads if you change any of the source files.

## Build

Run `npm run build` to build the client/server project. The client build artifacts are located in the `dist/analog/public` directory. The server for the API build artifacts are located in the `dist/analog/server` directory.

## Test

Run `npm run test` to run unit tests with [Vitest](https://vitest.dev).

## Community

- Visit and Star the [GitHub Repo](https://github.com/analogjs/analog)
- Join the [Discord](https://chat.analogjs.org)
- Follow us on [Twitter](https://twitter.com/analogjs)
- Become a [Sponsor](https://github.com/sponsors/brandonroberts)
