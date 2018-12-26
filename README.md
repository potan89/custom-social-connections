# Custom Social Connections With Nonce

[![Auth0 Extensions](http://cdn.auth0.com/extensions/assets/badge.svg)](https://sandbox.it.auth0.com/api/run/auth0-extensions/extensions-badge?webtask_no_cache=1)

This application gives [Auth0](https://auth0.com/) customers the possibility to manage custom social connections in an easy way.
The application allows the user to:

- List custom connections
- Create a new custom connection
- Configure a custom connection based on existing templates
- Share custom connection
- Try a custom connection

![](https://raw.githubusercontent.com/auth0/custom-social-connections/gh-pages/assets/img/1-Dashboard.png)

## Development

### Prerequisites

To run it locally, you'll need the following:

* [Node JS](http://nodejs.org/)
* [NPM](https://npmjs.org/)
* [WT-Cli](https://webtask.io/)

### First Time Setup

1. Install NPM packages - `npm install`

### Running the server

    $ npm start -- --param AUTH0_DOMAIN=auth0.auth0.com
    $ open http://localhost:3000

## Hosting on Webtask.io

To deploy this to your webtask sandbox, you'll need to run:

    $ NODE_ENV=production npm run build
    $ wt create dist/custom-social-connections.js --name custom-social-connections --no-parse --no-merge

Note: Click [here](https://webtask.io/) for more information about how to set up webtasks.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
