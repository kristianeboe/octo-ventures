This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## TODO
* Redirect to login if no active session - COMPLETED
* Redirect to phase view upon login - COMPLETED
* Landing page with login - COMPLETED
* Calculate chance of success upon opening app - Kenneth/Kristian
* Increment/decrement success chance upon answer changed - Kenneth
* Integrate links into best practice text - COMPLETED
* Logout button - COMPLTETED
* Login and usage metrics from users

## Bugs
* New user -> login with google: gets rerouted to phase view without user set (has to refresh to see input fields)
* Changing input values, change to another phase and back, changes not visible in input field. Have to reload to get changes.