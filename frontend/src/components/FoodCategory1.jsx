import React from 'react';
import { useCart } from '../contexts/CartContext'; // Import CartContext

const FoodCategory1 = () => {
    const { addToCart } = useCart(); // Use addToCart from the CartContext

    const handleAddToCart = (item) => {
        addToCart(item);
    };

    return (
        <div className="category-section">
            <h2>Food Category</h2>

            <div className="product-grid">
                <div className="product-card">
                    <img 
                        src="https://pauladeenmagazine.com/wp-content/uploads/2018/06/fd2.jpg" 
                        alt="Garlic bread" // Added alt text for accessibility
                        className="product-image"
                    />
                    <h3>Garlic Bread</h3>
                    <p>Crispy and golden, loaded with savory garlic and buttery flavors—perfect as a snack or side dish.</p>
                    <p><b>Price = Rs.500</b></p>
                    <button 
                        onClick={() => handleAddToCart({ name: 'Garlic bread', price: 500 })}
                        className="buy-button"
                    >
                        Add to Cart
                    </button>
                </div>

                <div className="product-card">
                    <img 
                        src="https://static1.squarespace.com/static/5d4db21e02c9a3000161e7e6/5e12086562ad5d43f3bd8ea7/648a14c40de86f50ee2f6e73/1686777935999/4F7A5162.jpg?format=1500w" 
                        alt="Croissant"
                        className="product-image"
                    />
                    <h3>Croissant</h3>
                    <p>Flaky, buttery layers of goodness, freshly baked to perfection. Ideal for breakfast or tea.</p>
                    <p><b>Price = Rs.300</b></p>
                    <button 
                        onClick={() => handleAddToCart({ name: 'Croissant', price: 300 })}
                        className="buy-button"
                    >
                        Add to Cart
                    </button>
                </div>

                <div className="product-card">
                    <img 
                        src="https://montougo.ca/wp-content/uploads/2024/10/bahnmi-daikon-1500x1500.jpg" 
                        alt="Sandwich"
                        className="product-image"
                    />
                    <h3>Sandwich</h3>
                    <p>A wholesome delight stuffed with fresh veggies, meats, and flavorful sauces, made to satisfy.</p>
                    <p><b>Price = Rs.700</b></p>
                    <button 
                        onClick={() => handleAddToCart({ name: 'Sandwich', price: 700 })}
                        className="buy-button"
                    >
                        Add to Cart
                    </button>
                </div>

                <div className="product-card">
                    <img 
                        src="https://img.freepik.com/premium-photo/hamburger-table-restaurant_807701-2420.jpg" 
                        alt="Burger"
                        className="product-image"
                    />
                    <h3>Burger</h3>
                    <p>Juicy and hearty, stacked with premium ingredients for an unbeatable taste.</p>
                    <p><b>Price = Rs.1000</b></p>
                    <button 
                        onClick={() => handleAddToCart({ name: 'Burger', price: 1000 })}
                        className="buy-button"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCategory1;
