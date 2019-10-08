import React from 'react';

import 'isomorphic-fetch';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ProductosInCart from '../component/productViews/ProductosInCart';
import Layout from '../component/Layout';
import Error from '../component/views/Error';
import Spinner from '../component/views/Spinner';

const Cart = () => {
	const GET_USER = gql`
		{
			getUsers {
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
	return (
		<Layout>
			<div>
				<Query query={GET_USER}>
					{({ client, loading, error, data }) => {
						if (loading) return <Spinner />;
						if (error) return console.log(error);
						return (
							<div className='container'>
								<ProductosInCart data={data.getUsers.bag} client={client} user={data.getUsers} />
							</div>
						);
					}}
				</Query>
			</div>
			<style jsx>{``}</style>
		</Layout>
	);
};
export default Cart;
