const calculatePointsByAmount = (amount) => {
    if (typeof amount !== 'number' || amount < 0) {
        throw new Error('Invalid transaction amount');
      }
      let points = 0;
      let over100 = amount - 100;
      if (amount >= 0 && amount <= 50) {
        // plus 0 point for every dollar spent over $50 in each transaction
        points = 0;
      }
      if (amount > 100) {
        // A customer receives 2 points for every dollar spent over $100 in each transaction      
        points += (over100 * 2) + (1 * 50);
      }
      if (amount > 50 && amount <= 100) {
        // plus 1 point for every dollar spent over $50 in each transaction
        points += amount - 50;
      }
    return points;
};

export default calculatePointsByAmount;