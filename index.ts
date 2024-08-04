type CaseFunction = (input: string) => string;

export const kebabCase: CaseFunction = (input) => {
  return input
    .normalize("NFD") // Decompose combined characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .trim() // Remove leading and trailing spaces
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};
