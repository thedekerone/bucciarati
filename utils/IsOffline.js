import React, { Component } from 'react';

export default class IsOffline extends Component {
	constructor(props) {
		super(props);
		this.state = { onLine: true };
	}
	componentDidMount() {
		if (!window) return;
		this.setState({ onLine: navigator ? navigator.onLine : true });
		window.addEventListener('online', this.goOnline);
		window.addEventListener('offline', this.goOffline);
	}

	componentWillUnmount() {
		window.removeEventListener('online', this.goOnline);
		window.removeEventListener('offline', this.goOffline);
	}

	goOnline = () => this.setState({ onLine: true });
	goOffline = () => this.setState({ onLine: false });

	render() {
		const { children } = this.props;
		const { onLine } = this.state;
		if (onLine) {
			return null;
		}
		return <span>{children}</span>;
	}
}
