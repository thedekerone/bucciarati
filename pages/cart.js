import React from 'react'

import 'isomorphic-fetch'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import ProductosInCart from '../component/productViews/ProductosInCart'
import Layout from '../component/Layout'
import Error from '../component/views/Error'
import Spinner from '../component/views/Spinner'
import { Router } from '../routes'
import Boleta from '../component/views/Boleta'

const GET_USER = gql`
  {
    getUsers {
      _id
      username
      quantities {
        product {
          title
          image
          _id
          discount
          price
        }
        quantity
      }
    }
  }
`

let pricesDiscount = 10

class Cart extends React.Component {
  getDiscount(price, discount) {
    const newPrice = ((100 - discount) * price) / 100
    return newPrice
  }
  pricesTosum(array) {
    return array.reduce((a, b) => a + b).toFixed(2)
  }

  render() {
    return (
      <Layout>
        <div className='main'>
          <h2>Carrito de compras </h2>

          <Query query={GET_USER}>
            {({ client, loading, error, data }) => {
              if (loading) return <Spinner />
              if (error) return Router.pushRoute('/')
              console.log(data)

              return (
                <div className='container'>
                  <div className='container-products'>
                    <ProductosInCart
                      data={data.getUsers.quantities}
                      client={client}
                      user={data.getUsers}
                    />
                  </div>
                  <Boleta
                    data={data.getUsers.quantities}
                    pricesTosum={this.pricesTosum(
                      data.getUsers.quantities.map(
                        e => parseFloat(e.product.price) * e.quantity
                      )
                    )}
                    pricesDiscount={this.pricesTosum(
                      data.getUsers.quantities.map(e =>
                        this.getDiscount(
                          parseFloat(e.product.price) * e.quantity,
                          e.product.discount
                        )
                      )
                    )}
                  ></Boleta>
                </div>
              )
            }}
          </Query>
        </div>

        <style jsx>
          {`
            .main {
              margin-top: 10px;
              margin: 0 auto;
              max-width: 1200px;
            }
            .container {
              display: flex;

              flex-direction: column;
            }
            .container-products {
              width: 100%;
            }

            .btn {
              width: 100%;
              box-sizing: border-box;
              padding: 0.6rem;
              text-align: center;
              color: white;
              background: #e84855;
              position: relative;
              z-index: 19;
            }
            .btn:hover {
              cursor: pointer;
            }
            h2 {
              color: black;
            }
            @media (min-width: 660px) {
              .cart-boleta {
                margin-left: 70px;
              }
              .container {
                flex-direction: row;
              }
            }
          `}
        </style>
      </Layout>
    )
  }
}
export default Cart
