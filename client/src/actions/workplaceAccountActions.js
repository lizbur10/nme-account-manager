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