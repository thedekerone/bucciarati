import React, { useState } from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import {Router} from '../routes'
import 'isomorphic-fetch';
import { initGA, logPageView } from '../utils/analytics';	
import NProgress from 'nprogress'


Router.events.on('routeChangeStart', () => NProgress.start() );
Router.events.on('routeChangeComplete', () => NProgress.done() );
Router.events.on('routeChangeError', () => NProgress.done() ); 

class Layout extends React.Component {
	

	constructor(props) {
		super(props);
	}
	componentDidMount() {
		if (!window.GA_INITIALIZED) {
			initGA();
			window.GA_INITIALIZED = true;
		}
		logPageView();
		
	}
	render() {
		return (
			<div>
				<Navbar />
				<Head>
					{/* thumbnail for share */}

					{/*  */}
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<link rel='manifest' href='/static/manifest.json' />
					{/* <link rel='shortcut icon' href='/static/favi2.png' /> */}
					<meta name='theme-color' content='#ff6600' />
					<link rel='apple-touch-icon' href='/static/favi2.png' />
					<meta name='apple-mobile-web-app-title' content='Hacker News' />
					<meta name='apple-mobile-web-app-status-bar-style' content='default' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='mobile-web-app-capable' content='yes' />
					<title>Bucciarati Store</title>
					<link rel='apple-touch-icon' sizes='57x57' href='/static/favicon/apple-icon-57x57.png' />
					<link rel='apple-touch-icon' sizes='60x60' href='/static/favicon/apple-icon-60x60.png' />
					<link rel='apple-touch-icon' sizes='72x72' href='/static/favicon/apple-icon-72x72.png' />
					<link rel='apple-touch-icon' sizes='76x76' href='/static/favicon/apple-icon-76x76.png' />
					<link rel='apple-touch-icon' sizes='114x114' href='/static/favicon/apple-icon-114x114.png' />
					<link rel='apple-touch-icon' sizes='120x120' href='/static/favicon/apple-icon-120x120.png' />
					<link rel='apple-touch-icon' sizes='144x144' href='/static/favicon/apple-icon-144x144.png' />
					<link rel='apple-touch-icon' sizes='152x152' href='/static/favicon/apple-icon-152x152.png' />
					<link rel='apple-touch-icon' sizes='180x180' href='/static/favicon/apple-icon-180x180.png' />
					<link rel='icon' type='image/png' sizes='192x192' href='/static/favicon/android-icon-192x192.png' />
					<link rel='icon' type='image/png' sizes='32x32' href='/static/favicon/favicon-32x32.png' />
					<link rel='icon' type='image/png' sizes='96x96' href='/static/favicon/favicon-96x96.png' />
					<link rel='icon' type='image/png' sizes='16x16' href='/static/favicon/favicon-16x16.png' />
					<link rel='manifest' href='/static/favicon/manifest.json' />
					<meta name='msapplication-TileColor' content='#ffffff' />
					<meta name='msapplication-TileImage' content='/static/favicon/ms-icon-144x144.png' />
					<meta name='theme-color' content='#ffffff' />

					<meta property='og:url' content='http://bucciarati.mauriciofow.now.sh' />
					<meta property='og:image' content='/static/mainView/polo.jpg' />
					<meta property='og:image:secure_url' content='/static/mainView/polo.jpg' />
					<meta property='og:image:width' content='700' />
					<meta property='og:image:height' content='500' />
				</Head>
				{this.props.children}
				<style jsx global>
					{`
						body {
							background: #f3f3f3;
							margin: 0;
							position: relative;
							font-family: "Montserrat", sans-serif;
						}
						* {
							color: #646464;
						}
						a {
							text-decoration: none;
						}
						*{
							-webkit-user-drag: none;
							-khtml-user-drag: none;
							-moz-user-drag: none;
							-o-user-drag: none;
							user-drag: none;
						}
						// npgrogress
						#nprogress {
							pointer-events: none;
						  }
						  
						  #nprogress .bar {
							background: #29d;
						  
							position: fixed;
							z-index: 1031;
							top: 0;
							left: 0;
						  
							width: 100%;
							height: 2px;
						  }
						  
						  /* Fancy blur effect */
						  #nprogress .peg {
							display: block;
							position: absolute;
							right: 0px;
							width: 100px;
							height: 100%;
							box-shadow: 0 0 10px #29d, 0 0 5px #29d;
							opacity: 1;
						  
							-webkit-transform: rotate(3deg) translate(0px, -4px);
							-ms-transform: rotate(3deg) translate(0px, -4px);
							transform: rotate(3deg) translate(0px, -4px);
						  }
						  
						  /* Remove these to get rid of the spinner */
						  #nprogress .spinner {
							display: block;
							position: fixed;
							z-index: 1031;
							top: 15px;
							right: 15px;
						  }
						  
						  #nprogress .spinner-icon {
							width: 18px;
							height: 18px;
							box-sizing: border-box;
						  
							border: solid 2px transparent;
							border-top-color: #29d;
							border-left-color: #29d;
							border-radius: 50%;
						  
							-webkit-animation: nprogress-spinner 400ms linear infinite;
							animation: nprogress-spinner 400ms linear infinite;
						  }
						  
						  .nprogress-custom-parent {
							overflow: hidden;
							position: relative;
						  }
						  
						  .nprogress-custom-parent #nprogress .spinner,
						  .nprogress-custom-parent #nprogress .bar {
							position: absolute;
						  }
						  
						  @-webkit-keyframes nprogress-spinner {
							0% {
							  -webkit-transform: rotate(0deg);
							}
							100% {
							  -webkit-transform: rotate(360deg);
							}
						  }
						  @keyframes nprogress-spinner {
							0% {
							  transform: rotate(0deg);
							}
							100% {
							  transform: rotate(360deg);
							}
						  }

						@media (min-width: 660px) {
							#flex{
								display: flex;
								justify-content: center;
							}
							body {
								background: white;
							}

							.carousel__item){
								border: 1px solid #e8e8e8;
							}
						}
					`}
				</style>
			</div>
		);
	}
}
export default Layout;
