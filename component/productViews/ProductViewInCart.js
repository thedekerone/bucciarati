import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import Spinner from '../views/Spinner'

export default function Product(props) {
  // MUTATIONS

  const REMOVE_PRODUCT = gql`
    mutation removeProduct($product: ID!, $user: ID!) {
      removeProductFromBag(productID: $product, userID: $user) {
        username
      }
    }
  `
  const UPDATE_QUANTITY = gql`
    mutation($quantity: Int!, $product: ID!, $user: ID!) {
      updateQuantity(
        newQuantity: $quantity
        productID: $product
        userID: $user
      ) {
        quantities {
          quantity
        }
      }
    }
  `

  const removeFromCart = async (user, client) => {
    user._id
      ? removeProduct({
          variables: {
            product: props.data.product._id,
            user: user._id
          }
        }).then(() => {
          client.resetStore()
        })
      : null
  }

  // HOOKS

  const [agregar, setAgregar] = useState(props.data.quantity)

  const [cantidadNueva] = useMutation(UPDATE_QUANTITY)

  const [removeProduct] = useMutation(REMOVE_PRODUCT)

  const actualizarCantidad = async (user, client, cantidad) => {
    if (parseInt(cantidad)) {
      props.setLoading(true)

      user._id
        ? cantidadNueva({
            variables: {
              quantity: parseInt(cantidad),
              product: props.data.product._id,
              user: user._id
            }
          }).then(() => {
            client.resetStore()
            props.setLoading(false)
          })
        : console.log('no hay usuario')
    }
  }

  const handleFocus = event => {
    actualizarCantidad(props.user, props.client, event.target.value)
  }

  const handleChange = event => {
    setAgregar(event.target.value)
  }

  if (props.loading) return <Spinner></Spinner>

  return (
    <div>
      <div className='product'>
        <div className='product__img'>
          <img src={props.data.product.image} width='100%' alt='' />
        </div>
        <div className='product__description'>
          <div className='product-main'>
            <div className='product-title'>
              <h3>{props.data.product.title.toLowerCase()}</h3>
            </div>
            <div className='product-discount'>
              <span className='product-discount__price'>
                {props.data.product.price}
              </span>
              <span className='product-discount__percentage'>
                -{props.data.product.discount}%
              </span>
            </div>
            <div className='product-price'>
              <span>
                {(
                  ((100 - props.data.product.discount) *
                    props.data.product.price) /
                  100
                ).toFixed(2)}
                $
              </span>
            </div>
          </div>

          {/* info */}
          <div className='product-extra'>
            <div className='product-extra__cantidad'>
              <label>Cantidad: </label>
              <input
                onChange={async event => {
                  handleChange(event)
                }}
                onBlur={event => {
                  handleFocus(event)
                }}
                value={agregar}
                type='number'
                name='cantidad'
                id='cantidad'
                //value={props.quantity}
              />
            </div>
            <div
              className='product-extra__remove'
              onClick={async () => {
                removeFromCart(props.user, props.client)
              }}
            >
              Eliminar del carrito
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
					.product {
						display: grid;
						background: white;
						max-width: 1000px
						width: 100%;
						font-size: 11px;
						height: 100%;
						box-sizing: border-box;
						padding: 1em;
						grid-template: auto / auto 1fr ;
					}
					.product__img {
						grid-row: 1/2;
						padding-right: 1.5em;
						text-align: center;
						box-sizing: border-box;
					}
					.product__img img {
						max-width: 50px;

					}
					.product-title h3 {
						text-transform: capitalize;
						margin: 0;
						padding: .5em 0 .7em 0;
					}
					.product__description,
					.product__img {
						background: white;
						width: 100%;
					}
					.product__description {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						box-sizing: border-box;
					}

					.product-banner span {
						color: white;
						font-size: .7em;
						background: rgb(181, 0, 191);
						background: linear-gradient(90deg, rgba(181, 0, 191, 1) 0%, rgba(0, 8, 180, 1) 100%);
						padding: 0 .4em;
					}
					.product-discount {
						margin-bottom: .6em;
					}
					.product-discount__price {
						font-size: .8em;
						text-decoration: line-through
					}
					.product-discount__percentage {
						margin-left: .8em;
						color: red;

						font-size: 1em;
					}
					.product-price {
						font-size: 1.2rem;
						font-weight: bold;
						color: black;
					}

					.product-information__delivery {
						padding: 1.5em 0 .8em 0;
					}
					.product-information__reviews {
						display: flex;
						align-items: center;
					}
					.product-information__reviews--number {
						color: #ffca28;
						height: 20px;
						display: flex;
						align-items: center;
					}
					.product-extra{
						display:flex;
						flex-direction: column;
						justify-content:space-between;
					}
					.product-extra__cantidad{
						display:flex;
						justify-content:center;
						align-items:center;
					}
					.product-extra__remove{
						color:red;
					}
					.product-extra__remove:hover{
						cursor: pointer
					}
					#cantidad{
						width: 40px;
						border: 1px solid #aaa;
						font-size: 1.2em;
						margin-left:.4em;
						font-weight: bold;
						padding: .4em;
						text-align:center;
						border-radius: 10px;
					}
					.buttons {
						display: flex;
						width: 100%;
					}
					.btn {
						width: 100%;
						margin: 1rem;
						padding: .6rem;
						text-align: center;
						color: white;
						background: #e84855;
						position: relative;
						z-index: 19;
					}
					.cart {
						background: #fcba04;
					}
					

					@media (min-width: 860px) {
						.product {
							border-top: 1px solid grey;
							grid-template: auto/ auto 1fr;
							font-size: 15px;
							
							max-width: 900px;
						}
						
						.product__description {
							padding-left: ${props.wrap ? '3em' : '1.2em'};
						}
					}
				`}
      </style>
    </div>
  )
}
