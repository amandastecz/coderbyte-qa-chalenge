# QA Automation Challenge

## Introduction
This project uses the Object Model Page test pattern and the Cypress test framework to perform tests on the e2e layer.

## Setup

### Development setup

- [NodeJS 20.3.1 or higher versions](https://nodejs.org/en)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress#Features)

### How to run the tests locally

Run: 
```
npm install
```

After installed all dependencies, to exec cypress in headless mode, run:
```
npm run test
```
Or, if you prefer to run the tests in the cypress dashboard, run:
```
npm run test:cy
```

## Challenge description

Create a simple framework and show organization of the automation framework. Please
try to show as much as possible, while keeping it relatively simple.
What will be graded:
1. Using test automation patterns(preferably page object model)
2. Code reusability
3. Clean code and coverage
4. Documentation how to run tests (Readme is must)
5. Organization of tests
6. Tests pass/fail as expected

### Tests code resolution

About "Test 1" requirements:
- [X] (/e2e/signup.cy.js) should create an account when customer signup with valid credentials
- [X] (/e2e/signup.cy.js) should not create multiples accounts when customer insert same credentials
- [X] (/e2e/login.cy.js) should login and logout successfully when customer insert valid credentials
- [X] (/e2e/login.cy.js) should display a error message and not login the customer when try to login with an invalid credentials

About "Test 2" requirements:

## About the Author

**Amanda C. Stecz Antunes.**
- Software Quality Engineer.
- Education: Bachelor's Degree Computer Science.
- Experience: 6 years as a QA.

Technical Knowledge:

- Languages: Typescript, Javascript.
- Automation Frameworks: Cypress, TestCafe, Jest, Supertest, Postman.
- CI/CD Tools: Jenkins, Kubernetes.
- Container: Docker.
- Cloud: AWS.
- Task management: Azure Devops, Monday, ORA, Kanbanize.
- Version Control: GitHub, Gitlab.
- Database: MongoDB, Postgres, MySQL.

LinkedIn: https://www.linkedin.com/in/amanda-c-stecz-antunes-2b298b123/