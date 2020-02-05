// task4
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}
let salaries = {
  "John": 1000,
  "Pete": 3000,
  "Mary": 2500
};
let salaries = {}

console.log(sumSalaries(salaries))
