export default function() {
  // simulates data coming from a database.
  return Promise.resolve(
    [
        {
          custid: 1,
          name: "Ram",
          amt: 120,
          transactionDt: "05-01-2024"
        },
        {
          custid: 1,
          name: "Ram",
          amt: 75,
          transactionDt: "05-21-2024"
        },
        {
          custid: 1,
          name: "Ram",
          amt: 94,
          transactionDt: "05-21-2024"
        },
        {
          custid: 1,
          name: "Ram",
          amt: 10,
          transactionDt: "06-01-2024"
        },
        {
          custid: 1,
          name: "Ram",
          amt: 75,
          transactionDt: "06-21-2024"
        },
        {
          custid: 1,
          name: "Ram",
          amt: 200,
          transactionDt: "07-01-2024"
        },
        {
          custid: 1,
          name: "Ram",
          amt: 1,
          transactionDt: "07-04-2024"
        },
        {
          custid: 1,
          name: "Ram",
          amt: 80,
          transactionDt: "07-03-2024"
        },
        {
          custid: 1,
          name: "Ram",
          amt: 224,
          transactionDt: "07-21-2024"
        },
        {
          custid: 2,
          name: "Rohan",
          amt: 125,
          transactionDt: "05-01-2024"
        },
        {
          custid: 2,
          name: "Rohan",
          amt: 75,
          transactionDt: "05-21-2024"
        },
        {
          custid: 2,
          name: "Rohan",
          amt: 10,
          transactionDt: "06-01-2024"
        },
        {
          custid: 2,
          name: "Rohan",
          amt: 75,
          transactionDt: "06-21-2024"
        },
        {
          custid: 2,
          name: "Rohan",
          amt: 200,
          transactionDt: "07-01-2024"
        },
        {
          custid: 2,
          name: "Rohan",
          amt: 224,
          transactionDt: "07-21-2024"
        },
        {
          custid: 3,
          name: "Naman jain",
          amt: 120,
          transactionDt: "06-21-2024"
        }
    ]
  );
};