import React, { useState } from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';

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
			<SideBar show={show} />
			{props.children}
		</div>
	);
}
