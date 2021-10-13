// TWO CITY SCHEDULING

/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function (costs) {
  let res = 0;
  const costsLength = costs.length / 2;
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let personACostArray = costs.slice(0, costsLength);
  let personBCostArray = costs.slice(costsLength);

  console.log(personACostArray);
  console.log(personBCostArray);

  for (let [value1, value2] of personACostArray) {
    res += value1;
  }
  for (let [value1, value2] of personBCostArray) {
    res += value2;
  }

  return res;
};
