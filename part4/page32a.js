let customers = [
  {
    id: 1,
    name: "John",
    balance: 5000,
    transactions: [],
  },
  {
    id: 2,
    name: "Amy",
    balance: 5000,
    transactions: [],
  },
];

function checkBalance(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log(customer);
}

function deposit(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance: customer.balance + amount,
        transactions: [
          ...customer.transactions,
          {
            type: "credit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}
function withdraw(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance: customer.balance - amount,
        transactions: [
          ...customer.transactions,
          {
            type: "debit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}
function showTransactions(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log(customer.transactions);
}
deposit(1, 1500);
checkBalance(1)
deposit(1, 1000);
checkBalance(1)
withdraw(1, 2000);
checkBalance(1)
