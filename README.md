# bdd-example-using-playwright
An example repo that leverages cucumber to run E2E tests using playwright test framework

### Get up and running
1. Run the following command to install all dependencies
```shell
npm i
```

2. Run the following command to run the test
```shell
npx cucumber-js --exit
```

3. If you want to run the tests in headless mode, change the following code in `world.js`
```js
headless: false,
```
to
```js
headless: true,
```

4. To run the tests in parallel, run the following command
```shell
npx cucumber-js --exit --parallel 3
```
