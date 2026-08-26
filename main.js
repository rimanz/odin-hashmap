import HashMap from "./src/hashmap.js";

const test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.get("apple"));
console.log(test.length());

console.log(test.get("kite"));
test.set("kite", "white");
console.log(test.get("kite"));

console.log(test.has("frog"));
console.log(test.has("snake"));

console.log(test.has("hat"));
console.log(test.remove("hat"));
console.log(test.remove("cap"));
console.log(test.has("hat"));
console.log(test.length());

console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.set("moon", "silver");
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
