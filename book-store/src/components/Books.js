// Books.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import './Books.css';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title"); // Default search type

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let response;

        if (searchTerm) {
          // If there is a search term, use the appropriate API endpoint based on the search type
          if (searchType === "author") {
            response = await axios.get(`https://localhost:7034/api/Book/author/${searchTerm}`);
          } else if (searchType === "title") {
            response = await axios.get(`https://localhost:7034/api/Book/bytitle/${searchTerm}`);
          } else if (searchType === "genre") {
            response = await axios.get(`https://localhost:7034/api/Book/bygenre/${searchTerm}`);
          }
        } else {
          // If no search term, fetch all books
          response = await axios.get("https://localhost:7034/api/Book");
        }

        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [searchTerm, searchType]); // Update the effect when searchTerm or searchType changes

  return (
    <div className="booksContainer">
      <h2>All Books</h2>

      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
        </select>
      </div>

      <div className="booksGrid">
        {books.map((book) => (
          <div className="bookCard" key={book.bookId}>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Publish Date: {new Date(book.publishDate).toLocaleDateString()}</p>
            <p>Username: {book.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
