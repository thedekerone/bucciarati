import React from 'react';

import 'isomorphic-fetch';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ProductosInCart from '../component/productViews/ProductosInCart';
import Layout from '../component/Layout';
import Error from '../component/views/Error';
import Spinner from '../component/views/Spinner';
import { Router } from '../routes';
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
	render() {
		return (
			<Layout>
				<div className='container'>
					<h2>Carrito de compras </h2>
					<Query query={GET_USER}>
						{({ client, loading, error, data }) => {
							if (loading) return <Spinner />;
							if (error) return Router.pushRoute('/');
							return (
								<div className='container'>
									<ProductosInCart data={data.getUsers.bag} client={client} user={data.getUsers} />
								</div>
							);
						}}
					</Query>
				</div>
				<style jsx>
					{`
						.container {
							margin-top: 50px;
						}
					`}
				</style>
			</Layout>
		);
	}
}
export default Cart;
