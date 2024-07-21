// Importing the function to calculate points based on amount
import calculatePointsByAmount from "./calculatePointsByAmount";
import getLast3MonthsData from './getLast3MonthsData';
import logger from '../logger';

// Exporting a function to calculate reward points by transactions
export function calculateRewardPointsByTransactions(incomingData) {

    const last3MonthsTransactions = getLast3MonthsData(incomingData);

    // Using reduce to aggregate data into an object
    const updatedData = last3MonthsTransactions.reduce((pointsByCustomer, transaction) => {

        // Destructuring transaction object
        const { custid, customerName, transactionDate, amount } = transaction;

        // Getting month name from transactionDate
        const date = new Date(transactionDate);
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        // Calculating points based on transaction amount
        const points = calculatePointsByAmount(Number(amount));

        // Initializing customer if not already present in pointsByCustomer object
        if (!pointsByCustomer[custid]) {
            pointsByCustomer[custid] = {
                custid: 0,
                customerName: '',
                monthlyRewardPoints: {},
                totalRewardPoints: 0,
                totalAmount: 0,
                year: ''
            };
        }

        // Initializing monthly reward points if not already present for the month
        if (!pointsByCustomer[custid].monthlyRewardPoints[month]) {
            pointsByCustomer[custid].monthlyRewardPoints[month] = { points: 0, year, amount: 0 };
        }

        // Updating customer details and reward points
        pointsByCustomer[custid].custid = custid;
        pointsByCustomer[custid].customerName = customerName;
        pointsByCustomer[custid].monthlyRewardPoints[month].points += points;
        pointsByCustomer[custid].monthlyRewardPoints[month].amount += Number(amount);
        pointsByCustomer[custid].totalRewardPoints += points;
        pointsByCustomer[custid].totalAmount += Number(amount);
        pointsByCustomer[custid].year = year;
        logger.log('Earn Reward points By Customer: ', pointsByCustomer);
        return pointsByCustomer;
    }, {}); // Initial value for reduce is an empty object

    // Converting updatedData object into an array of customer data objects
    return Object.keys(updatedData).map(key => updatedData[key]);
}