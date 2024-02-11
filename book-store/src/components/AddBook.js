import React, { useState } from 'react';
import axios from 'axios';
import './AddBook.css';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    isbn: '',
    publishDate: '',
    username: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://localhost:7034/api/Book', formData);
  
      if (response.status === 200) {
        console.log('Book added successfully');
        // Optionally, you can reset the form after a successful submission
        setFormData({
          title: '',
          author: '',
          genre: '',
          isbn: '',
          publishDate: '',
          username: '',
        });
      } else {
        console.error('Failed to add book');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-book-container">
      <h2 className='add-book-heading'>Add Book</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <label className="form-label">Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="form-input" required />

        <label className="form-label">Author:</label>
        <input type="text" name="author" value={formData.author} onChange={handleInputChange} className="form-input" required />

        <label className="form-label">Genre:</label>
        <input type="text" name="genre" value={formData.genre} onChange={handleInputChange} className="form-input" required />

        <label className="form-label">ISBN:</label>
        <input type="text" name="isbn" value={formData.isbn} onChange={handleInputChange} className="form-input" required />

        <label className="form-label">Publish Date:</label>
        <input type="date" name="publishDate" value={formData.publishDate} onChange={handleInputChange} className="form-input" required />

        <label className="form-label">Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} className="form-input" required />

        <button type="submit" className="form-button">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
