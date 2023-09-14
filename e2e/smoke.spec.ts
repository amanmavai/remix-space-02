import {expect, test} from "@playwright/test";

test("App loads and nav works", async ({page}) => {
  await page.goto("/");

  // refer kentcdodds.com github to create this test
});
