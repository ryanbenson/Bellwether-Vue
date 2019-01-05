import { isEmpty, containsBannedChars } from "../../src/libs/validation";

test("checks for empty string", () => {
  expect(isEmpty("")).toBe(true);
  expect(isEmpty("hello there!")).toBe(false);
});

test("checks for banned chars", () => {
  expect(containsBannedChars("hello > there")).toBe(true);
  expect(containsBannedChars("hello < there")).toBe(true);
});

test("checks for banned chars, but finds none", () => {
  expect(containsBannedChars("hello there!")).toBe(false);
});
