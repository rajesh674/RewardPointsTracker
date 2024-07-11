export default function() {
  // simulates data coming from a database.
  return Promise.resolve(
      [{
              custid: 1,
              customerName: "Ram",
              amount: 120,
              transactionDate: "05-01-2024"
          },
          {
              custid: 1,
              customerName: "Ram",
              amount: 75,
              transactionDate: "05-21-2024"
          },
          {
              custid: 1,
              customerName: "Ram",
              amount: 94,
              transactionDate: "05-21-2024"
          },
          {
              custid: 1,
              customerName: "Ram",
              amount: 10,
              transactionDate: "06-01-2024"
          },
          {
              custid: 1,
              customerName: "Ram",
              amount: 75,
              transactionDate: "06-21-2024"
          },
          {
              custid: 1,
              customerName: "Ram",
              amount: 200,
              transactionDate: "07-01-2024"
          },
          {
              custid: 1,
              customerName: "Ram",
              amount: 1,
              transactionDate: "07-04-2024"
          },
          {
              custid: 1,
              customerName: "Ram",
              amount: 80,
              transactionDate: "07-03-2024"
          },
          {
              custid: 1,
              customerName: "Ram",
              amount: 224,
              transactionDate: "07-21-2024"
          },
          {
              custid: 2,
              customerName: "Rohan",
              amount: 125,
              transactionDate: "05-01-2024"
          },
          {
              custid: 2,
              customerName: "Rohan",
              amount: 75,
              transactionDate: "05-21-2024"
          },
          {
              custid: 2,
              customerName: "Rohan",
              amount: 10,
              transactionDate: "06-01-2024"
          },
          {
              custid: 2,
              customerName: "Rohan",
              amount: 75,
              transactionDate: "06-21-2024"
          },
          {
              custid: 2,
              customerName: "Rohan",
              amount: 200,
              transactionDate: "07-01-2024"
          },
          {
              custid: 2,
              customerName: "Rohan",
              amount: 224,
              transactionDate: "07-21-2024"
          },
          {
              custid: 3,
              customerName: "naman jain",
              amount: 120,
              transactionDate: "06-21-2024"
          }
      ]
  );
};