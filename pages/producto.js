import React from 'react';
import BrandDisplayer from '../component/brands/BrandDisplayer';
import Selector from '../component/brands/Selector';
import Filtros from '../component/brands/Filtros';
import Productos from '../component/Productos';
import Navbar from '../component/Navbar';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Layout from '../component/Layout';

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
						}
					`}
					variables={{ filter: this.props.id }}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...</p>;
						if (error) return <p>Error :(</p>;
						return (
							<div className='producto-tipo'>
								<BrandDisplayer data={data.getBrands} />
								<Selector tag={this.props.id} />
								<Filtros />
								<div className='container'>
									<Productos data={this.props.id ? data.searchProducts : data.searchProducts} />
								</div>

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
										.search {
											margin: 2em 0;
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

											:global(.carousel__item) {
												border: 1px solid #e8e8e8;
											}
										}
									`}
								</style>
							</div>
						);
					}}
				</Query>
			</Layout>
		);
	}
}
