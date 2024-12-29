import React from 'react';

const DessertsCategory2 = () => {
    return (
        <div className="category-section">
            <h2>Desserts</h2>
            <div className="product-grid">
                <div className="product-card">
                    <img src="https://www.cocoandbean.com.au/cdn/shop/files/new_website_photos_6.png?v=1725325518&width=1500" alt="Brownie" />
                    <h2>Brownie</h2>
                    <h5><p>Rich, fudgy, and irresistibly chocolatey—an all-time favorite indulgence.</p></h5>
                    <p><b>Price = Rs.500</b></p>
                    <a href="http://localhost:3000/shopping-cart" className="buy-button">Add to cart</a>
                </div>
                <div className="product-card">
                    <img src="https://i5.walmartimages.com/asr/cf968fd9-85be-49f0-ae11-8103d942429d.a9634b8c8025cde5ef4a16e52f00034e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt="Muffine" />
                    <h2>Muffine</h2>
                    <h5><p>Soft and fluffy, bursting with flavors in every bite. A perfect grab-and-go treat.</p></h5>
                    <p><b>Price = Rs.200</b></p>
                    <a href="http://localhost:3000/shopping-cart" className="buy-button">Add to cart</a>
                </div>
                <div className="product-card">
                    <img src="https://bakeology.ae/wp-content/uploads/2023/11/RED-VELVET-CAKE.jpg" alt="Red Velvet Cake" />
                    <h2>Red Velvet Cake</h2>
                    <h5><p>Luxuriously moist layers with a velvety texture, topped with creamy frosting.</p></h5>
                    <p><b>Price = Rs.1200</b></p>
                    <a href="http://localhost:3000/shopping-cart" className="buy-button">Add to cart</a>
                </div>
                <div className="product-card">
                    <img src="https://i0.wp.com/ovenfresh.in/wp-content/uploads/2023/02/Baked-Cherry-Cheese-Cake750gms1.jpg?fit=1500%2C1500&ssl=1" alt="Cheesecake" />
                    <h2>Cheesecake</h2>
                    <h5><p>Smooth, creamy, and melt-in-your-mouth perfection with a hint of tanginess.</p></h5>
                    <p><b>Price = Rs.1500</b></p>
                    <a href="http://localhost:3000/shopping-cart" className="buy-button">Add to cart</a>
                </div>
            </div>
        </div>
    );
};

export default DessertsCategory2;