import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#f4f4f4' }}>
      <h2>Кітап сөресі</h2>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/book-gallery">Book Gallery</Link></li>
        </ul>
      </nav>
    </header>
  );
}