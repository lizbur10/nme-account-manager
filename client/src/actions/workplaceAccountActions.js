export const getWorkplaceAccounts = (workplaceAccounts) => {
    return {
        type: 'GET_WORKPLACE_ACCOUNTS',
        workplaceAccounts: workplaceAccounts
    }
}

export const fetchWorkplaceAccounts = () => {
    return dispatch => {
        fetch('/workplace_accounts') 
        .then(response => response.json())
        .then(data => {
            dispatch(getWorkplaceAccounts(data));
        })

    };
}

export const workplaceAccountsToggleSwitch = (id, active) => {
    return {
        type: 'WORKPLACE_ACCOUNT_TOGGLE_ACTIVE',
        id: id,
        active: active
    };
} 

export const persistWorkplaceAccount = (methodType, accountInfo) => {
    console.log("account info: ", accountInfo);
    return dispatch => {
        dispatch(updateWorkplaceAccount(accountInfo));
        fetch('/workplace_accounts', { 
            method: methodType,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(accountInfo)
        }).then(response => {
            // ADD SUCCESS MESSAGE AND REDIRECT 
            console.log(response);
        })
          .catch(error => console.log(error))
           
    };
}

export const updateWorkplaceAccount = (accountInfo) => {
    return {
        type: 'UPDATE_WORKPLACE_ACCOUNT',
        accountInfo: accountInfo
    }
}