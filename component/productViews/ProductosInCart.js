import React from 'react'
import ProductViewInCart from './ProductViewInCart'
import ProductView from './ProductView'
import { Link } from '../../routes'
// aeaeaeaea
export default function Productos(props) {
  return (
    <div className='productos'>
      {props.data.map((e, index) => {
        console.log(e.q, ': ', e.p._id)
        return (
          <ProductViewInCart
            client={props.client}
            key={e.p._id}
            quantity={e.q}
            user={props.user}
            data={e.p}
            wrap={false}
          />
        )
      })}

      <style jsx>
        {`
          .productos {
            display: grid;
            gap: 1em;
            margin-top: 40px;
            grid-template-columns: 1fr;
          }
          @media (min-width: 660px) {
            .productos {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  )
}
