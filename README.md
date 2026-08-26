# Odin HashMap

An implementation of a hashmap and hashset created as an exercise for [The Odin Project](https://www.theodinproject.com/lessons/javascript-hashmap).

## Overview

This repository contains an implementation of a `HashMap` class and a lightweight test setup using Jest. It's intended for learning data structures and practicing JavaScript.

## Prerequisites

- Node.js (v14+ recommended)
- npm (bundled with Node.js)

## Quick Start

1. Clone the repo:

```bash
git clone https://github.com/rimanz/odin-hashmap.git
cd odin-hashmap
```

2. Install dependencies:

```bash
npm install
```

3. Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

Run Jest with coverage:

```bash
npm test -- --coverage
```

## Project Structure

```
babel.config.js
main.js
package.json
README.md
src/
    hashmap.js
    hashmap.test.js
    hashset.js
    hashset.test.js
```

## Usage

Import the `HashMap` class and use its methods:

```js
import HashMap from "./src/hashmap.js";

const hashmap = new HashMap();
```

Then use the API's documented bellow as necessary.

Note: `hashmap.js` is exported as an ES module (`export default class HashMap`).

## API

- `new HashMap()` - create an empty hashmap
- `set(key, value)` - add or update an entry (key-value pair) in the hashmap
- `get(key)` - returns the value for an existing key, otherwise `null`
- `length()` - returns the number of entries in the hashmap
- `has(key)` - returns `true` if a key exists, otherwise `false`
- `keys()` - returns an array of keys
- `values()` - returns an array of values
- `entries()` - returns an array of key/value pair arrays: `[[k1, v1], [k2, v2]]`
- `remove(key)` - removes the entry with the given key and returns `true` if removed, otherwise `false`
- `clear()` - removes all entries

### HashMap API

- `new HashMap()` - create an empty hashmap
- `set(key, value)` - add or update an entry (key-value pair) in the hashmap
- `get(key)` - returns the value for an existing key, otherwise `null`
- `length()` - returns the number of entries in the hashmap
- `has(key)` - returns `true` if a key exists, otherwise `false`
- `keys()` - returns an array of keys
- `values()` - returns an array of values
- `entries()` - returns an array of key/value pair arrays: `[[k1, v1], [k2, v2]]`
- `remove(key)` - removes the entry with the given key and returns `true` if removed, otherwise `false`
- `clear()` - removes all entries

### HashSet API

- `new HashSet()` - create an empty hash set
- `add(value)` - add a value to the set
- `has(value)` - returns `true` if the value exists in the set, otherwise `false`
- `remove(value)` - removes the value and returns `true` if removed, otherwise `false`
- `size()` - returns the number of values in the set
- `values()` - returns an array of values
- `clear()` - removes all values from the set

## Tests

Tests are run with Jest. See the `test` script in `package.json`.

```bash
npm test
```

## Contributing

Contributions and improvements are welcome. Open an issue or submit a pull request with a clear description and tests for new behavior.

## License

ISC

## Author

Riman Das
