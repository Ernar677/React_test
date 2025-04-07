import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import BookGallery from './pages/BookGallery';
import BookDetail from './pages/BookDetail';
import ProtectRoute from './component/ProtectRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
              <Home />
          }
        />
        <Route
          path="/book-gallery"
          element={
              <BookGallery />
          }
        />
        <Route
          path="/book/:id"
          element={
              <BookDetail />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}