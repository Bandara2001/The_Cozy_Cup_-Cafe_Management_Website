import React from 'react';


const Shop = () => {
    return (
        <div className="shop-container">
            <main>
                <section className="all-products-section">
                    <h1>Latest Arrivals</h1>
                            <div className="category-section">
                        <div className="product-grid">
                            <div className="product-card">
                                <img src="https://pauladeenmagazine.com/wp-content/uploads/2018/06/fd2.jpg" />
                                <h2>Garlic bread</h2>
                                  <h5><p>Crispy and golden, loaded with savory garlic and buttery flavors—perfect as a snack or side dish.</p></h5>
                                  <p><b>Price = Rs.500</b> </p>
                                <a href="http://localhost:3000/shop" className="buy-button">Shop more</a>
                            </div>

                            <div className="product-card">
                                <img src="https://static1.squarespace.com/static/5d4db21e02c9a3000161e7e6/5e12086562ad5d43f3bd8ea7/648a14c40de86f50ee2f6e73/1686777935999/4F7A5162.jpg?format=1500w" />
                                <h2>Croissant</h2>
                                <h5><p>Flaky, buttery layers of goodness, freshly baked to perfection. Ideal for breakfast or tea.</p></h5>
                                    <p><b>Price = Rs.300 </b></p>
                               <a href="http://localhost:3000/shop" className="buy-button">Shop more</a>
                            </div>
                        
                            <div className="product-card">
                                <img src="https://www.cocoandbean.com.au/cdn/shop/files/new_website_photos_6.png?v=1725325518&width=1500" />
                                <h2> Browinie </h2>
                                <h5><p>Rich, fudgy, and irresistibly chocolatey—an all-time favorite indulgence.</p></h5>
                                    <p><b>Price = Rs.500 </b></p>
                                    <a href="http://localhost:3000/shop" className="buy-button">Shop more</a>
                            </div>
                            
                            <div className="product-card">
                                <img src="https://m.media-amazon.com/images/I/61L3CzrO76L.jpg" />
                                <h2>Cappuccino</h2>
                                <h5><p>A perfect blend of bold espresso and velvety froth for a comforting pick-me-up.</p></h5>
                                    <p><b>Price = Rs.600 </b></p>
                                    <a href="http://localhost:3000/shop" className="buy-button">Shop more</a>
                            </div>
                        </div>
                    </div>

                  
                </section>
            </main>
        </div>
    );
};

export default Shop;