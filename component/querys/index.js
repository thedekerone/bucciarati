const GET_USER = gql`
	{
		getUsers {
			_id
			username
			password
			bag {
				title
			}
		}
	}
`;

const GET_PRODUCTS = gql`
	{
		getProducts {
			_id
			title
			image
			price
			tags
			discount
		}
	}
`;

const GET_BRANDS = gql`
	{
		getBrands {
			_id
			title
			image
		}
	}
`;

module.exports = {
	GET_BRANDS   : GET_BRANDS,
	GET_USER     : GET_USER,
	GET_PRODUCTS : GET_PRODUCTS
};
