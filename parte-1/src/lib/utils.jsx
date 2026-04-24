/**
 * Merges class names into a single string
 * @param {Array} classes - An array of class names or falsy values
 * @returns {string} A string of merged class names, filtered for truthy values
 */
export const mcn = (classes = []) => {
  return classes
    .filter(
      (className) =>
        typeof className === "string" && className.trim().length > 0
    )
    .join(" ");
};