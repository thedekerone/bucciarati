// lib/withApollo.js
import withApollo from "next-with-apollo";
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
const link = createHttpLink({
  uri: "https://chupetinps.herokuapp.com",
  useGETForQueries: true
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const user = localStorage.usuario;
  const pass = localStorage.password;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      usuario: user ? user : null,
      password: pass ? pass : null
    }
  };
});
export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      link: authLink.concat(link),
      // link,
      // fetchOptions : {
      // 	useGETForQueries : true
      // },
      // uri          : 'https://chupetinps.herokuapp.com',
      // // https://chupetinps.herokuapp.com
      cache: new InMemoryCache().restore(initialState || {})
    }),
  {
    getDataFromTree: "never"
  }
);
