const getState = ({
	getStore,
	getActions,
	setStore
}) => {
	return {
		store: {
			token: null,
			recipes: [],
			ingredientList: [],
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
			postFavorite: (user_id, recipe_id, recipe_name) => {
				let favorite = getStore().favorite;
				const found = favorite.find((item) => item == recipe_id);
				fetch(`${process.env.BACKEND_URL}/api/user/favorites`, {
					method: 'POST',
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						user_id: user_id,
						recipe_id: recipe_id,
						recipe_name: recipe_name
					})
				})
				.then((result) => result.json())
				.then((data) => {
					setStore({
						favorite: data
					});
			})
		},
		ingredientListFunction: (item) => {
			let myGroceryList = getStore().ingredientList;
				let selected = myGroceryList.find(element => element === item);
				if (selected) {
					myGroceryList = myGroceryList.filter(element => item !== element);
					setStore({ ingredientList: myGroceryList });
				} else {
					myGroceryList = [...myGroceryList, item];
					setStore({ ingredientList: myGroceryList });
		}
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