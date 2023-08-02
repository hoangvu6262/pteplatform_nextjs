export const slipWordhelper = (word: string): string[] => {
  let leftIndex = 0;
  let rightIndex = word.length - 1;
  let splittedWord = [];

  while (
    (word[leftIndex]?.match(/[^a-zA-Z ]/g) ||
      word[rightIndex]?.match(/[^a-zA-Z ]/g)) &&
    leftIndex < rightIndex
  ) {
    if (word[leftIndex]?.match(/[^a-zA-Z ]/g)) {
      leftIndex++;
    }

    if (word[rightIndex]?.match(/[^a-zA-Z ]/g)) {
      rightIndex--;
    }
  }

  if (rightIndex > leftIndex) {
    splittedWord = [
      word.slice(0, leftIndex),
      word.slice(leftIndex, rightIndex + 1),
      word.slice(rightIndex + 1, word.length),
    ];
  } else {
    splittedWord = [word, "", ""];
  }

  return splittedWord;
};
