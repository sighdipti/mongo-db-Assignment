db.Customers.aggregate([
    {
      $lookup: {
        from: "Purchases", // Join with Purchases
        localField: "_id", // Customer ID
        foreignField: "customerId", // Purchase reference
        as: "purchases" // Alias for the joined data
      }
    },
    {
      $unwind: "$purchases" // Expand the 'purchases' array
    },
    {
      $match: { "purchases.amount": { $gt: 100 } } // Filter by amount
    }
  ]).pretty();