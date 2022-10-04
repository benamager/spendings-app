/* getMonthFromIndex.tsx function */
const monthsInOrder = [
  "januar",
  "februar",
  "marts",
  "april",
  "maj",
  "juni",
  "juli",
  "august",
  "september",
  "oktober",
  "november",
  "december",
];

const getMonthFromIndex = (index: number) => {
  return monthsInOrder[index];
};

export default getMonthFromIndex;
