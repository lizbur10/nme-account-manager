const initialState = {
    workplaceAccounts: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WORKPLACE_ACCOUNTS':
            return {
                ...state,
                workplaceAccounts: action.workplaceAccounts
            }
        case 'TOGGLE_ACTIVE':
            const active = action.active;
            const updatedWorkplaces = state.workplaceAccounts.map(account => 
                (account.id === action.id ? Object.assign({}, account, { active }) : account))
                return {
                    ...state,
                    workplaceAccounts: updatedWorkplaces // THIS SEEMS WRONG BUT IT'S WORKING
                }
    
        default: 
            return state;
    }
}

export default reducer;