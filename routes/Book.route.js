const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Book = require("../model/book");

router.get("/get-books", async (req, res) => {
    const books = await Book.find({});
    res.status(200).json(books);
});

router.post("/search-books", async (req, res) => {
    const regex = new RegExp(req.body.searchText, 'i');
    const books = await Book.find({ title: regex });
    res.status(200).json(books);
});

module.exports = router;