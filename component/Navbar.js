import React, { useState } from 'react';
import SideBar from './SideBar';
import gql from 'graphql-tag';
import { Query, graphql } from 'react-apollo';
import { Link, Router } from '../routes';
import Spinner from './views/Spinner';
import Error from './views/Error';
import Login from './views/Login';
import LoginPortal from './views/LoginPortal';
const Navbar = () => {
	const [
		sidebar,
		setSidebar
	] = useState(false);
	const handleClick = () => {
		setSidebar(!sidebar);
	};

	let textInput;
	const GET_USER = gql`
		{
			getUsers {
				_id
				username
				password
				bag {
					_id
					title
					image
					price
					tags
					discount
				}
			}
		}
	`;

	const [
		display,
		setDisplay
	] = useState(true);
	const [
		show,
		setShow
	] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		Router.pushRoute('producto', { tag: textInput.value });
	};

	const handleLogout = async (client) => {
		await localStorage.removeItem('usuario');
		await localStorage.removeItem('password');
		await Router.pushRoute('/');
	};

	return <div>aea</div>;
};
export default Navbar;
