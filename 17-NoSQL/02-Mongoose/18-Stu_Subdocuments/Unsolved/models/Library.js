const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
});

  //
  // TODO: Add the `books` subdocument to the parent document as an array


  //Genre.find({}).exec((err, collection) => {
constt librarySchema = new mongoose.Schema({
  
})      [
        { name: 'Kids' },
        { name: 'Kids' },
        { name: 'Kids' },
        { name: 'Romance' },
        { name: 'Mystery' },
        { name: 'Contemporary' },
        { name: 'Biography' },
      ],
      (insertErr) => {
        if (insertErr) {
          handleError(insertErr); 
        }
      }
    );
  }

  lastAccessed: { type: Date, default: Date.now },

// TODO: Create a model named `Library`

// TODO: Create a new instance of the model including the subdocuments

module.exports = Library;
