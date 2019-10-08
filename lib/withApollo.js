// lib/withApollo.js
import withApollo from 'next-with-apollo';
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
const customFetch = (uri, options) => {
	const { body, ...newOptions } = options;
	const queryString = objectToQuery(JSON.parse(body));
	requestedString = uri + queryString;
	return fetch(requestedString, newOptions);
};
const link = createHttpLink({
	uri              : 'https://chupetinps.herokuapp.com',
	useGETForQueries : true
});
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
			link    : link,
			// link,
			// fetchOptions : {
			// 	useGETForQueries : true
			// },
			// uri          : 'https://chupetinps.herokuapp.com',
			// // https://chupetinps.herokuapp.com

			cache   : new InMemoryCache().restore(initialState || {})
		}),
	{
		getDataFromTree : 'never'
	}
);
