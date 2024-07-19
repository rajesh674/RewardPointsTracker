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
              amount: 10,
              transactionDate: "06-01-2024"
          },
          {
            custid: 1,
            customerName: "Ram",
            amount: 224,
            transactionDate: "07-10-2024"
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
              amount: 10,
              transactionDate: "06-01-2024"
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
          },
          {
            custid: 4,
            customerName: "Ramesh",
            amount: 150,
            transactionDate: "05-01-2023"
        },
        {
            custid: 4,
            customerName: "Ramesh",
            amount: 110,
            transactionDate: "06-21-2024"
        },
        {
            custid: 5,
            customerName: "Mohan",
            amount: 250,
            transactionDate: "06-01-2023"
        },
        {
            custid: 5,
            customerName: "Mohan",
            amount: 310,
            transactionDate: "07-21-2024"
        },
      ]
  );
};