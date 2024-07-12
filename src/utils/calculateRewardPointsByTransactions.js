// Importing the function to calculate points based on amount
import calculatePointsByAmount from "./calculatePointsByAmount";

// Exporting a function to calculate reward points by transactions
export function calculateRewardPointsByTransactions(incomingData) {
    // Using reduce to aggregate data into an object
    const updatedData = incomingData.reduce((pointsByCustomer, transaction) => {
        // Destructuring transaction object
        const { custid, customerName, transactionDate, amount } = transaction;

        // Getting month name from transactionDate
        const date = new Date(transactionDate);
        const month = date.toLocaleString('default', { month: 'long' });

        // Calculating points based on transaction amount
        const points = calculatePointsByAmount(amount);

        // Initializing customer if not already present in pointsByCustomer object
        if (!pointsByCustomer[custid]) {
            pointsByCustomer[custid] = {
                custid:0,
                customerName: '',
                monthlyRewardPoints: {},
                totalRewardPoints: 0,
                totalAmount: 0
            };
        }

        // Initializing monthly reward points if not already present for the month
        if (!pointsByCustomer[custid].monthlyRewardPoints[month]) {
            pointsByCustomer[custid].monthlyRewardPoints[month] = { points: 0, amount: 0 };
        }

        // Updating customer details and reward points
        pointsByCustomer[custid].custid = custid;
        pointsByCustomer[custid].customerName = customerName;
        pointsByCustomer[custid].monthlyRewardPoints[month].points += points;
        pointsByCustomer[custid].monthlyRewardPoints[month].amount += amount;
        pointsByCustomer[custid].totalRewardPoints += points;
        pointsByCustomer[custid].totalAmount += amount;

        return pointsByCustomer;
    }, {}); // Initial value for reduce is an empty object

    // Converting updatedData object into an array of customer data objects
    return Object.keys(updatedData).map(key => updatedData[key]);
}