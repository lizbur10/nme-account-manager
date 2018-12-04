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

// export const workplaceAccountsToggleSwitch = (workplaceAccount, active) => {
//     return {
//         type: 'WORKPLACE_ACCOUNT_TOGGLE_ACTIVE',
//         id: workplaceAccount.id,
//         active: active
//     };
// } 

export const persistNewWorkplaceAccount = (accountInfo) => {
    return dispatch => {
        fetch('/workplace_accounts', { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(accountInfo)
        }).then(response => {
            console.log(response);
            dispatch(addWorkplaceAccount(accountInfo));
            alert("Account successfully added");
        })
//          .catch(error => console.log(error))
           
    };
}

export const addWorkplaceAccount = (accountInfo) => {
    return {
        type: 'ADD_WORKPLACE_ACCOUNT',
        accountInfo: accountInfo
    }
}

export const persistUpdatedWorkplaceAccount = (accountInfo, sendAlert=true) => {
    return dispatch => {
        fetch('/workplace_accounts/' + accountInfo.id, { 
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(accountInfo)
        }).then(response => {
            dispatch(updateWorkplaceAccount(accountInfo));
            if (sendAlert === true) { alert("Account successfully updated"); }
            console.log(response);
        })
//          .catch(error => console.log(error))
           
    };
}

export const updateWorkplaceAccount = (accountInfo) => {
    return {
        type: 'UPDATE_WORKPLACE_ACCOUNT',
        accountInfo: accountInfo
    }
}