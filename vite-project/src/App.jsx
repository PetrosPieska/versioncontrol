import React, { useState } from 'react';
import tuoteKuva from "../images/nimeton.png";

function ProductPage() {
  const [quantity, setQuantity] = useState(3); // Oletusmäärä
  const product = { name: 'AMD Ryzen 5 3600', price: 245 }; // Tuotetiedot

  // Funktio vähentää määrää
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Funktio lisää määrää
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Lasketaan kokonaishinta
  const total = product.price * quantity;

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to product page!</h1>


      <img src={tuoteKuva} alt="Logo" style={{ width: '100px', height: '100px', left }} />
      
      <div>
        <label><strong>Select product</strong></label>
        <br />
        <label>
          Product: {product.name} ({product.price}€)
        </label>
        <br />
        <label>
          Quantity:
          <button onClick={handleDecrease}>-</button>
          <span style={{ margin: '0 10px' }}>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </label>
      </div>

      <h2>Order info</h2>
      <table border="1" style={{ margin: '0 auto', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>{quantity}</td>
            <td>{total}€</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductPage;
