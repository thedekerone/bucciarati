import React from 'react';

export default function ProductViewMini(props) {
	var number = parseInt(Math.random() * 50) + 12;

	return (
		<div className='product'>
			<div className='product__img'>
				<img src={props.data.image} width='100%' alt='' />
			</div>
			<div className='product__description'>
				<div className='product-title'>
					<h3>{props.data.title}</h3>
				</div>
				{/* <div className='product-banner'>
					<span>OFERTA EXCLUSIVA</span>
				</div> */}
				<div className='product-discount'>
					<span className='product-discount__price'>{props.data.price}</span>
					<span className='product-discount__percentage'>{-props.data.discount}%</span>
				</div>
				<div className='product-price'>
					<span>{Math.round((100 - props.data.discount) * props.data.price / 100)}.00$</span>
				</div>
			</div>
			<style jsx>
				{`
					.product {
						display: grid;
						grid-template: auto auto auto/1fr;
						overflow: hidden;
						height: 100%;
					}
					.product__img {
						grid-row: 1/3;
					}
					.product__description > div {
						padding-left: .4rem;
					}
					.product-title {
						display: flex;
						align-items: center;
						height: 35px;
						border-bottom: 1px solid #c5c5c5;
					}
					.product-title h3 {
						margin: 0;
						font-size: .6em;
						white-space: normal;
						padding: .2rem 0;
						text-transform: uppercase;
					}
					.product__img {
						background: white;
						width: 100%;
						overflow: hidden;
					}
					.product__description {
						width: 100%;
						height: 100%;
					}

					.product__description {
						box-sizing: border-box;
					}

					.product-banner span {
						color: white;
						font-size: .7rem;
						background: rgb(181, 0, 191);
						background: linear-gradient(90deg, rgba(181, 0, 191, 1) 0%, rgba(0, 8, 180, 1) 100%);
						padding: 0 .4rem;
					}
					.product-discount {
						margin-bottom: .5rem;
					}
					.product-discount__price {
						font-size: .8rem;
						text-decoration: line-through;
					}
					.product-discount__percentage {
						margin-left: .4rem;
						color: red;

						font-size: .9rem;
					}
					@media (min-width: 760px) {
						.product {
						}
					}
				`}
			</style>
		</div>
	);
}
