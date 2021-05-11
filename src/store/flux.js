const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			products: [],
		},
		actions: {
			getProducts: async () => {
                const store = getStore();
				await fetch("https://fakestoreapi.com/products")
					.then(res => res.json())
					.then(data => {
						setStore({ products: data });
                        console.log(store.products);
					})
					.catch(err => console.error(err));
			},
		}
	};
};

export default getState;