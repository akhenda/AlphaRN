export const capitalizeWord = (word) => {
  if (!word) return;

  const letters = Array.from(word);
  return letters[0].toUpperCase() + letters.splice(1).join('').toLowerCase();
};

export const capitalizeWords = (sentence) => {
  const words = sentence.split(' ');

  return words.map(word => capitalizeWord(word.trim())).join(' ');
};
