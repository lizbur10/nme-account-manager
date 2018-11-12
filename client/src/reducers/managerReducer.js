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
            const active = action.active;
            const updatedActiveManagers = state.managers.map(manager => 
                (manager.id === action.id ? Object.assign({}, manager, { active }) : manager))
            return {
                ...state,
                managers: updatedActiveManagers
            }
        case 'UPDATE_MANAGER':
            const updatedManagers = state.managers.map(manager => 
                (manager.id === action.managerInfo.id ? Object.assign({}, action.managerInfo) : manager))
            return {
                ...state,
                managers: updatedManagers
            };
        case 'ADD_MANAGER':
            const newManager = action.managerInfo;
            return {
                ...state,
                managers: state.managers.concat( newManager )
            };
        default: 
            return state;
    }

}

export default reducer;