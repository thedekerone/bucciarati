import React from 'react';
import ProductView from '../component/ProductView';
import ProductosMini from '../component/ProductosMini';
import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Layout from '../component/Layout';
import Spinner from '../component/views/Spinner';
import Error from '../component/views/Error';

const GETTER = gql`
	query Product($PR: ID!) {
		getProduct(id: $PR) {
			_id
			title
			image
			price
			discount
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
							<div>
								<div className='container'>
									<ProductView data={data.getProduct} wrap={true} />
									<div className='tiendas'>
										<h2>También podría gustarte: </h2>

										<Query
											query={gql`
												{
													getProducts {
														_id
														title
														image
														price
														discount
													}
												}
											`}>
											{({ loading, error, data }) => {
												if (loading) return <Spinner />;
												if (error) return <Error />;
												return <ProductosMini data={data.getProducts} />;
											}}
										</Query>
									</div>
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
					:global(*) {
						-webkit-user-drag: none;
						-khtml-user-drag: none;
						-moz-user-drag: none;
						-o-user-drag: none;
						user-drag: none;
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
					:global(img) {
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
export default single;
