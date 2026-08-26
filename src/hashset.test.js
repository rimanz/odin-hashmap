import { describe, expect, test } from "@jest/globals";
import HashSet from "./hashset";

const set = new HashSet();
set.set("apple");
set.set("banana");
set.set("carrot");

// Tests Suit 1:
describe("HashSet", () => {
  test("The set class should exist!", () => {
    expect(set).toBeDefined();
  });

  test("set.length() should return 3", () => {
    const output = set.length();
    const expected = 3;

    expect(output).toBe(expected);
  });

  test('set.has("apple") should return true', () => {
    const output = set.has("apple");
    const expected = true;

    expect(output).toBe(expected);
  });

  test('set.has("pineapple") should return false', () => {
    const output = set.has("pineapple");
    const expected = false;

    expect(output).toBe(expected);
  });

  test('set.remove("pineapple") should return false', () => {
    const output = set.remove("pineapple");
    const expected = false;

    expect(output).toBe(expected);
  });

  test("set.length() should return 3", () => {
    const output = set.length();
    const expected = 3;

    expect(output).toBe(expected);
  });

  test('set.remove("apple") should return true', () => {
    const output = set.remove("apple");
    const expected = true;

    expect(output).toBe(expected);
  });

  test("set.length() should return 2", () => {
    const output = set.length();
    const expected = 2;

    expect(output).toBe(expected);
  });

  test('set.keys() should return ["banana", "carrot"]', () => {
    const output = set.keys().toSorted();
    const expected = ["banana", "carrot"];

    expect(output).toEqual(expected);
  });

  test("set.length() should return 0 after calling set.clear()", () => {
    set.clear();
    const output = set.length();
    const expected = 0;

    expect(output).toBe(expected);
  });
});
