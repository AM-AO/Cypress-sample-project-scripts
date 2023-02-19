# This sample gives an idea of how I write technical documentation...


## Step-by-step guide for Cypress setup + testing

### Outline: 
1. Installing Cypress
2. Git init & clone
3. Docker setup 
4. Running tests
5. Reporting (WIP)

-----------------------------------
## 1. Installing Cypress

Cypress is installed as a node module. The only global dependencies needed are: 

a. node.js

If you do not have node.js installed already, you can do so here: 

https://nodejs.org/en/download/

Installing Cypress with npm is recommended. Here’s how: 

1. `cd /your/project/path`
2. `npm init`
3. `npm install cypress --save-dev`

To verify that install was successful, use: 

`npx cypress --version`

additional information at https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn

## 2. Git init & clone

Begin by initializing your local repository using: 

`git init`

Then, clone the repository using:

`git clone [project url]`

Then: 

`cd [folder]`

Then checkout the relevant QA branch (for example, feature/regression-test-suite) using: 

`git checkout [branch]`

## 3. Docker setup

First, install Docker Desktop here: 

https://www.docker.com/products/docker-desktop/

Docker Desktop will need to be running on your machine in order to run tests in a docker container

Local Docker Instance Setup (the following is copied from the guide at https://gitlab.pas-digital.com/mas-medical/maestra/-/blob/develop/README.md )

<Refer to steps for setting up local environment, database, etc. here>

## 4. Running tests!

4.1 Running tests within a docker container

`docker compose -f docker-compose-cypress.yml up --<custom command>`

4.2 Running tests in the staging environment 

Commands: 

For security reasons, no passwords are not saved within the code or repository. Passwords can be passed whenever the tests are run by using `CYPRESS_password=password` as a prefix to any cypress command.

For example, to open the cypress test runner, use`CYPRESS_password=password npx cypress open` 

**FYI, this approach is summarized here: https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/#validate-password**

`npx cypress open` (opens the cypress test runner)
`npx cypress run` (runs all tests in the e2e folder)

`npx cypress run --headless` (runs tests headlessly)
`npx cypress run --spec path/to/file.cy.js` (to run a single test) 

add --browser [browser] to specify a browser, e.g.:

`cypress run --browser firefox` runs tests in firefox

When running tests headlessly, videos will be captured in the 'videos' folder, and screenshots will be captured in the 'screenshots' folder 

## 5. Reporting (WIP)

