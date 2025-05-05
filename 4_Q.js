db.Customers.updateOne(
    { name: "John Doe" }, // Find the document
    { $set: { "address.street": "456 Oak Lane" } } // Update the street address
  );