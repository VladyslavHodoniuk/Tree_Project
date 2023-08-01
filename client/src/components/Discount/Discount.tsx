import React from 'react';
import "./Discount.scss";
const Discount = () => {
    return (
        <div className="discount-wrapper">
            <div>
                <span className="span-article">- Final Sale -</span>
                <span className="span-discount">Get 30% Off</span>
                <button>Shop Now</button>
            </div>
        </div>
    );
};

export default Discount;