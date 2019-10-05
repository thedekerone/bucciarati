import React from 'react';
import { Link } from '../routes';

export default function TagDisplayer() {
	return (
		<div className='tag-displayer'>
			<Link route={'producto'} params={{ tag: 'polo' }}>
				<a className='tag-displayer__item' id='item1'>
					<h1>camisetas</h1>
				</a>
			</Link>
			<Link route={'producto'} params={{ tag: 'casaca' }}>
				<a className='tag-displayer__item' id='item2'>
					<h1>casaca</h1>
				</a>
			</Link>
			<Link route={'producto'} params={{ tag: 'zapatillas' }}>
				<a className='tag-displayer__item' id='item3'>
					<h1>zapatillas</h1>
				</a>
			</Link>
			<Link route={'producto'} params={{ tag: 'pantalon' }}>
				<a className='tag-displayer__item' id='item4'>
					<h1>jean</h1>
				</a>
			</Link>

			{/* <Link route={'producto'} params={{ tag: 'casaca' }}>
				<div className='tag-displayer__item' id='item2'>
					<a>
						<h1>Casacas</h1>
					</a>
				</div>
			</Link>

			<Link route={'producto'} params={{ tag: 'zapatillas' }}>
				<div className='tag-displayer__item' id='item3'>
					<a>
						<h1>Zapatillas</h1>
					</a>
				</div>
			</Link>

			<Link route={'producto'} params={{ tag: 'pantalon' }}>
				<div className='tag-displayer__item' id='item4'>
					<a>
						<h1>Jeans</h1>
					</a>
				</div>
			</Link> */}

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
					#item3 {
						background: url('/static/mainView/blueTexture.webp');
						background-size: cover;
						background-position: center center;
					}
					#item2 {
						background-position: center center;
						background: url('/static/mainView/orangeTexture.webp');
						background-position: center center;
						background-size: cover;
					}
					#item1 {
						background: url('/static/mainView/polo.webp');
						background-position: center center;
						background-size: cover;
					}
					#item4 {
						background-position: center center;
						background: url('/static/mainView/purpleTexture.webp');

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
