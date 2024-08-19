import { test, expect } from '@playwright/test';
import { MathOperations } from '../src/math';

test('has title', async ({ page }) => {
  const myMath = new MathOperations();

  expect(await myMath.devide(10, 0)).toBe(Infinity);
  expect(await myMath.devide(10, 5)).toBe(2);
});

test("chech name was changed properly", async ({ page }) => { 
  const myMath = new MathOperations();
  myMath.changeName("Lucy");
  expect(await myMath.user.name).toBe("Lucy");
})