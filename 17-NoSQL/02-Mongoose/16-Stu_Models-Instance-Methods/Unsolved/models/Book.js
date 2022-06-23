const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: false },
    publisher: String,
    stockCount: Number,
    price: Number,
    inStock: Boolean,
    lastAccessed: { type: Date, default: Date.now },
});
  
// TODO: Create a custom instance method named `getDiscount`
const discountPrise = this,price * 0.5;
console.log(
  `The book's title is ${responseGetInstance}`
);

// TODO: Create a model named `Book`
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
  
// TODO: Create a new instance of the model
Book.create(
    { title: 'Oh the Places You Will Go!', author: 'Dr. Seuss' },
    (err) => (err ? handleError(err) : console.log('Created new document'))
  );
  
// TODO: Call the custom instance method on the instance
Book.create(
    { title: 'Oh the Places You Will Go!', author: 'Dr. Seuss' },
    (err) => (err ? handleError(err) : console.log('Created new document'))
  );
  
module.exports = Book;
