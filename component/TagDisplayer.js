import React from 'react';
import { Link } from '../routes';

export default function TagDisplayer() {
	return (
		<div className='tag-displayer'>
			<Link route={'producto'} params={{ tag: 'zapatillas' }}>
				<div className='tag-displayer__item' id='item1'>
					<a>
						<h1>Zapatillas</h1>
					</a>
				</div>
			</Link>
			<Link route={'producto'} params={{ tag: 'polo' }}>
				<div className='tag-displayer__item' id='item2'>
					<a>
						<h1>Polos</h1>
					</a>
				</div>
			</Link>
			<Link route={'producto'} params={{ tag: 'casaca' }}>
				<div className='tag-displayer__item' id='item3'>
					<a>
						<h1>Casacas</h1>
					</a>
				</div>
			</Link>
			<Link route={'producto'} params={{ tag: 'pantalon' }}>
				<div className='tag-displayer__item' id='item4'>
					<a>
						<h1>Accesorios</h1>
					</a>
				</div>
			</Link>

			<style jsx>
				{`
					.tag-displayer {
						display: grid;
						grid-template-rows: auto;
						grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
					}
					.tag-displayer__item {
						height: 300px;
						display: flex;
						justify-content: center;
						align-items: center;
						transition: .2s;
						gap: 1px;
					}

					.tag-displayer__item h1 {
						color: white;
						font-size: 2.5rem;
						text-transform: uppercase;
					}
					#item1 {
						background: url('/static/blueTexture.jpg');
						background-size: cover;
						background-position: center center;
					}
					#item2 {
						background: url('/static/redTexture.png');
						background-position: center center;
						background-size: cover;
					}
					#item3 {
						background-position: center center;
						background: url('/static/orangeTexture.jpg');
						background-position: center center;
						background-size: cover;
					}
					#item4 {
						background-position: center center;
						background: url('/static/purpleTexture.jpg');

						background-size: cover;
					}
					@media (min-width: 650px) {
						.tag-displayer__item:hover {
							opacity: 0.8;
							cursor: pointer;
						}
					}
				`}
			</style>
		</div>
	);
}
