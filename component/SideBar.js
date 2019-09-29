import React from 'react';
import { Link } from '../routes';

export default function SideBar({ show }) {
	return (
		<div className='sidebar'>
			<ul className='sidebar-list'>
				<li className='sidebar-list__item'>
					<Link route='producto' params={{ tag: 'hombre' }}>
						<a>Hombres</a>
					</Link>
				</li>
				<li className='sidebar-list__item'>
					<Link route='producto' params={{ tag: 'mujer' }}>
						<a>Mujeres</a>
					</Link>
				</li>
				<li className='sidebar-list__item'>
					<Link route='producto' params={{ tag: 'niño' }}>
						<a>Niños</a>
					</Link>
				</li>
				<li className='sidebar-list__item'>
					<Link route='producto' params={{ tag: '' }}>
						<a>Accesorios</a>
					</Link>
				</li>
				<li className='sidebar-list__item'>
					<Link route='producto' params={{ tag: '' }}>
						<a>Regalos</a>
					</Link>
				</li>
			</ul>
			<style jsx>
				{`
					.sidebar {
						position: fixed;
						right: ${show ? '0%' : '-100%'};
						transition: .4s;
						height: calc(100vh - 55px);
						width: 100%;
						z-index: 9999;
						max-width: 600px;
						background: white;
					}
					.sidebar-list {
						list-style: none;
						padding: 0;
					}
					.sidebar-list__item {
						padding: 1em .4em;
						text-align: center;
					}
					.sidebar-list__item:hover {
						background: grey;
					}
				`}
			</style>
		</div>
	);
}
