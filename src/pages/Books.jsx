import { useState } from 'react';
import { books } from '../data/books';
import BookCard from '../components/BookCard';

export default function Books() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(books.map(b => b.category))];
  
  const displayedBooks = filter === 'All' 
    ? books 
    : books.filter(b => b.category === filter);

  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>Browse Collection</h1>
      <div style={{ marginBottom: '2rem' }}>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            style={{ 
              marginRight: '1rem',
              backgroundColor: filter === cat ? 'var(--primary)' : 'transparent',
              border: '1px solid var(--primary)',
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="book-grid">
        {displayedBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
