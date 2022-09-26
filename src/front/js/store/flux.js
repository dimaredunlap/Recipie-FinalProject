const getState = ({
	getStore,
	getActions,
	setStore
}) => {
	return {
		store: {
			token: null,
			recipes: [],
			ingridientList: [],
			favorite: [],
		
		},
		actions: {
			setToken: (token) => {
				setStore({
					token: token
				});
			},
			removeToken: () => {
				setStore({
					token: null
				});
			},	
			getAllRecipes: () => {
				fetch(`${process.env.BACKEND_URL}/api/recipe`, {
						method: 'GET',
						headers: {
							'content-type': 'application/json'
						},
					})
					.then((result) => result.json())
					.then((data) => {
						setStore({
							recipes: data
						});
						console.log(`Recipes ${data}`);
					})
					.catch((error) => console.log(error));
			},
			getAllFavorites: () => {
				fetch(`${process.env.BACKEND_URL}/api/favorites`, {
					method: "GET",
					headers: { "Content-Type": "application/json" },
				  })
					.then((result) => result.json())
					.then((data) => {
					  setStore({
						favorite: data
					});
					  console.log(`favorites ${data}`)
					})
					.catch((error) => console.log(error));
			},

			setRecipes: (recipeList) => {
				setStore({
					recipes: recipeList
				});
			},
			setIngridientList: (ingredient) => {
				setStore({ingredientList: ingredient});
			},
			setFavorite:(favorite) => {
				setStore({favorite: favorite});
			}
		
			}
	}
}


export default getState;