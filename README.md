# Kebab Case Converter

A lightweight TypeScript utility for converting strings into kebab-case format. This package is ideal for generating URL-friendly slugs, CSS class names, and other scenarios where a consistent, human-readable string format is desired.

## Features

- Converts strings from various formats to kebab-case.
- Supports Unicode normalization and removes diacritical marks from accented characters.
- Handles spaces, underscores, and special characters effectively.
- Minimal dependencies and easy integration into any TypeScript or JavaScript project.

## Installation

Install the package via npm:

```bash
bunx jsr add @emilien/kebab-case
```

## Usage

Import the `kebabCase` function and convert strings easily:

```typescript
import { kebabCase } from "@emilien/kebab-case";

const slug = kebabCase("Hello World");
console.log(slug); // Outputs: 'hello-world'

const className = kebabCase("C'est un éléphant");
console.log(className); // Outputs: 'c-est-un-elephant'

const cssName = kebabCase("backgroundColor");
console.log(cssName); // Outputs: 'background-color'
```

## Example

Convert various strings into kebab-case:

```typescript
console.log(kebabCase("SimpleString")); // simple-string
console.log(kebabCase("PascalCaseExample")); // pascal-case-example
console.log(kebabCase("string_with_underscores")); // string-with-underscores
console.log(kebabCase("A String with spaces and !special* characters?")); // a-string-with-spaces-and-special-characters
```

## API

### `kebabCase(input: string): string`

- **Parameters**:

  - `input` (string): The string to be converted to kebab-case.

- **Returns**:
  - A new string formatted in kebab-case, with accents removed and special characters replaced by hyphens.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
