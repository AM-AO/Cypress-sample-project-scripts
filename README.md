# Step-by-step guide for Cypress testing

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

`cd maestra`

Then checkout the relevant QA branch (for example, feature/QA-regression) using: 

`git checkout [branch]`

## 3. Docker setup

First, install Docker Desktop here: 

https://www.docker.com/products/docker-desktop/

note: Docker Desktop will need to be running on your machine in order to run tests in a docker container

Local Docker Instance Setup (the following is copied from the guide at https://gitlab.pas-digital.com/mas-medical/maestra/-/blob/develop/README.md )

### 3.1 Setup MongoDB and Redis

3.1.1 Download latest MongoDB backup from

https://cloud.mergeworld.com/url/e2ygigqjudrsgf6m
PW: 82nekvws

and place the file in the following directory

`./docker/mongo/exports`

3.1.2 Modify the `./docker-compose-support.yml` file and alter the environment variable `MONGO_EXPORT` to match the filename of the downloaded export from above.

3.1.3 Once that is complete, make sure you have docker installed and execute the following from the root directory of the code repository: 

`docker compose -f docker-compose-support.yml -p maestra-support up`

note: The first time this runs, it could take an hour to finish. Please be patient on the first run. On subsequent runs it should take 10-15 seconds for the app to boot up.

This will start up the MongoDB and import a MAS Medical export into it so there is some good data to work with.

If there is ever a need to import a new database, just delete the contents of the `./docker/mongo/db` folder, with the exception of the .gitkeep file.

### 3.2 Run Maestra app
 
3.2.1 Once the MongoDB docker is up and running you can execute the following to start the Maestra app locally:

`docker compose -f docker-compose.yml up`

On a Mac with the new M1 chips, run the following instead:

`DOCKER_DEFAULT_PLATFORM=linux/amd64 docker compose -f docker-compose.yml up`

3.2.2 Once this is up and running you should be able to access the login page here:

http://localhost:8080/

3.2.3. Shutdown docker services

Execute the following to shutdown the Docker containers:

`docker compose -f docker-compose.yml down`
`docker compose -f docker-compose-support.yml down`

## 4. Running tests!(WIP)

4.1 Running tests within a docker container

note: Make sure that all of the above steps have been completed before running tests for the first time. When the above has been verified, execute the following from your terminal: 

`docker compose -f docker-compose-cypress.yml up --exit-code-from cypress`

This will start Redis, Mongo, and Maestra, then wait for Maestra to load and then run all the Cypress tests. When the tests have completed all of the containers will exit.

4.2 Running tests in the staging environment 

Commands: 

**note: Change directory to e2e_cypress_testing before executing the following cypress commands.**

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

