const initialState = {
    managers: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MANAGERS':
            return {
                ...state,
                managers: action.managers
            };
        case 'MANAGER_TOGGLE_ACTIVE':
            
            // const active = action.active;
            // return (
            //     state.map(manager => 
            //         (manager.id === action.id ? Object.assign({}, manager, { active }) : manager))

            // );
            const active = action.active;
            const updatedManagers = state.managers.map(account => 
                (account.id === action.id ? Object.assign({}, account, { active }) : account))
                return {
                    ...state,
                    managers: updatedManagers // THIS SEEMS WRONG BUT IT'S WORKING
                }
    
        default: 
            return state;
    }

}

export default reducer;