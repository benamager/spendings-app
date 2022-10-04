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

const getMonthName = (index: number) => {
  return monthsInOrder[index];
};

export default getMonthName;
