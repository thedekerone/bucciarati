import React from 'react';
import { Link } from '../routes';

export default function MainDisplayer() {
	return (
		<div className='main-displayer'>
			<div className='main-displayer__item' id='item1'>
				<div className='main-hero'>
					<div className='main-hero__text'>
						<h1>AIR JORDAN XXIV</h1>
						<span>The Future of Flight.</span>
					</div>
					<div className='main-hero__button'>
						<Link route='producto' params={{ tag: 'zapatillas' }}>
							<a>BUY NOW</a>
						</Link>
					</div>
				</div>
			</div>

			<style jsx>
				{`
					.main-displayer {
						display: grid;
						height: 40rem;
						width: 100%;
						overflow: hidden;
						position: relative;
					}
					.main-hero {
						margin: 0 auto;
						max-width: 1150px;
						position: absolute;
						width: 100%;
						height: 60%;
					}
					.main-hero__text,
					.main-hero__button {
						margin: 0 1em;
					}
					.main-hero__text span,
					.main-hero__text h1 {
						margin: .2em 0;
						color: white;
					}
					.main-hero__button {
						display: inline-block;
						position: relative;
						z-index: 22;
						margin-top: 1.5em;
						transition: .2s;
					}
					.main-hero__button:hover {
						background: #fd486b;
					}

					.main-hero__button a {
						display: block;
						height: 100%;
						padding: .5em 1.4em;
						font-weight: bold;
						border: 1px solid #fd486b;
						font-size: 1.2rem;

						color: white;
					}

					#item1 {
						background: url('/static/mainView/main2.webp');
						background-size: cover;
						background-position: 600px top;
						background-repeat: none;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.main-displayer__item {
						overflow: hidden;
					}

					@media (min-width: 650px) {
						.main-hero {
							font-size: 20px;
						}
						#item1 {
							background-position: center top;
						}
					}
				`}
			</style>
		</div>
	);
}
