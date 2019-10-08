import React from 'react';
import BrandDisplayer from '../component/brands/BrandDisplayer';
import Selector from '../component/brands/Selector';
import Filtros from '../component/brands/Filtros';
import Productos from '../component/productViews/Productos';
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
							getUsers {
								_id
								username
								password
								bag {
									title
								}
							}
						}
					`}
					variables={{ filter: this.props.id }}>
					{({ client, loading, error, data }) => {
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
										client={client}
										user={data.getUsers}
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
