import React from 'react';
import ProductViewInCart from './ProductViewInCart';
import { Link } from '../../routes';
// aeaeaeaea
export default function Productos(props) {
	return (
		<div className='productos'>
			{props.data.map((e) => {
				return <ProductViewInCart key={e._id} user={props.user} data={e} wrap={false} />;
			})}

			<style jsx>
				{`
					.productos {
						display: grid;
						gap: 1em;

						grid-template-columns: 1fr;
					}
					@media (min-width: 660px) {
						.productos {
							grid-template-columns: 1fr;
						}
					}
				`}
			</style>
		</div>
	);
}
