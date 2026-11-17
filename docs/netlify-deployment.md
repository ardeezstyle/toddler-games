# GitHub and Netlify Deployment

This document describes how applications in the Toddler Games repository are published using GitHub and Netlify.

Each application can have its own Netlify site and public URL while sharing the same GitHub monorepo.

## Deployment architecture

Applications are developed locally, stored in GitHub, and automatically built and published by Netlify.

```text
Local development
       |
       v
    GitHub
       |
       v
Netlify detects repository changes
       |
       v
Netlify builds the application
       |
       v
Production deployment
       |
       v
Public application URL
```

## Prerequisites

- A GitHub repository containing the application source code.
- A Netlify account.
- The Netlify GitHub integration authorized to access the repository.

## Existing deployments

| Application | Netlify URL |
|---|---|
| Calm Car Game | https://swarup-car-game.netlify.app |
| ABC Adventure | To be configured |

Each application should have its own Netlify site to allow independent builds and deployments.

## Connecting a GitHub repository to Netlify

For a new application:

1. Sign in to [Netlify](https://app.netlify.com/).
2. Select **Add new project** or the equivalent option to import an existing project.
3. Choose **Import an existing project**.
4. Select GitHub as the Git provider.
5. Authorize Netlify to access the repository if required.
6. Select the Toddler Games repository.
7. Configure the build settings for the application.
8. Deploy the site.

## Configuring a monorepo application

Since multiple applications share the same repository, Netlify must be configured to build the correct workspace.

The main configuration values are:

| Setting | Description |
|---|---|
| Base directory | Application directory, if configured |
| Build command | Command used to build the application |
| Publish directory | Location of the generated production files |

### Example: ABC Adventure

The following is an example configuration. Confirm the exact paths and commands against the repository's current package configuration.

```text
Repository: toddler-games

Base directory: apps/abc-adventure
Build command: yarn build
Publish directory: dist
```

### Example: Calm Car Game

```text
Repository: toddler-games

Base directory: apps/calm-car-game
Build command: yarn build
Publish directory: dist
```

The examples assume each application has its own build script and that its dependencies can be installed correctly in the monorepo environment.

If the Netlify base-directory configuration does not install the root workspace dependencies, configure the site to run the installation and build from the repository root instead.

For example:

```bash
yarn install --frozen-lockfile
yarn workspace abc-adventure build
```

In that configuration, the publish directory would be:

```text
apps/abc-adventure/dist
```

Use the appropriate workspace name and output directory for each application.

## Automatic deployments

Once GitHub is connected, Netlify can automatically build and deploy changes pushed to the configured production branch.

Typical workflow:

1. Develop and test the application locally.
2. Run lint and production build.
3. Commit the changes.
4. Push to the configured GitHub branch.
5. Netlify detects the commit.
6. Netlify starts a new build.
7. Netlify publishes the generated files if the build succeeds.

Example:

```bash
git add .
git commit -m "Update ABC Adventure"
git push
```

Check the deployment status in the Netlify dashboard.

## Deploy previews

Netlify can also generate deploy previews for pull requests, when enabled in the site's configuration.

This allows changes to be reviewed before merging them into the production branch.

## Accessing published applications

After a successful deployment, Netlify provides a public HTTPS URL.

For example:

```text
https://swarup-car-game.netlify.app
```

Open this URL on a tablet or mobile browser.

You can add the published website to the tablet's home screen for convenient access.

Unlike local development, the development machine does not need to remain switched on.

## Updating a published application

To publish a new version:

1. Make the required code or asset changes.
2. Run lint and build locally.
3. Commit and push the changes to GitHub.
4. Wait for Netlify to complete the deployment.
5. Verify the updated application using its public URL.

## Important considerations

- Each application should have an independent Netlify site.
- Confirm the correct build command and publish directory for every application.
- A successful deployment requires the production build to complete without errors.
- Netlify hosting does not automatically provide offline support.
- Full offline functionality requires additional PWA configuration, including a service worker and appropriate caching.

## Useful links

- [Netlify Dashboard](https://app.netlify.com/)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Documentation](https://docs.github.com/)
- [Netlify Git integration](https://docs.netlify.com/build/git-workflows/repo-permissions-linking/)