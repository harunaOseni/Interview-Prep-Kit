// INVALID TRANSACTION

// A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

// Return a list of transactions that are possibly invalid. You may return the answer in any order.

// Example 1:

// Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
// Output: ["alice,20,800,mtv","alice,50,100,beijing"]
// Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
// Example 2:

// Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
// Output: ["alice,50,1200,mtv"]
// Example 3:

// Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
// Output: ["bob,50,1200,mtv"]

// Constraints:

// transactions.length <= 1000
// Each transactions[i] takes the form "{name},{time},{amount},{city}"
// Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
// Each {time} consist of digits, and represent an integer between 0 and 1000.
// Each {amount} consist of digits, and represent an integer between 0 and 2000.

/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
  // we will be using a set adn an array to solve this problem

  //first step create  a set and array;
  let invalidTransactions = new Set();
  let transactionInformation = [];

  //second step
  //arrange each info into the array in an array format and add an
  //object in an object containing the original string
  //using a for loop
  for (let transaction of transactions) {
    let [name, time, amount, city] = transaction.split(",");
    transactionInformation.push({
      name,
      time,
      amount,
      city,
      rawString: transaction,
    });
  }

  //third step
  //sort every element according to the time
  transactionInformation.sort(
    (peter, prubo) => Number(peter.time) - Number(prubo.time)
  );

  //fourth step
  //find out which transactions have prices over a 1000 and add them to the invalid set
  for (let transactionDict of transactionInformation) {
    if (transactionDict.amount > 1000) {
      invalidTransactions.push(transactionDict.rawString);
    }
  }

  //fifth  steps
  //find transaction that has the same name and is with a time difference of 60 with another transaction
  for (let i = 0; i < transactionInformation.length - 1; i++) {
    let currentTransaction = transactionInformation[i];
    let next = i + 1;
    let nextTransaction = transactionInformation[next];
    while (
      next < transactionInformation.length &&
      currentTransaction.time - nextTransaction.time <= 60
    ) {
      if (
        currentTransaction.name === nextTransaction.name &&
        currentTransaction.city !== nextTransaction.city
      ) {
        invalidTransactions.add(currentTransaction.rawString);
        invalidTransactions.add(nextTransaction.rawString);
      }
      next++;
    }
  }

  return Array.from(invalidTransactions);
};
