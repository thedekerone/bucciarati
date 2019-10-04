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
import Error from '../component/views/Error';
class index extends Component {
	handleClick = (client) => {
		localStorage.setItem('usuario', 'dekker');
		localStorage.setItem('password', 'internetes');
		client.resetStore();
	};
	handleLogout = (client) => {
		localStorage.removeItem('usuario');
		localStorage.removeItem('password');
		client.resetStore();

		// aea
	};
	render() {
		return (
			<Layout>
				<Head>
					<title>Bucciarati Store</title>
					<link rel='apple-touch-icon' sizes='57x57' href='/static/favicon/apple-icon-57x57.png' />
					<link rel='apple-touch-icon' sizes='60x60' href='/static/favicon/apple-icon-60x60.png' />
					<link rel='apple-touch-icon' sizes='72x72' href='/static/favicon/apple-icon-72x72.png' />
					<link rel='apple-touch-icon' sizes='76x76' href='/static/favicon/apple-icon-76x76.png' />
					<link rel='apple-touch-icon' sizes='114x114' href='/static/favicon/apple-icon-114x114.png' />
					<link rel='apple-touch-icon' sizes='120x120' href='/static/favicon/apple-icon-120x120.png' />
					<link rel='apple-touch-icon' sizes='144x144' href='/static/favicon/apple-icon-144x144.png' />
					<link rel='apple-touch-icon' sizes='152x152' href='/static/favicon/apple-icon-152x152.png' />
					<link rel='apple-touch-icon' sizes='180x180' href='/static/favicon/apple-icon-180x180.png' />
					<link rel='icon' type='image/png' sizes='192x192' href='/static/favicon/android-icon-192x192.png' />
					<link rel='icon' type='image/png' sizes='32x32' href='/static/favicon/favicon-32x32.png' />
					<link rel='icon' type='image/png' sizes='96x96' href='/static/favicon/favicon-96x96.png' />
					<link rel='icon' type='image/png' sizes='16x16' href='/static/favicon/favicon-16x16.png' />
					<link rel='manifest' href='/static/favicon/manifest.json' />
					<meta name='msapplication-TileColor' content='#ffffff' />
					<meta name='msapplication-TileImage' content='/static/favicon/ms-icon-144x144.png' />
					<meta name='theme-color' content='#ffffff' />
				</Head>
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
					`}>
					{({ client, loading, error, data }) => {
						if (loading) return <Spinner />;
						if (error) return <Error code='502' />;
						return (
							<React.Fragment>
								<div className='container'>
									<div className='tiendas'>
										<h2
											onClick={() => {
												this.handleLogout(client);
											}}>
											TIENDAS DISPONIBLES
										</h2>
										<BrandCarousel data={data.getBrands} />
									</div>
									<div className='ofertas' onClick={() => this.handleClick(client)}>
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
					@media (min-width: 660px) {
						.container {
							padding-top: 30px;
						}
					}
				`}</style>
			</Layout>
		);
	}
}
export default index;
