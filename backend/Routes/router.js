const express = require('express')
const router = express.Router()
const bookModel = require("../model/model");
router.post("/", async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
      return res.status(400).json({ message: "Please provide all details" });
    }
    const book = await bookModel.create({
      title,
      author,
      publishedYear,
    });
    res.status(201).json({ addedPost: book });
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await bookModel.find({});
    res.status(200).json({ books: books });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ book: book });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    const { id } = req.params;
    const book = await bookModel.findByIdAndUpdate(
      id,
      {
        title,
        author,
        publishedYear,
      },
      { new: true }
    );
    if (!book) {
      return res.status(400).json({ message: "Book not found" });
    }
    return res.status(200).json({ book: book });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
})

module.exports = router