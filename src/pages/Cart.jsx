import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, dispatch } = useCart();
  
  const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 35 || subtotal === 0 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cart.items.length === 0) {
    return (
      <div style={{ textAlign: 'center', margin: '4rem 0' }}>
        <h2 style={{ marginBottom: '1rem' }}>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Shopping Cart</h1>
      
      <div>
        {cart.items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <img src={item.cover} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>${item.price}</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <input 
                type="number" 
                min="1" 
                value={item.quantity}
                onChange={(e) => dispatch({ 
                  type: 'UPDATE_QUANTITY', 
                  id: item.id, 
                  quantity: parseInt(e.target.value) || 1
                })}
                style={{ width: '60px', padding: '0.5rem', background: '#333', color: 'white', border: 'none', borderRadius: '4px' }}
              />
              <button 
                onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}
                style={{ backgroundColor: '#ef4444' }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <p><span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span></p>
        <p><span>Shipping:</span> <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></p>
        {shipping > 0 && (
          <p style={{ fontSize: '0.9rem', color: 'var(--accent)' }}>
            Add ${(35 - subtotal).toFixed(2)} more for free shipping!
          </p>
        )}
        <h3><span>Total:</span> <span>${total.toFixed(2)}</span></h3>
        
        <button style={{ width: '100%', marginTop: '2rem', padding: '1rem' }}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
