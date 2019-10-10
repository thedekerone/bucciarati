import React from 'react';
import ProductView from '../component/productViews/ProductView';
import Productos from '../component/productViews/Productos';
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
