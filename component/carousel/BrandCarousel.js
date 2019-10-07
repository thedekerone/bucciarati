import Carousel from './Carousel';
import React from 'react';
import { Link } from '../../routes';

export default function MarcasDisplay(props) {
	return (
		<Carousel slides={props.data.length} width='280px' margin='25px' height='120px' type='marcas'>
			{props.data.map((e) => {
				return (
					<div key={e._id} className='carousel__item'>
						<Link route='producto' params={{ tag: e.title }}>
							<a>
								<img src={e.image} width='100%' height='100%' alt='' />
							</a>
						</Link>
					</div>
				);
			})}

			<style jsx>
				{`
					:global(img) {
						-webkit-user-drag: none;
						-khtml-user-drag: none;
						-moz-user-drag: none;
						-o-user-drag: none;
						user-drag: none;
					}
				`}
			</style>
		</Carousel>
	);
}
