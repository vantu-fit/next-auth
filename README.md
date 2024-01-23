# Next Auth
Simple project to test Next Auth with Supabase

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features
- Login with email and password
- Register with email and password
- Reset password
- Verify email
- Login with Google
- Login with Github

## Techs

- [Next.js](https://nextjs.org/)
- [Shadcnui](https://shadcnui.com/) 
- [Prisma](https://www.prisma.io/)
- [Auth.js v5](https://next-auth.js.org/)
- [Resend](https://resend.com/login?redirectedFrom=%2Femails%2Fafa7b084-ee3a-49b8-8f4b-d405be0c5cb5)
- [Supabase](https://supabase.io/)
- [React-icons](https://react-icons.github.io/react-icons/)
- [React-spinner](https://www.npmjs.com/package/react-spinners)


## Folder Structure
```
|-- prisma
|   |-- migrations
|   |   |-- 20240115151450_
|   |   |   `-- migration.sql
|   |   `-- migration_lock.toml
|   `-- schema.prisma
|-- public
|   |-- next.svg
|   `-- vercel.svg
|-- src
|   |-- actions
|   |   |-- auth-actions.ts
|   |   |-- database-action.ts
|   |   |-- new-verification.ts
|   |   `-- reset-password.ts
|   |-- app
|   |   |-- (protect)
|   |   |   |-- admin
|   |   |   |   `-- page.tsx
|   |   |   |-- components
|   |   |   |   `-- header-nav.tsx
|   |   |   |-- layout.tsx
|   |   |   |-- setting
|   |   |   |   `-- page.tsx
|   |   |   `-- user
|   |   |       `-- page.tsx
|   |   |-- api
|   |   |   `-- auth
|   |   |       |-- [...nextauth]
|   |   |       |   `-- route.ts
|   |   |       `-- tet
|   |   |-- auth
|   |   |   |-- layout.tsx
|   |   |   |-- login
|   |   |   |   `-- page.tsx
|   |   |   |-- new-verification
|   |   |   |   `-- page.tsx
|   |   |   |-- register
|   |   |   |   `-- page.tsx
|   |   |   |-- reset
|   |   |   |   `-- page.tsx
|   |   |   `-- reset-password
|   |   |       `-- page.tsx
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- auth.config.ts
|   |-- auth.ts
|   |-- components
|   |   |-- auth
|   |   |   |-- back-button.tsx
|   |   |   |-- card-wrapper.tsx
|   |   |   |-- error-triagle.tsx
|   |   |   |-- form-login.tsx
|   |   |   |-- form-password.tsx
|   |   |   |-- form-register.tsx
|   |   |   |-- form-reset.tsx
|   |   |   |-- header.tsx
|   |   |   |-- login-button.tsx
|   |   |   |-- login-form.tsx
|   |   |   |-- logout-button.tsx
|   |   |   |-- social.tsx
|   |   |   `-- success-tick.tsx
|   |   `-- ui
|   |       |-- button.tsx
|   |       |-- card.tsx
|   |       |-- form.tsx
|   |       |-- input.tsx
|   |       `-- label.tsx
|   |-- data
|   |   `-- verification-token.ts
|   |-- hooks
|   |   `-- use-current.ts
|   |-- lib
|   |   |-- db.ts
|   |   |-- mail.ts
|   |   |-- token.ts
|   |   `-- utils.ts
|   |-- middleware.ts
|   |-- route.ts
|   `-- schema
|       `-- auth-schema.ts
|-- README.md
|-- components.json
|-- next-env.d.ts
|-- next.config.js
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- tailwind.config.ts
`-- tsconfig.json


```

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

ex. [@vantufit](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details


