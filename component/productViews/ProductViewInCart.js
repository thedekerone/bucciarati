import React, { useState } from 'react';
import { Link } from '../../routes';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Query, graphql } from 'react-apollo';
import Spinner from '../views/Spinner';
import Error from '../views/Error';

export default function Product(props) {
	let agregar;
	const [
		cantidad,
		setCantidad
	] = useState(1);

	const REMOVE_PRODUCT = gql`
		mutation removeProduct($product: ID!, $user: ID!) {
			removeProductFromBag(productID: $product, userID: $user) {
				username
			}
		}
	`;
	const [
		removeProduct
	] = useMutation(REMOVE_PRODUCT);
	const removeFromCart = async (user, client) => {
		console.log('xd');
		user._id
			? removeProduct({
					variables : {
						product : props.data._id,
						user    : user._id
					}
				}).then(() => {
					client.resetStore();
				})
			: console.log(user);
	};
	console.log(cantidad);

	return (
		<div>
			<div className='product'>
				<div className='product__img'>
					<img src={props.data.image} width='100%' alt='' />
				</div>
				<div className='product__description'>
					<div className='product-main'>
						<div className='product-title'>
							<h3>{props.data.title}</h3>
						</div>
						<div className='product-discount'>
							<span className='product-discount__price'>{props.data.price}</span>
							<span className='product-discount__percentage'>-{props.data.discount}%</span>
						</div>
						<div className='product-price'>
							<span>{Math.round((100 - props.data.discount) * props.data.price / 100)}.00$</span>
						</div>
					</div>

					{/* info */}
					<div className='product-extra'>
						<div className='product-extra__cantidad'>
							<label>Cantidad: </label>
							<input
								defaultValue={1}
								onChange={(value) => {
									setCantidad(agregar.value);
								}}
								ref={(value) => (agregar = value)}
								type='number'
								name='cantidad'
								id='cantidad'
							/>
						</div>
						<div
							className='product-extra__remove'
							onClick={async () => {
								removeFromCart(props.user, props.client);
							}}>
							Eliminar del carrito
						</div>
					</div>
				</div>
			</div>

			<style jsx>
				{`
					.product {
						display: grid;
						background: white;
						max-width: 1000px
						width: 100%;
						margin: 0 auto;
						font-size: 11px;
						height: 100%;
						box-sizing: border-box;
						padding: 1em;
						grid-template: auto auto / 1fr ;
					}
					.product__img {
						grid-row: 1/2;
						padding: ${props.wrap ? '0' : '.9em'};
						box-sizing: border-box;
					}
					.product__img img {
						max-width: 150px;
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
						display: flex;
						flex-direction: row;
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
						text-decoration: line-through
					}
					.product-discount__percentage {
						margin-left: .8em;
						color: red;

						font-size: 1em;
					}
					.product-price {
						font-size: 1.2rem;
						font-weight: bold;
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
					.product-extra{
						display:flex;
						flex-direction: column;
						justify-content:space-between;
					}
					.product-extra__cantidad{
						display:flex;
						justify-content:center;
						align-items:center;
					}
					.product-extra__remove{
						color:red;
					}
					#cantidad{
						width: 40px;
						border: 1px solid #aaa;
						font-size: 1.2em;
						margin-left:.4em;
						font-weight: bold;
						padding: .4em;
						text-align:center;
						border-radius: 10px;
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
							border-top: 1px solid grey;
							grid-template: auto/ auto 1fr;
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
							padding-left: ${props.wrap ? '3em' : '1.2em'};
						}
					}
				`}
			</style>
		</div>
	);
}
