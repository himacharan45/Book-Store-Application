import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateBook.css'

const UpdateBook = ({ bookId, title: initialTitle, author: initialAuthor, genre: initialGenre, isbn: initialIsbn, publishDate: initialPublishDate, username: initialUsername }) => {
  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [genre, setGenre] = useState(initialGenre);
  const [isbn, setIsbn] = useState(initialIsbn);
  const [publishDate, setPublishDate] = useState(initialPublishDate);
  const [username, setUsername] = useState(initialUsername);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // You can perform additional actions on component mount or update
    // For example, fetching additional data based on bookId
    // Make sure to clean up any side effects if necessary
    return () => {
      // Cleanup logic here
    };
  }, [bookId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      // Make the API call using Axios
      const response = await axios.put(`/api/books/${bookId}`, {
        title,
        author,
        genre,
        isbn,
        publishDate,
        username,
      });

      // Handle the response accordingly (e.g., show success message)
      console.log('Book updated successfully:', response.data);

    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error updating book:', error.message);
      setError('Failed to update book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Update Book</h2>
      <form onSubmit={handleUpdate}>
        <label className='updatelabel'>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label className='updatelabel'>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

        <label className='updatelabel'>Genre:</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />

        <label className='updatelabel'>ISBN:</label>
        <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />

        <label className='updatelabel'>Publish Date:</label>
        <input type="datetime-local" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} />

        <label className='updatelabel'>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <button type="submit" disabled={loading}>Update Book</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default UpdateBook;
