export default function shuffleArray<T = any>(array: T[]) {
  const arrayCopy = [...array];

  for (let i = (array.length - 1); i >= 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * i);

    const temporaryValue = arrayCopy[i];
    arrayCopy[i] = arrayCopy[randomIndex];
    arrayCopy[randomIndex] = temporaryValue;
  }

  return arrayCopy;
}
