// Task-1
usePWSKILLS

// task-2
/*
You don't need to explicitly create a collection in MongoDB. 
Collections are created automatically when you insert data. 
So, you'll create the "Employees" collection in the next step.*/

// Task-3
db.Employees.insertMany([
    { name: "Alice", role: "Software Engineer", department: "Development" },
    { name: "Bob", role: "Product Manager", department: "Product" },
    { name: "Charlie", role: "Data Scientist", department: "Analytics" }
])

// Task-4

db.Employees.find().pretty()

// Task-5
db.Employees.drop()

// Task -6
db.dropDatabase()