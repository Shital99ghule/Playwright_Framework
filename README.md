npx cross-env ENV=stage npx playwright test --project=chromium --headed  //run your all test case in different enviironment
npx cross-env ENV=stage npx playwright test loginHRM.spec.ts --project=chromium --headed  //run your single  test case in different enviironment
npx playwright test //run all test on browser in headless mode
npx playwright test --headed //run all test on browser in headed  mode
npx playwright test --workers=3  //run 3 workers with parallel mode
npx playwright test loginHRM.spec.ts --project=chromium --headed  //run single test on browser in headed  mode
npx playwright test  --project=chromium //run all test on different browser in headless mode.
