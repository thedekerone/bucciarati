import React, { useState } from 'react';
import { Query, graphql } from 'react-apollo';
import { Router } from '../../routes';

import gql from 'graphql-tag';
const GET_USER = gql`
	{
		getUsers {
			_id
			username
			password
		}
	}
`;
let message = 'wrong username or password';
const LoginPortal = ({ show, client, setShow }) => {
	const [
		count,
		setCount
	] = useState(0);

	let username, password;

	const handleLogin = async () => {
		localStorage.setItem('usuario', username.value);
		localStorage.setItem('password', password.value);
		await client.resetStore();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await handleLogin();
		await client
			.query({
				query : GET_USER
			})
			.then((result) => {
				if (result.data.getUsers) {
					setShow(false);
					setCount(0);
				} else {
					setCount(3);
				}

				return 'console.log(result);';
			});
	};
	return (
		<div>
			<div className='portal'>
				<div className='login-container'>
					<h1>Logueate</h1>
					<form
						onSubmit={(e) => {
							handleSubmit(e);
						}}>
						<label htmlFor='username'>username:</label>
						<input
							type='text'
							ref={(input) => {
								username = input;
							}}
							placeholder='username'
						/>
						<label htmlFor='password'>password:</label>
						<input
							type='password'
							ref={(input) => {
								password = input;
							}}
							placeholder='password'
						/>
						<input type='submit' />
					</form>

					<p className='message'>{message}</p>
				</div>
			</div>

			<style jsx>
				{`
					.message {
						color: red;
						font-size: 0.6rem;
						display: ${count < 1 ? 'none' : 'inline'};
					}
					.portal {
						height: 100vh;

						left: 0;
						top: 0;
						width: 100vw;
						position: fixed;
						z-index: 100000000;
						background: rgba(0, 0, 0, 0.4);
						display: ${show ? 'block' : 'none'};
					}
					.login-container {
						background: white;
						width: 300px;
						margin: 10% auto;
						padding: 30px;

						height: 300px;
					}
				`}
			</style>
		</div>
	);
};

export default LoginPortal;
