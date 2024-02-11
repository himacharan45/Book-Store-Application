import React, { useState } from 'react';
import axios from 'axios';
import './DeleteBook.css';

const DeleteBook = () => {
  const [bookId, setBookId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      setError(null);

      // Make the API call using Axios to delete the book by bookId
      await axios.delete(`https://localhost:7034/api/Book/${bookId}`);

      // Handle the deletion success accordingly (e.g., show success message)
      setSuccess(true);
      console.log('Book deleted successfully');

    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error deleting book:', error.message);
      setError('Failed to delete book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className='add-book-heading'>Delete Book</h2>
      <label className='add-book-heading'>Book ID:</label>
      <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} />

      <button onClick={handleDelete} disabled={loading}>
        Delete Book
      </button>

      {success && <p style={{ color: 'green' }}>Book deleted successfully!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default DeleteBook;
