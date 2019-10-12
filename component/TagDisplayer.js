import React from 'react';
import { Link } from '../routes';
import item1 from '../static/mainView/polo.jpg?lqip'
import item2 from '../static/mainView/orangeTexture.jpg?lqip'
import item3 from '../static/mainView/blueTexture.jpg?lqip'
import item4 from '../static/mainView/purpleTexture.jpg?lqip'


export default function TagDisplayer() {
	return (
		<div className='tag-displayer'>
			<Link route={'producto'} params={{ tag: 'polo' }}>
				<a   className='tag-displayer__item' >
					<h1 className='item-title'>camisetas</h1>
					<img className='tag-displayer__img' id='item1' height='100%' width='100%' src='/static/mainView/polo.webp' alt=""/>
				</a>
			</Link>
			<Link route={'producto'} params={{ tag: 'casaca' }}>
				<a className='tag-displayer__item' >
					<h1 className='item-title'>casaca</h1>
					<img  height='100%' id='item2' width='100%' className='tag-displayer__img' src='/static/mainView/orangeTexture.webp' alt=""/>

				</a>
			</Link>
			<Link route={'producto'} params={{ tag: 'zapatillas' }}>

				<a className='tag-displayer__item' >
					<h1 className='item-title'>zapatillas</h1>
			<img  height='100%' width='100%' id='item3' className='tag-displayer__img' src='/static/mainView/blueTexture.webp' alt=""/>

				</a>
			</Link>
			<Link route={'producto'} params={{ tag: 'pantalon' }}>
				<a className='tag-displayer__item'>
					<h1 className='item-title'>jean</h1>
				<img height='100%' width='100%'  id='item4' className='tag-displayer__img' src='/static/mainView/purpleTexture.webp' alt=""/>

				</a>
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
						position: relative;
						gap: 1px;	
					}

					.tag-displayer__item h1 {
						color: white;
						font-size: 2.5rem;
						text-transform: uppercase;
					}
					.tag-displayer__img{
						position: absolute;
						object-fit: cover;
					}
					#item3 {
						background: url(${item3});
						background-size: cover;
						background-position: center center;
					}
					#item2 {
						background-position: center center;
						background: url(${item2});
						background-position: center center;
						background-size: cover;
					}
					#item1 {
						background: url(${item1});
						background-position: center center;
						background-size: cover;
					}
					#item4 {
						background-position: center center;
						background: url(${item4});

						background-size: cover;
					}
					.item-title{
						position:relative;
						z-index: 10
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
