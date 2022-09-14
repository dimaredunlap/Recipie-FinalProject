const getState = ({
	getStore,
	getActions,
	setStore
}) => {
	return {
		store: {
			token: null,
			recipe: []
		},
		actions: {
			getToken: (token) => {
				setStore({token: token});
			} 
		},
	}
};



export default getState;