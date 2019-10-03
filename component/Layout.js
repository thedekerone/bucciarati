import React, { useState } from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Head from 'next/head';

export default function Layout(props) {
	const [
		show,
		setShow
	] = useState(false);
	const handleClick = () => {
		setShow(!show);
		console.log(show);
	};

	return (
		<div>
			<Navbar handleClick={handleClick} />
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='manifest' href='/static/manifest.json' />
				<link rel='shortcut icon' href='/static/favi2.png' />
				<meta name='theme-color' content='#ff6600' />
				<link rel='apple-touch-icon' href='/static/favi2.png' />
				<meta name='apple-mobile-web-app-title' content='Hacker News' />
				<meta name='apple-mobile-web-app-status-bar-style' content='default' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='mobile-web-app-capable' content='yes' />
			</Head>
			<SideBar show={show} />
			{props.children}
			<style jsx>
				{`
					:global(body) {
						background: #f3f3f3;
						margin: 0;
						position: relative;
						font-family: 'Montserrat', sans-serif;
					}
					:global(*) {
						color: #646464;
					}
					:global(a) {
						text-decoration: none;
					}
					:global(*) {
						-webkit-user-drag: none;
						-khtml-user-drag: none;
						-moz-user-drag: none;
						-o-user-drag: none;
						user-drag: none;
					}
					@media (min-width: 660px) {
						:global(#flex) {
							display: flex;
							justify-content: center;
						}
						:global(body) {
							background: white;
						}

						:global(.carousel__item) {
							border: 1px solid #e8e8e8;
						}
					}
				`}
			</style>
		</div>
	);
}
