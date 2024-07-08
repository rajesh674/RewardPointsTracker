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
  pointsPerTransaction.forEach(pointsPerTransaction => {
    let { custid, name, month, points, amt } = pointsPerTransaction;
    if (!byCustomer[custid]) {
      byCustomer[custid] = [];
    }
    if (!totalPointsByCustomer[name]) {
      totalPointsByCustomer[name] = { name: name, points: 0, amt: 0 };
    }
    totalPointsByCustomer[name].points += points;
    totalPointsByCustomer[name].amt += amt;

    if (byCustomer[custid][month]) {
      byCustomer[custid][month].points += points;
      byCustomer[custid][month].monthNumber = month;
      byCustomer[custid][month].numTransactions++;
      byCustomer[custid][month].amt += amt;
    }
    else {
      byCustomer[custid][month] = {
        custid,
        name,
        monthNumber: month,
        month: months[month],
        numTransactions: 1,
        points,
        amt,
      }
    }
  });
  let totalByCustomer = [];
  for (var custKey in byCustomer) {
    byCustomer[custKey].forEach(cRow => {
      totalByCustomer.push(cRow);
    });
  }

  let totByCustomer = [];
  for (custKey in totalPointsByCustomer) {
    totByCustomer.push({
      name: custKey,
      points: totalPointsByCustomer[custKey].points,
      amt: totalPointsByCustomer[custKey].amt,
    });
  }
  return {
    summaryByCustomer: totalByCustomer,
    pointsPerTransaction,
    totalPointsByCustomer: totByCustomer
  };
}