/**
 * Camelize a string, cutting the string by multiple separators like
 * hyphens, underscores and spaces.
 * 
 * @param {text} string Text to camelize
 * @return string Camelized text
 */
export const camelize = (text) => {
  return text.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();        
  });
};

/**
 * Decamelizes a string with/without a custom separator (underscore by default).
 * 
 * @param str String in camelcase
 * @param separator Separator for the new decamelized string.
 */
export const decamelize = (str, separator) => {
  separator = typeof separator === 'undefined' ? '_' : separator;

  /* eslint-disable prefer-template */
  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();
};
