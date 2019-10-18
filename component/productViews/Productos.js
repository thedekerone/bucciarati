import React from 'react'
import ProductView from './ProductView'
import { Link, Router } from '../../routes'
// aeaeaeaea
export default function Productos(props) {
  return (
    <div className='productos'>
      {props.data.map(e => {
        console.log(e)
        return (
          <ProductView key={e._id} user={props.user} data={e} wrap={false} />
        )
      })}

      <style jsx>
        {`
          .productos {
            display: grid;
            gap: 1em;

            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          }
          a {
            position: relative;
            z-index: 1;
          }
          @media (min-width: 660px) {
            .productos {
              grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
            }
          }
        `}
      </style>
    </div>
  )
}
