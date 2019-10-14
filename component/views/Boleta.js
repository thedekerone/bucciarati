import React from "react";

export default function Boleta({ data, pricesDiscount, pricesTosum }) {
  return (
    <div className="cart-boleta">
      <h3>Boleta</h3>
      <div className="boleta-container">
        <ul>
          {data.map(e => {
            return (
              <li className="cart-boleta__product" key={e._id}>
                <span className="product-title">{e.title.toLowerCase()}</span>
                <span className="product-price">${e.price}</span>
              </li>
            );
          })}
          <li className="cart-boleta__product price">
            <span className="product-title">price:</span>
            <span className="product-price original">${pricesTosum}.00</span>
          </li>
          <li className="cart-boleta__product">
            <span className="product-title">priceDiscount:</span>
            <span className="product-price discount">${pricesDiscount}.00</span>
          </li>
          <div className="btn">PAY NOW</div>
        </ul>
      </div>

      <style jsx>
        {`
          .cart-boleta {
            height: 100%;
            width: 100%;
            max-width: 700px;
            padding: 0 1em;
            box-sizing: border-box;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          .original {
            text-decoration: line-through;
            color: red;
          }
          .cart-boleta__product {
            display: flex;
            margin: 1.5em auto;
            justify-content: space-between;
          }
          .product-title {
            text-transform: capitalize;
          }
          .product-price {
            font-weight: bold;
            color: black;
          }
          .price {
            margin-top: 5em;
            border-top: 1px solid black;
          }
        `}
      </style>
    </div>
  );
}
