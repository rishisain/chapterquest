import { Outlet, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function MainLayout() {
  const { cart } = useCart();
  const itemCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="navbar">
        <h2><Link to="/">ChapterQuest</Link></h2>
        <div className="nav-links">
          <Link to="/books">Browse Collection</Link>
          <Link to="/cart">Cart {itemCount > 0 && `(${itemCount})`}</Link>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}
