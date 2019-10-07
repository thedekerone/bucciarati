// lib/withApollo.js
import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
export default withApollo(
	({ ctx, headers, initialState }) =>
		new ApolloClient({
			request : (operation) => {
				const user = localStorage.usuario;
				const pass = localStorage.password;
				operation.setContext({
					headers : {
						usuario  : user ? user : null,
						password : pass ? pass : null
					}
				});
			},
			uri     : 'http://localhost:4000',
			// https://chupetinps.herokuapp.com

			cache   : new InMemoryCache().restore(initialState || {})
		}),
	{
		getDataFromTree : 'never'
	}
);
