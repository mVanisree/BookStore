import Book from "../models/Book.js";

// Get all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single book
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add book
export const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update book
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete book
export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);

    res.json({
      message: "Book Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};