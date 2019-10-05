import React from 'react';
import { Router } from '../../routes';

export default function Selector({ tag }) {
	let value;
	const handleChange = (e) => {
		e.preventDefault();
		Router.pushRoute('producto', { tag: value.value });
	};

	return (
		<div className='selector'>
			<div className='drop-bar'>
				<select
					ref={(input) => {
						value = input;
					}}
					onChange={(e) => {
						handleChange(e);
					}}
					name='product'
					id='product'>
					<option value={tag}>{tag}</option>
					<option value='polos'>polos</option>
					<option value='pantalones'>pantalones</option>
					<option value='zapatillas'>zapatillas</option>
					<option value='hombre'>hombre</option>
					<option value='mujer'>mujer</option>
				</select>
			</div>

			<div className='filter' />
			<style jsx>{`
				.drop-bar {
					display: flex;
					justify-content: center;
				}
				select {
					width: 100%;
					font-size: 1.3em;
					padding: .5em;
					font-weight: 300;
					margin: 0 auto;
					max-width: 900px;
				}
			`}</style>
		</div>
	);
}
