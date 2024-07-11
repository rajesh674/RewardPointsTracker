import calculatePointsByAmount from "./calculatePointsByAmount";
export function calculateRewardPointsByTransactions(incomingData) {
  // Calculate points per transaction
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const pointsPerTransaction = incomingData.map((transaction) => {
    let points = calculatePointsByAmount(transaction.amount);
    const month = new Date(transaction.transactionDate).getMonth();
    return { ...transaction, points, month };
  });

  // Convert pointsPerTransaction using reduce
  const { byCustomer, totalPointsByCustomer } = pointsPerTransaction.reduce(
    (acc, { custid, customerName, month, points, amount }) => {
      // Destructure accumulated objects
      let { byCustomer, totalPointsByCustomer } = acc;

      // Initialize byCustomer[custid] if it doesn't exist
      byCustomer[custid] = byCustomer[custid] || [];

      // Initialize totalPointsByCustomer[customerName] if it doesn't exist
      totalPointsByCustomer[customerName] = totalPointsByCustomer[
        customerName
      ] || { customerName: customerName, points: 0, amount: 0 };

      // Update total points and amount for the customer
      totalPointsByCustomer[customerName].points += points;
      totalPointsByCustomer[customerName].amount += amount;

      // Find or create the entry for this month in byCustomer[custid]
      let monthEntry = byCustomer[custid].find(
        (entry) => entry.monthNumber === month
      );
      if (monthEntry) {
        // If month entry exists, update it
        monthEntry.points += points;
        monthEntry.numTransactions++;
        monthEntry.amount += amount;
      } else {
        // If month entry doesn't exist, create a new entry
        byCustomer[custid].push({
          custid,
          customerName,
          monthNumber: month,
          month: months[month],
          numTransactions: 1,
          points,
          amount,
        });
      }
      // Return the accumulated objects in the accumulator
      return { byCustomer, totalPointsByCustomer };
    },
    { byCustomer: {}, totalPointsByCustomer: {} }
  );

  // Convert byCustomer object into a flat array of customer rows
  let totalByCustomer = Object.keys(byCustomer).flatMap((custKey) =>
    byCustomer[custKey].map((cRow) => cRow)
  );

  // Convert totalPointsByCustomer object into an array of objects with name, points, and amount properties
  let totByCustomer = Object.entries(totalPointsByCustomer).map(
    ([custKey, data]) => ({
      customerName: custKey,
      points: data.points,
      amount: data.amount,
    })
  );

  return {
    summaryByCustomer: totalByCustomer,
    pointsPerTransaction,
    totalPointsByCustomer: totByCustomer,
  };
}