import React from 'react';

const FoodCategory1 = () => {
    return (
        <div className="category-section">
                        <h2>Food </h2>
                        <div className="product-grid">
                            <div className="product-card">
                                <img src="https://pauladeenmagazine.com/wp-content/uploads/2018/06/fd2.jpg" />
                                <h2>Garlic bread</h2>
                                  <h5><p>Crispy and golden, loaded with savory garlic and buttery flavors—perfect as a snack or side dish.</p></h5>
                                  <p><b>Price = Rs.500</b> </p>
                                  <a href="http://localhost:3000/shopping-cart" className="buy-button">Add to cart</a>
                            </div>
                            <div className="product-card">
                                <img src="https://static1.squarespace.com/static/5d4db21e02c9a3000161e7e6/5e12086562ad5d43f3bd8ea7/648a14c40de86f50ee2f6e73/1686777935999/4F7A5162.jpg?format=1500w" />
                                <h2>Croissant</h2>
                                <h5><p>Flaky, buttery layers of goodness, freshly baked to perfection. Ideal for breakfast or tea.</p></h5>
                                    <p><b>Price = Rs.300 </b></p>
                                    <a href="http://localhost:3000/shopping-cart" className="buy-button">Add to cart</a>
                            </div>
                            <div className="product-card">
                            <img src="https://montougo.ca/wp-content/uploads/2024/10/bahnmi-daikon-1500x1500.jpg" />
                                 <h2>Sandwitch</h2>
                                 <h5><p>A wholesome delight stuffed with fresh veggies, meats, and flavorful sauces, made to satisfy.</p></h5>
                                    <p><b>Price = Rs.700</b> </p>
                                    <a href="http://localhost:3000/shopping-cart" className="buy-button">Add to cart</a>
                            </div>
                            <div className="product-card">
                                <img src="https://img.freepik.com/premium-photo/hamburger-table-restaurant_807701-2420.jpg" />
                                <h2>Burger</h2>
                                <h5><p>Juicy and hearty, stacked with premium ingredients for an unbeatable taste.</p></h5>
                                    <p><b>Price = Rs.1000</b> </p>
                                    <a href="http://localhost:3000/shopping-cart" className="buy-button">Add to cart</a>
                            </div>
                        </div>
                    </div>
    );
};

export default FoodCategory1;