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
            const updatedActiveWorkplaces = state.workplaceAccounts.map(account => 
                (account.id === action.id ? Object.assign({}, account, { active }) : account))
            return {
                ...state,
                workplaceAccounts: updatedActiveWorkplaces // ??? IS THIS GOOD PRACTICE?
            }
        case 'UPDATE_WORKPLACE_ACCOUNT':
            const updatedWorkplaceAccounts = state.workplaceAccounts.map(account => 
                (account.id === action.accountInfo.id ? Object.assign({}, action.accountInfo) : account))
            return {
                ...state,
                workplaceAccounts: updatedWorkplaceAccounts
            };
        case 'ADD_WORKPLACE_ACCOUNT':
            const newAccount = action.accountInfo;
            return {
                ...state,
                workplaceAccounts: {
                    ...state.workplaceAccounts,
                    newAccount
                }
            };
        // return state.workplaceAccounts.map(account => {
            //     if (account.id === action.accountInfo.id) {
            //         return {
            //             ...account,
            //             ...action.accountInfo
            //         }
            //     } 
            //     return account;
            // })
        
        default: 
            return state;
    }
}

export default reducer;