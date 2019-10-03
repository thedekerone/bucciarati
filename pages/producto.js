import React from 'react';
import BrandDisplayer from '../component/brands/BrandDisplayer';
import Selector from '../component/brands/Selector';
import Filtros from '../component/brands/Filtros';
import Productos from '../component/Productos';
import { Query } from 'react-apollo';
import Spinner from '../component/views/Spinner';
import gql from 'graphql-tag';
import Layout from '../component/Layout';
import Error from '../component/views/Error';
import Head from 'next/head';
export default class producto extends React.Component {
	static async getInitialProps({ query }) {
		return { id: query.tag };
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
				<Query
					query={gql`
						query search($filter: String) {
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
					variables={{ filter: this.props.id }}>
					{({ loading, error, data }) => {
						if (loading) return <Spinner />;
						if (error) return <Error code='502' />;
						return (
							<div className='producto-tipo'>
								<BrandDisplayer data={data.getBrands} />
								<Selector tag={this.props.id} />
								<Filtros />
								<div className='container'>
									<Productos
										data={this.props.id.length < 1 ? data.getProducts : data.searchProducts}
									/>
								</div>
							</div>
						);
					}}
				</Query>
				<style jsx>
					{`
						@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');
						.container {
							max-width: 1150px;
							width: 100%;
							padding: 0;
							padding-top: 30px;
							overflow: hidden;
							margin: 0 auto 4rem;
						}
						h2 {
							font-size: 1rem;
							font-weight: 400;
							margin-bottom: 1.5em;
							text-transform: uppercase;
						}
						.search {
							margin: 2em 0;
						}
						@media (min-width: 660px) {
						}
					`}
				</style>
			</Layout>
		);
	}
}
