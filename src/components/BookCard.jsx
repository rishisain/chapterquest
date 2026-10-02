import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Badge from "./Badge";

export default function BookCard({ book }) {
  const { cart, dispatch } = useCart();
  const inCart = cart.items.some(item => item.id === book.id);
  
  const discount = book.originalPrice 
    ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100) 
    : 0;

  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", book });
  };

  return (
    <div className="card book-card">
      <Link to={`/books/${book.id}`} className="book-card-cover">
        <img 
          src={book.cover} 
          alt={book.title} 
          loading="lazy" 
          onError={(e) => { e.target.src = 'https://placehold.co/200x300/e5e7eb/6'; }} 
        />
      </Link>
      {book.badge && (
        <span className="book-card-badge">
          <Badge label={book.badge} />
        </span>
      )}
      <div className="book-card-details">
        <h3>{book.title}</h3>
        <p>${book.price}</p>
        <button onClick={addToCart} disabled={inCart}>
          {inCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
