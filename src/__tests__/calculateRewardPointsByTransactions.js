// Import the function to be tested
import { calculateRewardPointsByTransactions } from '../utils/calculateRewardPointsByTransactions';
import calculatePointsByAmount from '../utils/calculatePointsByAmount';

describe('calculateRewardPointsByTransactions', () => {
  it('returns empty array for empty input', () => {
      const input = [];
      const result = calculateRewardPointsByTransactions(input);
      expect(result).toEqual([]);
  });

  it('correctly calculates reward points for a single transaction', () => {
      const input = [
          { custid: '1', customerName: 'John Doe', transactionDate: '2024-01-15', amount: 100 }
      ];
      const result = calculateRewardPointsByTransactions(input);
      expect(result).toHaveLength(1);
      expect(result[0].totalRewardPoints).toBe(calculatePointsByAmount(100));
      // Add more specific assertions based on your expected output structure
  });

  it('correctly aggregates points by customer for multiple transactions', () => {
      const input = [
          { custid: '1', customerName: 'John Doe', transactionDate: '2024-01-15', amount: 100 },
          { custid: '1', customerName: 'John Doe', transactionDate: '2024-02-20', amount: 200 },
          { custid: '2', customerName: 'Jane Smith', transactionDate: '2024-01-05', amount: 150 }
      ];
      const result = calculateRewardPointsByTransactions(input);
      expect(result).toHaveLength(2); // Assuming two customers in the input
      expect(result[0].totalRewardPoints).toBe(
          calculatePointsByAmount(100) + calculatePointsByAmount(200)
      );
      expect(result[1].totalRewardPoints).toBe(calculatePointsByAmount(150));
      // Add more specific assertions based on your expected output structure
  });

  // Add more test cases to cover edge cases, such as transactions spanning across months, etc.
});

