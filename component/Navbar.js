import React, { useState } from 'react';
import { Link, Router } from '../routes';

export default function Navbar({ handleClick }) {
	let textInput;
	const [
		display,
		setDisplay
	] = useState(true);
	const handleSubmit = (e) => {
		e.preventDefault();
		Router.pushRoute('producto', { tag: textInput.value });
	};

	return (
		<div className='navbar-container'>
			<div className='navbar'>
				<div className='main-navbar'>
					<div className='logo'>
						<Link route='/'>
							<a>
								{' '}
								<img className='main-navbar__title' src='/static/logo2.webp' width='100%' alt='' />
							</a>
						</Link>
					</div>
					<nav className='main-navbar__items'>
						<ul>
							<li>
								<Link route='producto' params={{ tag: 'hombre' }}>
									<a>Hombres</a>
								</Link>
							</li>
							<li>
								<Link route='producto' params={{ tag: 'mujer' }}>
									<a>Mujeres</a>
								</Link>
							</li>
							<li>
								<Link route='producto' params={{ tag: 'niño' }}>
									<a>Niños</a>
								</Link>
							</li>
							<li>
								<Link route='producto' params={{ tag: '' }}>
									<a>Accesorios</a>
								</Link>
							</li>
							<li>
								<Link route='producto' params={{ tag: '' }}>
									<a>Regalos</a>
								</Link>
							</li>
						</ul>
					</nav>
					<span className='main-navbar__icon'>
						<form
							onSubmit={(e) => {
								handleSubmit(e);
							}}>
							<input
								type='search'
								onFocus={() => {
									setDisplay(false);
								}}
								ref={(input) => (textInput = input)}
								onBlur={() => {
									setDisplay(true);
								}}
								name='search'
								id='search'
								placeholder='Search'
							/>
							<img
								className='search-icon'
								src='/static/icons/icons8-search.svg'
								width='30px'
								alt='search'
							/>
						</form>
					</span>
					<img
						onClick={() => {
							handleClick();
						}}
						className='icon-menu'
						width='30px'
						src='/static/icons/menu.svg'
						alt='menu'
					/>
				</div>
			</div>

			<style jsx>
				{`
					.navbar-container {
						position: relative;
						width: 100%;
						height: 60px;
						box-sizing: border-box;
						overflow: hidden;
					}
					.navbar {
						width: 100%;
						background: white;
						position: fixed;
						z-index: 1000;
						box-sizing: border-box;
						-webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
						-moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
						box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
						z-index: 100;
					}
					.navbar h1 {
						margin: .5rem 0;
					}
					.main-navbar {
						margin: 0 auto;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: .5rem 1rem;
					}
					form {
						display: flex;
						width: 100%;
						align-items: center;
						justify-content: flex-end;
						margin: 0 .8em;
					}
					.logo {
						display: ${display ? 'flex' : 'none'};
						align-items: flex-end;
						height: auto;
					}
					#search {
						padding: .6rem;
						border: 0;
						width: 100%;
						border-radius: 15px;
						background: #dee8ef;
						transition: .5s;
					}
					#search::placeholder {
						color: grey;
					}
					#search:focus {
					}

					.main-navbar__items {
						display: none;
					}
					.main-navbar__items li:hover a {
						color: #fd486b;
					}

					.main-navbar__icon {
						display: flex;
						align-item: center;
						justify-content: center;
						flex-grow: 1;
					}
					.main-navbar__title {
						color: #e84855;
						font-size: 1.2rem;
						width: 50px;
					}
					.categorias {
						display: flex;
						align-item: center;
						padding-right: 1rem;
					}
					.icon-menu {
						color: red;
						transition-property: width, opacity;
						transition-duration: 1s, 0s;
						display: ${display ? 'block' : 'none'};
					}
					.search-icon {
						display: none;
					}

					@media (min-width: 660px) {
						.logo {
							display: flex;
							width: 225px;
						}

						.icon-menu {
							display: none;
						}
						.search-icon {
							display: inline-block;
						}
						.main-navbar__icon {
							flex-grow: 0;
						}
						.main-navbar__items {
							display: block;
						}
						#search {
							width: 170px;
						}
						.main-navbar__items ul {
							display: flex;
							width: 460px;
							padding: 0;
							margin: 0;
							justify-content: space-between;
							align-items: center;
							height: 2rem;
						}
						.main-navbar__items a {
							font-size: 1.5em;
							color: black;
							letter-spacing: -1px;
						}
						.main-navbar__items ul li {
							list-style: none;
							font-size: .7rem;
						}
						.main-navbar__title {
							font-size: 1.7rem;
							width: 65px;
						}
					}
				`}
			</style>
		</div>
	);
}
