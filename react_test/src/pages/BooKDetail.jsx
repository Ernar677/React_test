import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <img src={book.image} alt={book.title} style={{ width: '300px', height: '400px', objectFit: 'cover' }} />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p><strong>Author:</strong> {book.author}</p>
    </div>
  );
}