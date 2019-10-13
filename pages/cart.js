import React from "react";

import "isomorphic-fetch";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ProductosInCart from "../component/productViews/ProductosInCart";
import Layout from "../component/Layout";
import Error from "../component/views/Error";
import Spinner from "../component/views/Spinner";
import { Router } from "../routes";
const GET_USER = gql`
  {
    getUsers {
      _id
      username
      bag {
        _id
        title
        image
        price
        tags
        discount
      }
    }
  }
`;
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 0
    };
  }
  getDiscount = (price, discount) => {
    const newPrice = Math.round(((100 - discount) * price) / 100);
    return newPrice;
  };

  getSum = (array = []) => {
    array;
  };

  render() {
    return (
      <Layout>
        <div className="main">
          <h2>Carrito de compras </h2>

          <Query query={GET_USER}>
            {({ client, loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return Router.pushRoute("/");
              const pricesTosum = data.getUsers.bag
                .map(e => parseInt(e.price))
                .reduce((a, b) => a + b);

              const pricesDiscount = data.getUsers.bag
                .map(e => this.getDiscount(e.price, e.discount))
                .reduce((a, b) => parseInt(a) + parseInt(b));
              console.log(pricesDiscount);
              return (
                <div className="container">
                  <div className="container-products">
                    <ProductosInCart
                      data={data.getUsers.bag}
                      client={client}
                      user={data.getUsers}
                    />
                  </div>
                  <div className="cart-boleta">
                    <h3>Boleta</h3>
                    <ul>
                      {data.getUsers.bag.map(e => {
                        return (
                          <li className="cart-boleta__product" key={e._id}>
                            <span className="product-title">
                              {e.title.toLowerCase()}
                            </span>
                            <span className="product-price">${e.price}</span>
                          </li>
                        );
                      })}
                      <li className="cart-boleta__product price">
                        <span className="product-title">price:</span>
                        <span className="product-price original">
                          ${pricesTosum}.00
                        </span>
                      </li>
                      <li className="cart-boleta__product">
                        <span className="product-title">priceDiscount:</span>
                        <span className="product-price discount">
                          ${pricesDiscount}.00
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            }}
          </Query>
        </div>

        <style jsx>
          {`
            .main {
              margin-top: 50px;
            }
            .container {
              margin: 0 auto;
              max-width: 1200px;
              margin-top: 50px;
              display: flex;

              flex-direction: column;
            }
            .container-products {
              width: 100%;
            }
            .cart-boleta {
              height: 100%;
              width: 100%;
              max-width: 400px;
            }
            ul {
              margin: 0;
              padding: 0;
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
            }
            .original {
              text-decoration: line-through;
              color: red;
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
    );
  }
}
export default Cart;
