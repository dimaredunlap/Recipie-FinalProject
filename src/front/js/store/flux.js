const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		token: null,
		recipes: [],
		ingredientList: [],
		favorite: [],
		user_id: null,
	  },
	  actions: {
		setToken: (token, user_id) => {
		  setStore({
			token: token,
		  });
		  setStore({
			user_id: user_id,
		  });
		},
		removeToken: () => {
		  setStore({
			token: null,
		  });
		},
		getAllRecipes: () => {
		  fetch(`${process.env.BACKEND_URL}/api/recipe`, {
			method: "GET",
			headers: {
			  "content-type": "application/json",
			},
		  })
			.then((result) => result.json())
			.then((data) => {
			  setStore({
				recipes: data,
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
				favorite: data,
			  });
			  console.log(`favorites ${data}`);
			})
			.catch((error) => console.log(error));
		},
		postFavorite: (recipe_id, recipe_name) => {
		  fetch(`${process.env.BACKEND_URL}/api/user/favorites`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
			  user_id: getStore().user_id,
			  recipe_id: recipe_id,
			  recipe_name: recipe_name,
			}),
		  })
			.then((result) => result.json())
			.then((data) => {
			  console.log("this is the favorite data", data);
			  // setStore({
			  //   favorite: data,
			  // });
			  // console.log("######favorites", getStore().favorite);
			});
		},
		ingredientListFunction: (item) => {
		  let myGroceryList = getStore().ingredientList;
		  let selected = myGroceryList.find((element) => element === item);
		  if (selected) {
			myGroceryList = myGroceryList.filter((element) => item !== element);
			setStore({ ingredientList: myGroceryList });
		  } else {
			myGroceryList = [...myGroceryList, item];
			setStore({ ingredientList: myGroceryList });
		  }
		},
  
		setRecipes: (recipeList) => {
		  setStore({
			recipes: recipeList,
		  });
		},
		setIngridientList: (ingredient) => {
		  setStore({ ingredientList: ingredient });
		},
		setFavorite: (favorite) => {
		  setStore({ favorite: favorite });
		},
	  },
	};
  };
  
  export default getState;
  