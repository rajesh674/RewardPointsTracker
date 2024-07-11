# Customer Rewards Program (Frontend)
A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.

## Overview
This project calculates reward points earned by customers based on their purchase transactions over a three-month period. The rewards program awards points according to specific rules based on transaction amounts.

## Project Description
- A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.

- A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each   transaction

- (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

- Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

## Tech Stack
- **Frontend:** React JS
- **Testing:** Jest & React Testing Library

## Getting Started

### Prerequisites

- Node.js and npm installed

### Setup

1. **Clone the repository:**    
https://github.com/rajesh674/RewardPointsTracker/

2. **Install dependencies:**
   npm install

3. **Start the React application:**
   npm start

4. **Test Case Run**
    npm run test

### Usage

The frontend application will be available at `http://localhost:3000`.

### Mock Data

The application uses mock data to simulate the rewards calculation. The mock data is defined in `src/api/dataService.js`.

### Running Appilcation Screenshots
![total-reward](https://github.com/sushmita30jan/reward-calculator/assets/total-reward.png)


### File Structure

reward-calculator/
├── src/
│   ├── __tests__/
│   │   ├── calculatePointsByAmount.js
        └── calculateRewardPointsByTransactions.js
│   ├── service/
│   │   ├── dataService.js
│   ├── enum/
│   │   ├── RewardThresholdAmountEnum.js
│   ├── utils/
│   │   ├── calculatePointsByAmount.js
        └── calculateRewardPointsByTransactions.js
│   ├── component/
    │   │   ├── ErrorPage
    │   │   ├    ├── index.js
    │   │   ├── Loader
    │   │   ├    ├── index.js
    │   │   ├── Tables
    │   │   ├    ├── index.js
    │   │   ├    ├── TableRows.js
│   │   └── ...
│   ├── Hooks/
│   │   ├── useApi.js
│   │   └── ...
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── setupTests.js
│   └── ...
├── package.json
└── ...
```