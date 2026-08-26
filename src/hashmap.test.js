import { describe, expect, test } from "@jest/globals";
import HashMap from "./hashmap";

const hashmap = new HashMap();
hashmap.set("apple", "red");
hashmap.set("banana", "yellow");
hashmap.set("carrot", "orange");

// Tests Suit 1:
describe("HashMap", () => {
  test("The HashMap class should exist!", () => {
    expect(HashMap).toBeDefined();
  });

  test('hashmap.get("apple") should return red', () => {
    const output = hashmap.get("apple");
    const expected = "red";

    expect(output).toBe(expected);
  });

  test('hashmap.get("pineapple") should return null', () => {
    const output = hashmap.get("pineapple");
    const expected = null;

    expect(output).toBe(expected);
  });

  test("hashmap.length() should return 3", () => {
    const output = hashmap.length();
    const expected = 3;

    expect(output).toBe(expected);
  });

  test('hashmap.has("apple") should return true', () => {
    const output = hashmap.has("apple");
    const expected = true;

    expect(output).toBe(expected);
  });

  test('hashmap.has("pineapple") should return false', () => {
    const output = hashmap.has("pineapple");
    const expected = false;

    expect(output).toBe(expected);
  });

  test('hashmap.remove("pineapple") should return false', () => {
    const output = hashmap.remove("pineapple");
    const expected = false;

    expect(output).toBe(expected);
  });

  test("hashmap.length() should return 3", () => {
    const output = hashmap.length();
    const expected = 3;

    expect(output).toBe(expected);
  });

  test('hashmap.remove("apple") should return true', () => {
    const output = hashmap.remove("apple");
    const expected = true;

    expect(output).toBe(expected);
  });

  test("hashmap.length() should return 2", () => {
    const output = hashmap.length();
    const expected = 2;

    expect(output).toBe(expected);
  });

  test('hashmap.keys() should return ["banana", "carrot"]', () => {
    const output = hashmap.keys().toSorted();
    const expected = ["banana", "carrot"];

    expect(output).toEqual(expected);
  });

  test('hashmap.values() should return ["orange", "yellow"]', () => {
    const output = hashmap.values().toSorted();
    const expected = ["orange", "yellow"];

    expect(output).toEqual(expected);
  });

  test('hashmap.entries() should return [["banana", "yellow"], ["carrot", "orange"]]', () => {
    const output = hashmap.entries().toSorted();
    const expected = [
      ["banana", "yellow"],
      ["carrot", "orange"],
    ];

    expect(output).toEqual(expected);
  });

  test("hashmap.length() should return 0 after calling hashmap.clear()", () => {
    hashmap.clear();
    const output = hashmap.length();
    const expected = 0;

    expect(output).toBe(expected);
  });
});
