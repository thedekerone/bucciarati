import React, { useState } from 'react'
import ProductViewInCart from './ProductViewInCart'
import ProductView from './ProductView'
import { Link } from '../../routes'
import Spinner from '../views/Spinner'

export default function Productos(props) {
  const [loading, setLoading] = useState(false)

  return (
    <div className='productos'>
      {props.data.map(e => {
        return (
          <ProductViewInCart
            client={props.client}
            key={e.product._id}
            user={props.user}
            loading={loading}
            setLoading={setLoading}
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
