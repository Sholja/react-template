# react-template

{{project name}} web app

## Project architecture:

* Framework: React

* Language: Javascript

* Web standard: HTML 5

* Styling framework: SASS

* Packet manager: Yarn

## Project requirements:

#### Requirements for the project: {{here will go requirements}}

#### Shared design: {{here will go design for the project, if it exist}}

#### API swagger/documentation: {{documentation for the API, if it exist}}

## Project implementation:

### Application parts below are flagged like this:

* 📒 Folders
* 📑 Files

### Project arhitecture:

* 📒 api
  * 📒 request-objects
  * 📒 requests
* 📒 app
  * 📒 login
    * 📒 components
      * 📑 login-container.js
      * 📑 login.js
    * 📒 actions
      * 📑 login-actions.js
    * 📒 reducers
      * 📑 login-reducers.js
    * 📒 constants
      * 📑 login-constants.js
      * 📑 action-types.js
    * 📒 validators
      * 📑 validators.js
* 📒 common
    * 📒 images
    * 📒 styles
    * 📑 constants.js
    * 📑 cookies-wrapper.js
    * 📑 routes-constants.js
    * 📑 helpers.js
* 📒 components
    * 📒 button
      📑 button.js
      📑 button.scss
* 📒 core
    * 📑 axios-config.js
    * 📑 root-reducer.js
    * 📑 routes.js
    * 📑 store.js
* 📒 tests
* 📑 package.json
* 📑 README.md

## Setting up project:

* Install dependencies:
  `yarn install`

* Start project:
  `yarn start`

* Create a deployable build
  `yarn build`

* Trigger tests
  `yarn test`

* Trigger cypress tests
  `yarn test-integration`

* Trigger cypress tests (silent mode)
  `yarn test-integration-run`

* Start generator for generating feature boilerplate
  `yarn generate`

* Start storybook
  `yarn storybook`

#### Testing: [Cypress](https://www.cypress.io/) is configured for testing purposes. Also, [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) is added in the list of the dev dependencies for unit testing.

## Authors and contributors

* **Eldin Soljic** - [Sholja](https://github.com/Sholja) - **Software Developer**

See also the list of [contributors](https://github.com/Sholja/react-template/graphs/contributors) who participated in this project.

# Happy coding!
