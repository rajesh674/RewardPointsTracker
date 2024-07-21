import logger from '../logger'; // Import logger module

// Function to get last 3 months data
export default function getLast3MonthsData(transactions) {
    // Get current date
    const currentDate = new Date();

    // Calculate date 3 months ago
    const threeMonthsAgoDate = new Date();
    threeMonthsAgoDate.setMonth(currentDate.getMonth() - 3);

    // Filter transactions that occurred in the last 3 months
    const last3MonthsData = transactions.filter(transaction => {
        const transactionDate = new Date(transaction.transactionDate);
        return transactionDate > threeMonthsAgoDate && transactionDate <= currentDate;
    });

    logger.log('get last 3 months data', last3MonthsData); // Log the filtered data
    return last3MonthsData; // Return transactions within the last 3 months
}