# Odin HashMap

An implementation of a hashmap created as an exercise for [The Odin Project](https://www.theodinproject.com/lessons/javascript-hashmap).

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
src/
	hashmap.js
	hashmap.test.js
```

## Usage

Import the `HashMap` class and use its methods:

```js
import HashMap from "./src/hashmap.js";

const list = new HashMap();
```

Note: `hashmap.js` is exported as an ES module (`export default class HashMap`).

## API

- `new HashMap()` — create an empty list

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
