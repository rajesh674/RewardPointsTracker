// Import the function to be tested
import { calculateRewardPointsByTransactions } from '../utils/calculateRewardPointsByTransactions';

describe('calculateRewardPointsByTransactions function', () => {
  // Test case for normal scenario
  it('calculates points per transaction correctly', () => {
    const testData = [
      { custid: 1, customerName: 'Ram', amount: 289, transactionDate: '05-01-2024' },
      { custid: 2, customerName: 'Rohan', amount: 200, transactionDate: '01-20-2024' }
    ];

    const result = calculateRewardPointsByTransactions(testData);

    expect(result).toBeDefined();
    expect(result.pointsPerTransaction).toHaveLength(2);

    
    // Example assertions for specific transactions
    expect(result.pointsPerTransaction[0].points).toBe(428); // Ram points for $289 transaction
    expect(result.pointsPerTransaction[1].points).toBe(250);  // Rohan points for $200 transaction
  });

  // Test case for error handling
  it('throws an error for invalid transaction amount', () => {
    const testData = [
      { custid: 1, customercustomerName: 'Ram', amount: 'invalid', transactionDate: '05-15-2024' },
      { custid: 2, customercustomerName: 'Rohan', amount: -50, transactionDate: '01-05-2024' }
    ];

    // Wrap the function call in a function to catch the error
    const testFunction = () => calculateRewardPointsByTransactions(testData);

    expect(testFunction).toThrow('Invalid transaction amount');
  });

  // Test case for summaryByCustomer
  it('aggregates points and amount correctly by customer', () => {
    const testData = [
      { custid: 1, customerName: 'Ram', amount: 289, transactionDate: '05-01-2024' },
      { custid: 1, customerName: 'Ram', amount: 85, transactionDate: '01-20-2024' },
      { custid: 2, customerName: 'Rohan', amount: 200, transactionDate: '01-05-2024' }
    ];

    const result = calculateRewardPointsByTransactions(testData);

    expect(result).toBeDefined();
    expect(result.summaryByCustomer).toHaveLength(3); // Assuming three different entries based on testData

    // Example assertions for specific customers
    const johnSummary = result.summaryByCustomer.find(summary => summary.customerName === 'Ram');
    const janeSummary = result.summaryByCustomer.find(summary => summary.customerName === 'Rohan');

    expect(johnSummary.points).toBe(428); // Total points for Ram
    expect(johnSummary.amount).toBe(289);   // Total amount for Ram
    expect(janeSummary.points).toBe(250);  // Total points for Rohan
    expect(janeSummary.amount).toBe(200);    // Total amount for Rohan
  });

  // Add more tests as needed to cover all scenarios and edge cases
});
