import React from 'react';
import ProductView from './ProductView';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from '../routes';
// aeaeaeaea
export default function Productos(props) {
	return (
		<div className='productos'>
			{props.data.map((e) => {
				return (
					<Link key={e._id} params={{ slug: e._id }} route='single'>
						<a>
							<ProductView data={e} wrap={false} />
						</a>
					</Link>
				);
			})}

			<style jsx>
				{`
					.productos {
						display: grid;
						gap: 1em;

						grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
					}
					@media (min-width: 660px) {
						.productos {
							grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
						}
					}
				`}
			</style>
		</div>
	);
}
