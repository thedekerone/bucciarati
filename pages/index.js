import Spinner from "../component/views/Spinner";
import React, { Component } from "react";
import BrandDisplayerCarousel from "../component/carousel/BrandDisplayerCarousel";
import ProductosMini from "../component/carousel/ProductosMini";
import MainDisplayer from "../component/MainDisplayer";
import Layout from "../component/Layout";
import "isomorphic-fetch";
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";
import TagDisplayer from "../component/TagDisplayer";
import Error from "../component/views/Error";
import IsOffline from "../utils/IsOffline";
class index extends Component {
  //to implement on product

  render() {
    return (
      <React.Fragment>
        <IsOffline>OFFLINE</IsOffline>

        <Layout>
          <MainDisplayer />
          <TagDisplayer />
          <Query
            query={gql`
              {
                getProducts {
                  _id
                  title
                  image
                  price
                  tags
                  discount
                }
                getBrands {
                  _id
                  title
                  image
                }
              }
            `}
          >
            {({ client, loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <Error code="502" />;
              return (
                <React.Fragment>
                  <div className="container">
                    <div className="tiendas">
                      <h2>TIENDAS DISPONIBLES</h2>
                      <BrandDisplayerCarousel data={data.getBrands} />
                    </div>
                    <div className="ofertas">
                      <h2>HASTA 50% DE DESCUENTO</h2>
                      <ProductosMini
                        data={data.getProducts.filter(e => e.discount > 50)}
                      />
                    </div>
                    <div className="ofertas">
                      <h2>ZAPATILLAS</h2>
                      <ProductosMini
                        data={data.getProducts.filter(e =>
                          e.tags.includes("zapatillas")
                        )}
                      />
                    </div>
                    <div className="ofertas">
                      <h2>CASACAS</h2>
                      <ProductosMini
                        data={data.getProducts.filter(e =>
                          e.tags.includes("casaca")
                        )}
                      />
                    </div>
                    <div className="ofertas">
                      <h2>POLOS</h2>
                      <ProductosMini
                        data={data.getProducts.filter(e =>
                          e.tags.includes("polo")
                        )}
                      />
                    </div>
                  </div>
                </React.Fragment>
              );
            }}
          </Query>
          <style jsx>{`
            @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap");
            .container {
              max-width: 1150px;
              width: 100%;
              padding: 0;
              overflow: hidden;
              margin: 0 auto 4rem;
            }
            .tiendas {
              padding-left: 10px;
            }
            h2 {
              font-size: 1rem;
              font-weight: 400;
              margin-bottom: 1.5em;
              text-transform: uppercase;
            }
            .tiendas h2 {
              font-size: 0.9em;
            }
            .ofertas {
              padding-left: 10px;
            }
            .tiendas,
            .ofertas {
              margin-top: 2.5rem;
            }
            @media (min-width: 660px) {
              .container {
                padding-top: 30px;
              }
            }
          `}</style>
        </Layout>
      </React.Fragment>
    );
  }
}
export default index;
