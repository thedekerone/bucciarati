import Carousel from './Carousel';
import React from 'react';
import ProductViewMini from './ProductViewMini';
import ProductView from './ProductView';
import { Link } from '../routes';
import { Router } from 'next/router';

export default function ProductosMini(props) {
	return (
		<Carousel width='190' height='255' margin='10' slides={props.data.length} type='productos'>
			<div className='productos'>
				{props.data.map((e) => {
					return (
						<Link route='single' params={{ slug: e._id }} key={e._id}>
							<a className='carousel__item'>
								<ProductViewMini data={e} />
							</a>
						</Link>
					);
				})}
			</div>
			<style jsx>{`
				.productos {
					display: flex;
				}
				:global(.carousel, .carousel-container) {
					-webkit-tap-highlight-color: transparent;
				}
				.productos > a {
					flex-shrink: 0;
				}
				.carousel__item {
					justify-content: flex-start;
				}
			`}</style>
		</Carousel>
	);
}
