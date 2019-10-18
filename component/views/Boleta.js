import React from 'react'

export default function Boleta({
  data,
  pricesDiscount,
  pricesTosum,
  quantity
}) {
  return (
    <div className='cart-boleta'>
      <h3>Boleta</h3>
      <div className='boleta-container'>
        <ul>
          {data.map((e, index) => {
            return (
              <li className='cart-boleta__product' key={e.product._id}>
                <span className='product-title'>
                  {e.quantity}x {e.product.title.toLowerCase()}
                </span>
                <span className='product-price'>
                  ${(e.product.price * e.quantity).toFixed(2)}
                </span>
              </li>
            )
          })}
          <li className='cart-boleta__product price'>
            <span className='product-title'>price:</span>
            <span className='product-price original'>${pricesTosum}</span>
          </li>
          <li className='cart-boleta__product'>
            <span className='product-title'>priceDiscount:</span>
            <span className='product-price discount'>${pricesDiscount}</span>
          </li>
          <div className='btn'>PAY NOW</div>
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
          .btn {
            max-width: 600px;
            margin-bottom: 2rem;
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
  )
}
