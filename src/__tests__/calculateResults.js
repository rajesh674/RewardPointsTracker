// Import the function to be tested
import { calculateResults } from '../common/calculateResults';

describe('calculateResults function', () => {
  // Test case for normal scenario
  it('calculates points per transaction correctly', () => {
    const testData = [
      { custid: 1, name: 'Ram', amt: 289, transactionDt: '05-01-2024' },
      { custid: 2, name: 'Rohan', amt: 200, transactionDt: '01-20-2024' }
    ];

    const result = calculateResults(testData);

    expect(result).toBeDefined();
    expect(result.pointsPerTransaction).toHaveLength(2);

    
    // Example assertions for specific transactions
    expect(result.pointsPerTransaction[0].points).toBe(428); // Ram points for $289 transaction
    expect(result.pointsPerTransaction[1].points).toBe(250);  // Rohan points for $200 transaction
  });

  // Test case for error handling
  it('throws an error for invalid transaction amount', () => {
    const testData = [
      { custid: 1, name: 'Ram', amt: 'invalid', transactionDt: '05-15-2023' },
      { custid: 2, name: 'Rohan', amt: -50, transactionDt: '01-05-2023' }
    ];

    // Wrap the function call in a function to catch the error
    const testFunction = () => calculateResults(testData);

    expect(testFunction).toThrow('Invalid transaction amount');
  });

  // Test case for summaryByCustomer
  it('aggregates points and amount correctly by customer', () => {
    const testData = [
      { custid: 1, name: 'Ram', amt: 289, transactionDt: '05-01-2024' },
      { custid: 1, name: 'Ram', amt: 85, transactionDt: '01-20-2023' },
      { custid: 2, name: 'Rohan', amt: 200, transactionDt: '01-05-2023' }
    ];

    const result = calculateResults(testData);

    expect(result).toBeDefined();
    expect(result.summaryByCustomer).toHaveLength(3); // Assuming three different entries based on testData

    // Example assertions for specific customers
    const johnSummary = result.summaryByCustomer.find(summary => summary.name === 'Ram');
    const janeSummary = result.summaryByCustomer.find(summary => summary.name === 'Rohan');

    expect(johnSummary.points).toBe(428); // Total points for Ram
    expect(johnSummary.amt).toBe(289);   // Total amount for Ram
    expect(janeSummary.points).toBe(250);  // Total points for Rohan
    expect(janeSummary.amt).toBe(200);    // Total amount for Rohan
  });

  // Add more tests as needed to cover all scenarios and edge cases
});
