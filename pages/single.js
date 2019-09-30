import React from 'react';
import ProductView from '../component/ProductView';
import Productos from '../component/Productos';
import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Layout from '../component/Layout';
import Spinner from '../component/views/Spinner';
import Error from '../component/views/Error';
import Head from 'next/head';

const GETTER = gql`
	query Product($PR: ID!) {
		getProduct(id: $PR) {
			_id
			title
			image
			price
			discount
			tags
		}
	}
`;

class single extends React.Component {
	static async getInitialProps({ query }) {
		return { id: query.slug };
	}

	render() {
		return (
			<Layout>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1.0' />
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
				<Query query={GETTER} variables={{ PR: this.props.id }}>
					{({ loading, error, data }) => {
						if (loading) return <Spinner />;

						if (error) return <Error />;
						if (!data.getProduct) return <Error />;

						return (
							<div className='container'>
								<ProductView data={data.getProduct} wrap={true} />
								<div className='tiendas'>
									<h2>También podría gustarte: </h2>

									<Query
										query={gql`
											query search($filter: String) {
												searchProducts(filter: $filter) {
													title
													_id
													image
													price
													tags
													discount
												}
											}
										`}
										variables={{ filter: data.getProduct.tags[0] }}>
										{({ loading, error, data }) => {
											if (loading) return <Spinner />;
											if (error) return <Error />;

											return <Productos data={data.searchProducts} />;
										}}
									</Query>
								</div>
							</div>
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
						margin: 2rem auto 4rem;
					}
					.loading {
						display: flex;
						position: absolute;
						padding: 0;
						width: 100vw;
						height: 90vh;
						margin-top: -90px;
						justify-content: center;
						align-items: center;
					}

					h2 {
						font-size: 1rem;
						font-weight: 400;
						margin-bottom: 1.5em;
						text-transform: uppercase;
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
export default single;
