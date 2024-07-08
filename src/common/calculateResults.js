export function calculateResults(incomingData) {
  // Calculate points per transaction
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const pointsPerTransaction = incomingData.map(transaction => {
    if (typeof transaction.amt !== 'number' || transaction.amt < 0) {
      throw new Error('Invalid transaction amount');
    }
    let points = 0;
    let over100 = transaction.amt - 100;

    if (over100 > 0) {
      // A customer receives 2 points for every dollar spent over $100 in each transaction      
      points += (over100 * 2) + (1 * 50);
    }
    if (transaction.amt >= 50 && transaction.amt <= 100) {
      // plus 1 point for every dollar spent over $50 in each transaction
      points += transaction.amt - 50;
    }
    const month = new Date(transaction.transactionDt).getMonth();
    return { ...transaction, points, month };
  });
  
  let byCustomer = {};
  let totalPointsByCustomer = {};
  pointsPerTransaction.map(({ custid, name, month, points, amt }) => {
    // Initialize byCustomer[custid] if it doesn't exist
    byCustomer[custid] = byCustomer[custid] || [];
  
    // Initialize totalPointsByCustomer[name] if it doesn't exist
    totalPointsByCustomer[name] = totalPointsByCustomer[name] || { name: name, points: 0, amt: 0 };
  
    // Update total points and amount for the customer
    totalPointsByCustomer[name].points += points;
    totalPointsByCustomer[name].amt += amt;
  
    // Find or create the entry for this month in byCustomer[custid]
    let monthEntry = byCustomer[custid].find(entry => entry.monthNumber === month);
    if (monthEntry) {
      // If month entry exists, update it
      monthEntry.points += points;
      monthEntry.numTransactions++;
      monthEntry.amt += amt;
    } else {
      // If month entry doesn't exist, create a new entry
      byCustomer[custid].push({
        custid,
        name,
        monthNumber: month,
        month: months[month],
        numTransactions: 1,
        points,
        amt,
      });
    }
  });
  
// Convert byCustomer object into a flat array of customer rows
  let totalByCustomer = Object.keys(byCustomer).flatMap(custKey =>
    byCustomer[custKey].map(cRow => cRow)
  );

// Convert totalPointsByCustomer object into an array of objects with name, points, and amt properties
  let totByCustomer = Object.entries(totalPointsByCustomer).map(([custKey, data]) => ({
    name: custKey,
    points: data.points,
    amt: data.amt,
  }));

  return {
    summaryByCustomer: totalByCustomer,
    pointsPerTransaction,
    totalPointsByCustomer: totByCustomer
  };
}