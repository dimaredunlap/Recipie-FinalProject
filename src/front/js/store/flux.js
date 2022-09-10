const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			red: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getRecipie: () => {
				fetch("https://3001-tysonr0319-recipiefinal-c2jr55edypq.ws-us64.gitpod.io/api/recipe", {
					method: "GET",
					headers: {"Content-Type": "application/json"}

				})
				.then((response)=>response.json())
				.then((result)=>setStore({red: result}))
				.catch((error)=>console.log("error", error))
			},
			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
