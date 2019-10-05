import React from 'react';
import { Link } from '../../routes';

export default function Error({ code }) {
	return (
		<div className='error'>
			<h1>{code ? code : null} | Ha ocurrido un error! </h1>
			<Link route='/'>
				<a>
					<h2>REGRESAR</h2>
				</a>
			</Link>
			<style jsx>
				{`
					.error {
						height: calc(100vh - 55px);
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
					}
					h2 {
						color: red;
					}
				`}
			</style>
		</div>
	);
}
