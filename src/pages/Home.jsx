import { Link } from 'react-router-dom';
import { books } from '../data/books';
import BookCard from '../components/BookCard';

export default function Home() {
  const featured = books.slice(0, 4);

  return (
    <div>
      <section style={{ textAlign: 'center', margin: '4rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to ChapterQuest</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Free shipping on orders over $35
        </p>
        <Link to="/books">
          <button style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>See Bestsellers</button>
        </Link>
      </section>

      <section>
        <h2 style={{ marginBottom: '1.5rem' }}>Featured Books</h2>
        <div className="book-grid">
          {featured.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
