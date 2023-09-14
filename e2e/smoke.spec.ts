import {expect, test} from "@playwright/test";

test("App loads and nav works", async ({page}) => {
  await page.goto("/");

  // refer https://github.com/kentcdodds/kentcdodds.com/blob/main/e2e/smoke.spec.ts
  await expect(page.getByText(/Welcome to Remix/i)).toBeVisible();
});
