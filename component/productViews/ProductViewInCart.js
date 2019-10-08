import React from 'react';
import { Link } from '../../routes';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Query, graphql } from 'react-apollo';
import Spinner from '../views/Spinner';
import Error from '../views/Error';

export default function Product(props) {
	const ADD_PRODUCT = gql`
		mutation addProduct($product: ID!, $user: ID!) {
			addProductToBag(productID: $product, userID: $user) {
				username
			}
		}
	`;
	const [
		addProduct
	] = useMutation(ADD_PRODUCT);
	const addToCart = (user, client) => {
		user._id
			? addProduct({
					variables : {
						product : props.data._id,
						user    : user._id
					}
				})
			: console.log(user);
		client.resetStore();
	};

	return (
		<div>
			<Query
				query={gql`
					query {
						getUsers {
							_id
							username
							password
							bag {
								title
							}
						}
					}
				`}>
				{({ client, loading, error, data }) => {
					if (loading) return <Spinner />;
					if (error) return <Error />;
					return (
						<div className='product'>
							<div className='product__img'>
								<img src={props.data.image} width='30%' alt='' />
							</div>
							<div className='product__description'>
								<div className='product-main'>
									<div className='product-banner'>
										<span>OFERTA EXCLUSIVA</span>
									</div>
									<div className='product-title'>
										<h3>{props.data.title}</h3>
									</div>
									<div className='product-discount'>
										<span className='product-discount__price'>{props.data.price}</span>
										<span className='product-discount__percentage'>-{props.data.discount}%</span>
									</div>
									<div className='product-price'>
										<span>
											{Math.round((100 - props.data.discount) * props.data.price / 100)}.00$
										</span>
									</div>
								</div>

								{/* info */}
								<div className='product-information'>
									{props.wrap ? (
										<div className='product-information__text'>
											<p>
												<b>Descripción:</b> ipsum dolor sit amet, consetetur sadipscing elitr,
												sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
												aliquyam erat, sed diam voluptua. At vero
											</p>
										</div>
									) : null}

									<div className='product-information__delivery'>
										<img src='/static/icons/icons8-truck-50.png' width='20px' alt='' />
										<span>Envío internacional</span>
									</div>
									<div className='product-information__reviews'>
										<img src='/static/icons/icons8-star-filled-48.png' width='20px' alt='' />
										<img src='/static/icons/icons8-star-filled-48.png' width='20px' alt='' />
										<img src='/static/icons/icons8-star-filled-48.png' width='20px' alt='' />
										<img src='/static/icons/icons8-star-filled-48.png' width='20px' alt='' />
										<img src='/static/icons/icons8-star-filled-48.png' width='20px' alt='' />

										<span className='product-information__reviews--number'>
											{Math.round(Math.random() * 100)} reviews
										</span>
									</div>
									{/* <div className='buttons'>
										<div onClick={() => addToCart(data.getUsers, client)} className='btn cart'>
											ADD TO CART
										</div>

										<Link route='single' params={{ slug: props.data._id }} key={props.data._id}>
											<div className='btn buy'>BUY NOW</div>
										</Link>
									</div> */}
								</div>
							</div>
						</div>
					);
				}}
			</Query>
			<style jsx>
				{`
					.product {
						display: grid;
						background: white;
						max-width: ${props.wrap ? '1000px' : '600px'};
						width: 100%;
						margin-top: 5rem;
						font-size: 11px;
						height: 100%;
						box-sizing: border-box;
						padding: 1em;
						grid-template: ${props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr'};
					}
					.product__img {
						grid-row: 1/2;
						padding: ${props.wrap ? '0' : '.9em'};
						box-sizing: border-box;
					}
					.product-title h3 {
						margin: 0;
						padding: .5em 0 .7em 0;
					}
					.product__description,
					.product__img {
						background: white;
						width: 100%;
					}
					.product__description {
						padding-left: ${props.wrap ? '.5em' : '1.2em'};
						grid-column: ${props.wrap ? '1/2' : '2/4'};
						grid-row: ${props.wrap ? '2/3' : '1/2'};
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						box-sizing: border-box;
					}

					.product-banner span {
						color: white;
						font-size: .7em;
						background: rgb(181, 0, 191);
						background: linear-gradient(90deg, rgba(181, 0, 191, 1) 0%, rgba(0, 8, 180, 1) 100%);
						padding: 0 .4em;
					}
					.product-discount {
						margin-bottom: .6em;
					}
					.product-discount__price {
						font-size: .8em;
					}
					.product-discount__percentage {
						margin-left: .8em;
						color: red;

						font-size: 1em;
					}
					.product-price {
						font-size: 1.rem;
						color: black;
					}

					.product-information__delivery {
						padding: 1.5em 0 .8em 0;
					}
					.product-information__reviews {
						display: flex;
						align-items: center;
					}
					.product-information__reviews--number {
						color: #ffca28;
						height: 20px;
						display: flex;
						align-items: center;
					}
					.buttons {
						display: flex;
						width: 100%;
					}
					.btn {
						width: 100%;
						margin: 1rem;
						padding: .6rem;
						text-align: center;
						color: white;
						background: #e84855;
						position: relative;
						z-index: 19;
					}
					.cart {
						background: #fcba04;
					}

					@media (min-width: 660px) {
						.product {
							border: ${props.wrap ? ' 0px' : '1px solid #d5d5d5'};
							grid-template: ${props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr'};
							font-size: 15px;
							max-width: 900px;
						}
						.buttons {
							flex-direction: ${props.wrap ? ' row' : 'column'};
							box-sizing: border-box;
						}
						.btn {
							margin: ${props.wrap ? 'none' : '.8rem 0 .2rem'};
							box-sizing: border-box;
						}
						.product__description {
							grid-column: 2/4;
							grid-row: 1/2;
							padding-left: ${props.wrap ? '3em' : '1.2em'};
						}
					}
				`}
			</style>
		</div>
	);
}
