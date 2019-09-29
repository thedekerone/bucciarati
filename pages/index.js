import Spinner from '../component/views/Spinner';
import React, { Component } from 'react';
import BrandCarousel from '../component/BrandCarousel';
import ProductosMini from '../component/ProductosMini';
import Head from 'next/head';
import MainDisplayer from '../component/MainDisplayer';
import Layout from '../component/Layout';
import 'isomorphic-fetch';
import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import TagDisplayer from '../component/TagDisplayer';

class index extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout>
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
					`}>
					{({ loading, error, data }) => {
						if (loading)
							return (
								<h1 className='loading'>
									<Spinner />
								</h1>
							);
						if (error) return <h1>error...</h1>;
						return (
							<React.Fragment>
								<Head>
									<meta name='viewport' content='width=device-width, initial-scale=1.0' />
								</Head>
								<MainDisplayer />
								<TagDisplayer />
								<div className='container'>
									<div className='tiendas'>
										<h2>TIENDAS DISPONIBLES</h2>
										<BrandCarousel data={data.getBrands} />
									</div>
									<div className='ofertas'>
										<h2>HASTA 50% DE DESCUENTO</h2>
										<ProductosMini data={data.getProducts.filter((e) => e.discount > 50)} />
									</div>
									<div className='ofertas'>
										<h2>ZAPATILLAS</h2>
										<ProductosMini
											data={data.getProducts.filter((e) => e.tags.includes('zapatillas'))}
										/>
									</div>
									<div className='ofertas'>
										<h2>CASACAS</h2>
										<ProductosMini
											data={data.getProducts.filter((e) => e.tags.includes('casaca'))}
										/>
									</div>
									<div className='ofertas'>
										<h2>POLOS</h2>
										<ProductosMini data={data.getProducts.filter((e) => e.tags.includes('polo'))} />
									</div>
								</div>
							</React.Fragment>
						);
					}}
				</Query>
				<style jsx>{`
					@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');

					.container {
						max-width: 1150px;
						width: 100%;
						padding: 0;
						overflow: hidden;
						margin: 0 auto 4rem;
					}
					.loading {
						display: flex;
						padding: 0;
						width: 100vw;
						height: 90vh;
						margin-top: -90px;
						justify-content: center;
						align-items: center;
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
						font-size: .9em;
					}

					.ofertas {
						padding-left: 10px;
					}
					.tiendas,
					.ofertas {
						margin-top: 2.5rem;
					}

					:global(body) {
						background: #f3f3f3;
						margin: 0;
						position: relative;
						font-family: 'Montserrat', sans-serif;
					}
					:global(*) {
						color: #646464;
					}
					:global(a) {
						text-decoration: none;
					}
					:global(*) {
						-webkit-user-drag: none;
						-khtml-user-drag: none;
						-moz-user-drag: none;
						-o-user-drag: none;
						user-drag: none;
					}
					@media (min-width: 660px) {
						:global(#flex) {
							display: flex;
							justify-content: center;
						}
						:global(body) {
							background: white;
						}
						.container {
							padding-top: 30px;
						}
						:global(.carousel__item) {
							border: 1px solid #e8e8e8;
						}
					}
				`}</style>
			</Layout>
		);
	}
}

export default index;
