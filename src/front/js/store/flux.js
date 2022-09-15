const getState = ({
	getStore,
	getActions,
	setStore
}) => {
	return {
		store: {
			token: null,
			recipes: []
		},
		actions: {
			getToken: (token) => {
				setStore({token: token});

				getAllRecipes : () => {
					fetch (`${process.env.BACKEND_URL}/api/recipe`, 
					{method : 'GET', 
					headers : { 'content-type': 'application/json' },
				
				})
				.then((result) => result.json())
				.then((data) => {setStore ({recipes: data}); console.log(data);})
				.catch((error) => console.log(error));
				};
				setRecipes: (recipeList) => {
					setStore({recipes: recipeList});
				}
			} 
		},
	}
};



export default getState;

