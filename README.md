

## Quick start

You will need a Sanity account to use this starter. You can create a new account or use an existing one.

1. **Create a Gatsby site**

   Use the Gatsby CLI to get started locally:

   ```sh repo
   npx gatsby new my-homepage https://github.com/gatsbyjs/gatsby-starter-sanity-homepage
   ```

1. **Set up Sanity Studio**

   1. In the `studio` directory, install dependencies for Sanity Studio:

      ```sh
      yarn
      ```

   1. Create a new Sanity project by running:

      ```sh
      yarn sanity-init
      ```

      This will prompt you to log in if this is your first time using Sanity CLI.

   1. Deploy the Sanity GraphQL API for your new project:

      ```sh
      yarn deploy
      ```

   1. Optionally, to import the demo content for this starter run:

      ```sh
      yarn sanity-import
      ```

   1. Start the Sanity Studio development server to start editing content:

      ```sh
      yarn start
      ```

   1. In your _Gatsby site's directory_, to create `.env.development` and `.env.production` files with configuration for your Sanity project, run:

      ```sh
      yarn & yarn setup
      ```

1. **Start developing**

   In your site directory, start the development server:

   ```sh
   yarn start
   ```

   Your site should now be running at <http://localhost:8000>

1. **Open the source code and start editing**

## Deploy your site

Once your content is available in Sanity, deploy your site to [Gatsby Cloud](https://gatsbyjs.com/products/cloud):

1. Push your local site to a new repo in either GitHub, GitLab, or Bitbucket
1. Log into your [Gatsby Cloud Dashboard][] and click on **Add a site**
1. Use the **Import from a Git repository** option to find your site
1. Add the environment variables from your `.env.production` file to Gatsby Cloud during setup
1. Click **Build site** and your site should start building

For a more detailed walkthrough, see the tutorial on how to [build your site with Gatsby Cloud][tutorial].

[gatsby cloud dashboard]: https://gatsbyjs.com/dashboard
[tutorial]: https://www.gatsbyjs.com/docs/tutorial/part-1/#build-your-site-with-gatsby-cloud

### Deploy without using the CLI

Alternatively, you can deploy this starter directly to Gatsby Cloud.

This repository uses the `gatsby-provision` convention to allow for automatic CMS content provisioning during the Deploy Now flow in Gatsby Cloud. After you Quick Connect Sanity to your site, you will be given the option to run the `gatsby-provision` script to populate the selected project and dataset with the site's associated content model and content.

Otherwise, you can always set up your content in Sanity manually before deploying to Gatsby Cloud.

[![Deploy to Gatsby](https://www.gatsbyjs.com/deploynow.svg "Deploy to Gatsby")](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-sanity-homepage)

## Setting up Gatsby Cloud Preview

To use Gatsby Cloud Preview with this site, see the documentation for
[Connecting to Sanity via Quick Connect][].

[connecting to sanity via quick connect]: https://support.gatsbyjs.com/hc/en-us/articles/360052324694-Connecting-to-Sanity-via-Quick-Connect

## What's included?

```sh
├── README.md
├── gatsby-config.js
├── gatsby-node.js
├── src
│   ├── components
│   ├── pages
│   ├── colors.css.ts
│   ├── styles.css.ts
│   └── theme.css.ts
└── .env.EXAMPLE
```

1. **`gatsby-config.js`**: [Gatsby config][] file that includes plugins required for this starter.
1. **`gatsby-node.js`**: [Gatsby Node][] config file that creates an abstract data model for the homepage content.
1. **`src/`**: The source directory for the starter, including pages, components, and [Vanilla Extract][] files for styling.

[gatsby config]: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
[gatsby node]: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
[vanilla extract]: https://vanilla-extract.style/



## Troubleshooting

### Errors after making changes to the schema

If you've made changes to the `gatsby-node.js` file or changes to the Sanity data model, clear the Gatsby cache before running the develop server:

```sh
yarn clean && yarn start
```

---

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.
