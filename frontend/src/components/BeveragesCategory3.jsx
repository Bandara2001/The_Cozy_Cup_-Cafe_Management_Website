import React from 'react';

const BeveragesCategory3 = () => {
    return (
        <div className="category-section">
            <h2>Beverages</h2>
            <div className="product-grid">
                <div className="product-card">
                    <img src="https://m.media-amazon.com/images/I/61L3CzrO76L.jpg" alt="Cappuccino" />
                    <h2>Cappuccino</h2>
                    <h5>
                        <p>A perfect blend of bold espresso and velvety froth for a comforting pick-me-up.</p>
                    </h5>
                    <p><b>Price = Rs.600</b></p>
                    <a href="http://localhost:3000/shopping-cart" className="buy-button">Add to cart</a>
                </div>
                <div className="product-card">
                    <img src="https://www.rachelcooks.com/wp-content/uploads/2024/10/oat-milk-hot-chocolate-1500-11-square.jpg" alt="Hot Chocolate" />
                    <h2>Hot Chocolate</h2>
                    <h5>
                        <p>A warm, rich drink made with premium chocolate to soothe your soul.</p>
                    </h5>
                    <p><b>Price = Rs.400</b></p>
                    <a href="http://localhost:3000/shopping-cart" className="buy-button">Add to cart</a>
                </div>
                <div className="product-card">
                    <img src="https://m.media-amazon.com/images/I/71BSVR7LQZL.jpg" alt="Coffee" />
                    <h2>Coffee</h2>
                    <h5>
                        <p>Brewed fresh, aromatic, and energizing—your go-to beverage for any time of day.</p>
                    </h5>
                    <p><b>Price = Rs.600</b></p>
                    <a href="http://localhost:3000/shopping-cart" className="buy-button">Add to cart</a>
                </div>
                <div className="product-card">
                    <img src="https://www.throughthefibrofog.com/wp-content/uploads/2022/02/apple-and-pear-smoothie-3.jpg" alt="Smoothies" />
                    <h2>Smoothies</h2>
                    <h5>
                        <p>Cool, refreshing, and packed with natural fruits for a healthy boost.</p>
                    </h5>
                    <p><b>Price = Rs.800</b></p>
                    <a href="http://localhost:3000/shopping-cart" className="buy-button">Add to cart</a>
                </div>
            </div>
        </div>
    );
};

export default BeveragesCategory3;