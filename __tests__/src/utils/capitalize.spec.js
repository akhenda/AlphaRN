import { capitalizeWord, capitalizeWords } from 'src/utils/capitalize';

describe('Utils', () => {
  describe('capitalizeWord', () => {
    const words = ['pegasus', 'wraithsAREcoming', 'aTlaNTis'];
    const expectedWords = ['Pegasus', 'Wraithsarecoming', 'Atlantis'];

    it('should capitalize word', () => {
      words.forEach((word, index) => {
        expect(capitalizeWord(word)).toEqual(expectedWords[index]);
      });
    });
  });

  describe('capitalizeWords', () => {
    const sentences = [
      'the wRaiThs are   almost here',
      'dR. McKay and Sam are siTTing ON A TREE',
      'ronon dEx is jasoN momoA',
    ];
    const expectedSentences = [
      'The Wraiths Are   Almost Here',
      'Dr. Mckay And Sam Are Sitting On A Tree',
      'Ronon Dex Is Jason Momoa',
    ];

    it('should capitalize each word in a sentence', () => {
      sentences.forEach((sentence, index) => {
        expect(capitalizeWords(sentence)).toEqual(expectedSentences[index]);
      });
    });
  });
});
