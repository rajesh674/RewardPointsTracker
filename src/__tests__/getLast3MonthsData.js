import getLast3MonthsData from './getLast3MonthsData';

describe('getLast3MonthsData', () => {
    it('returns an empty array if transactions array is empty', () => {
        const transactions = [];
        const result = getLast3MonthsData(transactions);
        expect(result).toEqual([]);
    });

    it('returns transactions that occurred exactly 3 months ago', () => {
        //const currentDate = new Date('2024-07-15');
        const transactions = [
            { transactionDate: '05-01-2024' },
            { transactionDate: '06-01-2024' }
        ];
        const result = getLast3MonthsData(transactions);
        expect(result).toEqual(transactions);
    });

    it('returns transactions that occurred within the last 3 months', () => {
        //const currentDate = new Date('2024-07-15');
        const transactions = [
            { transactionDate: '05-01-2024' },
            { transactionDate: '06-01-2024' },
            { transactionDate: '07-10-2024' } // older than 3 months
        ];
        const expectedTransactions = [
            { transactionDate: '06-01-2024' },
            { transactionDate: '07-10-2024' }
        ];
        const result = getLast3MonthsData(transactions);
        expect(result).toEqual(expectedTransactions);
    });

    it('returns an empty array if no transactions occurred within the last 3 months', () => {
        //const currentDate = new Date('2024-07-15');
        const transactions = [
            { transactionDate: '05-01-2024' },
            { transactionDate: '06-01-2024' },
            { transactionDate: '07-10-2024' } 
        ];
        const result = getLast3MonthsData(transactions);
        expect(result).toEqual([]);
    });
});