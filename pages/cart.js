import React from "react";

import "isomorphic-fetch";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ProductosInCart from "../component/productViews/ProductosInCart";
import Layout from "../component/Layout";
import Error from "../component/views/Error";
import Spinner from "../component/views/Spinner";
import { Router } from "../routes";
import Boleta from "../component/views/Boleta";
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

              const pricesTosum =
                data.getUsers.bag.length > 0
                  ? data.getUsers.bag
                      .map(e => parseInt(e.price))
                      .reduce((a, b) => a + b)
                  : 0;
              const pricesDiscount =
                data.getUsers.bag.length > 0
                  ? data.getUsers.bag
                      .map(e => this.getDiscount(e.price, e.discount))
                      .reduce((a, b) => parseInt(a) + parseInt(b))
                  : 0;
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

                  <Boleta
                    data={data.getUsers.bag}
                    pricesTosum={pricesTosum}
                    pricesDiscount={pricesDiscount}
                  ></Boleta>
                </div>
              );
            }}
          </Query>
        </div>

        <style jsx>
          {`
            .main {
              margin-top: 10px;
            }
            .container {
              margin: 0 auto;
              max-width: 1200px;
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
