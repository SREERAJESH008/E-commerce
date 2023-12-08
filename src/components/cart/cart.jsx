import"./cart.css"

const cart = () => {
    return ( <div className="mad">
        <div cart-main>
            
  <header>
    <h1>Shopping Cart</h1>
  </header>

  <div class="cart-container">
    <div class="cart-item">
      {/* <img src="product1.jpg" alt="Product 1"> */}
      <div class="cart-item-details">
        <h2>Product 1</h2>
        <p>Price: $19.99</p>
        <p>Quantity: 1</p>
      </div>
      <button>Remove</button>
    </div>

    <div class="cart-item">
      {/* < img src="product2.jpg" alt="Product 2"> */}
      <div class="cart-item-details">
        <h2>Product 2</h2>
        <p>Price: $29.99</p>
        <p>Quantity: 2</p>
      </div>
      <button>Remove</button>
    </div>

    <div class="cart-total">
      <p>Total: $79.97</p>
    </div>

    <a href="#" class="checkout-btn">Proceed to Checkout</a>
  </div>

        </div>
    </div> 
    );
}
 
export default cart;