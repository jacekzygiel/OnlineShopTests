# Automation Tests of SauceDemo.com

## Description
Repository contains automation tests of [SauceDemo.com](https://www.saucedemo.com) 
with use of [cypress.io](https://www.cypress.io/) framework.

## Test scope
In the scope of tests following user stories are covered:
```
As a registered user I am able to log in.
As a registered user I am able to place an order.
As a registered user I am able to see cart summary at checkout.
As a registered user I am able to add and remove items from cart.
```

## Prerequisites
1. [Nodejs](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) installed
2. Installed project dependencies:
    ```
    npm i
    ```
   
## Pre test
Static code analyzes is covered with integrated tool: [ESLint](https://eslint.org/)
1. To run linter use:
    ```
    npm run lint
    ```
2. To run linter with automatically fix of problems use:
    ```
    npm run lint:fix
    ```

## Tests running
1. To run tests with cypress.io GUI please use command:
    ```
    npm run cypress:open
    ```
2. To run all tests with command line using headless browser:
    ```
    npm run test
    ```