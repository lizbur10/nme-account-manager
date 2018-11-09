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
        case 'WORKPLACE_ACCOUNT_TOGGLE_ACTIVE':
            const active = action.active;
            const updatedWorkplaces = state.workplaceAccounts.map(account => 
                (account.id === action.id ? Object.assign({}, account, { active }) : account))
            return {
                ...state,
                workplaceAccounts: updatedWorkplaces // THIS SEEMS WRONG BUT IT'S WORKING
            }
        case 'UPDATE_WORKPLACE_ACCOUNT':
            return state.workplaceAccounts.map(account => {
                if (account.id === action.accountInfo.id) {
                    return {
                        ...account,
                        ...action.accountInfo
                    }
                } 
                return account;
            })
        
        default: 
            return state;
    }
}

export default reducer;