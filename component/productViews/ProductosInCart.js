import React from 'react'
import ProductViewInCart from './ProductViewInCart'
import ProductView from './ProductView'
import { Link } from '../../routes'
// aeaeaeaea
export default function Productos(props) {
  //  console.log(props.data)
  return (
    <div className='productos'>
      {props.data.map(e => {
        return (
          <ProductViewInCart
            client={props.client}
            key={e.product._id}
            user={props.user}
            data={e}
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
