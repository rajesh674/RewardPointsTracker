import {
    RewardThresholdAmount
} from "../enum/RewardThresholdAmountEnum";
import logger from '../logger';

const calculatePointsByAmount = (amount) => {
    if (typeof amount !== "number" || amount < 0) {
        throw new Error("Invalid transaction amount");
    }
    let points = 0;
    let over100 = amount - RewardThresholdAmount.OVER_100;
    if (amount >= 0 && amount <= RewardThresholdAmount.BETWEEN_50_AND_100) {
        // plus 0 point for every dollar spent over $50 in each transaction
        points = 0;
    }
    if (over100 > 0) {
        // A customer receives 2 points for every dollar spent over $100 in each transaction      
        points += (over100 * 2) + (1 * 50);
    }
    if (
        amount > RewardThresholdAmount.BETWEEN_50_AND_100 &&
        amount <= RewardThresholdAmount.OVER_100
    ) {
        // plus 1 point for every dollar spent over $50 in each transaction
        points += amount - RewardThresholdAmount.BETWEEN_50_AND_100;
    }
    logger.log('Earn Reward points By Amount: ', points);
    return Math.floor(points);
};

export default calculatePointsByAmount;