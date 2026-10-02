import { useParams } from 'react-router-dom';
import { getBookById } from '../data/books';
import { useCart } from '../context/CartContext';

export default function BookDetails() {
  const { id } = useParams();
  const book = getBookById(id);
  const { cart, dispatch } = useCart();
  
  if (!book) return <div>Book not found</div>;
  
  const inCart = cart.items.some(item => item.id === book.id);

  return (
    <div className="details-container">
      <div className="details-cover">
        <img src={book.cover} alt={book.title} />
      </div>
      <div className="details-info">
        <h1>{book.title}</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Category: {book.category}</p>
        <p className="price">${book.price}</p>
        <p style={{ marginBottom: '2rem', lineHeight: '1.8' }}>{book.description}</p>
        <button 
          onClick={() => dispatch({ type: 'ADD_ITEM', book })}
          disabled={inCart}
          style={{ padding: '1rem 2rem' }}
        >
          {inCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
