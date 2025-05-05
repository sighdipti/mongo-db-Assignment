db.Customers.insertOne({
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      street: "123 Main Street",
      city: "Anytown",
      state: "CA"
    }
  });