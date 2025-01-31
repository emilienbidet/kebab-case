/**
 * @module KebabCaseConverter
 *
 * This module provides a single utility for transforming strings into kebab case format.
 * It includes a function for converting strings to kebab-case, which is useful for
 * generating URL-friendly slugs, CSS class names, and other scenarios where a consistent
 * hyphenated format is desired.
 *
 * The module handles accented characters and various input formats, ensuring clean and readable output.
 *
 * @example
 * ```typescript
 * import { kebabCase } from './StringCaseConverter';
 *
 * const slug = kebabCase('Hello World'); // Returns: 'hello-world'
 * console.log(slug);
 *
 * const className = kebabCase("éléphant"); // Returns: 'elephant'
 * console.log(className);
 * ```
 */

/**
 * A type alias for a function that transforms a string into another string format.
 *
 * @typedef {Function} CaseFunction
 * @param {string} input - The string to be transformed.
 * @returns {string} - The transformed string.
 *
 * @example
 * const exampleFunction: CaseFunction = (input) => input.toUpperCase();
 * console.log(exampleFunction("hello")); // Outputs: "HELLO"
 */
type CaseFunction = (input: string) => string;

/**
 * Converts a given string to kebab-case.
 *
 * This function transforms an input string into kebab-case format by following these steps:
 * - Decomposes combined characters into their base characters and diacritical marks.
 * - Removes diacritical marks to normalize accented characters.
 * - Trims leading and trailing whitespace from the string.
 * - Converts all characters to lowercase.
 * - Replaces non-alphanumeric characters, including spaces and underscores, with hyphens.
 * - Removes any leading or trailing hyphens that may result from the conversion process.
 *
 * This function is useful for creating URL-friendly slugs, CSS class names, or any scenario
 * requiring a consistent and human-readable string format.
 *
 * @param input - The input string to be converted into kebab-case.
 * @returns A new string formatted in kebab-case, with accents removed and special characters replaced by hyphens.
 *
 * @example
 * ```typescript
 * kebabCase("Hello World"); // Returns: "hello-world"
 * kebabCase("This_is_a_test"); // Returns: "this-is-a-test"
 * kebabCase("C'est un éléphant"); // Returns: "c-est-un-elephant"
 * ```
 */

export const kebabCase: CaseFunction = (input) => {
  return input
    .normalize("NFD") // Decompose combined characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .trim() // Remove leading and trailing spaces
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};
