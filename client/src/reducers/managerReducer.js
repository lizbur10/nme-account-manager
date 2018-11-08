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
        case 'TOGGLE_ACTIVE':
            const active = action.active;
            return (
                state.map(manager => 
                    (manager.id === action.id ? Object.assign({}, manager, { active }) : manager))

            );
        default: 
            return state;
    }

}

export default reducer;