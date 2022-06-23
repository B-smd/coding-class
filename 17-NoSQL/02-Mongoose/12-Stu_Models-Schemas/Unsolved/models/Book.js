// Define Mongoose
const mongoose = require('mongoose');

// TODO: Add a comment describing the functionality of the code below
// Create a new instance of the Mongoose schema to define shape of each document
const bookSchema = new mongoose.Schema({
  // Add individual properties and their types
  // Setting required to true will disallow null values
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Add a comment describing the functionality of the code below
// Using mongoose.model() to compile a model based on the schema
// 'Item' is the name of the model
// grocerySchema is the name of the schema we are using to create a new instance of the model
const Book = mongoose.model('Book', bookSchema);

// Error handler function to be called when an error occurs when trying to save a document
const handleError = (err) => console.error(err);

// TODO: Add a comment describing the functionality of the code below
// We use the model to create individual documents that have the properties as defined in our schema
Book.create(
  {
    title: 'Diary of Anne Frank',
    author: 'Anne Frank',
    publisher: 'Scholastic',
    stockCount: 10,
    price: 10,
    inStock: true,
  },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
Book.create(
  { title: 'Oh the Places You Will Go!', author: 'Dr. Seuss' },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
Book.create({ title: 'Harold and the Purple Crayon' }, (err) =>
  err ? handleError(err) : console.log('Created new document')
);

module.exports = Book;
