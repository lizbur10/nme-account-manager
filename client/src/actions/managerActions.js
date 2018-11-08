export const getManagers = (managers) => {
    console.log(managers);
    return {
        type: 'GET_MANAGERS',
        managers: managers
    }
}

export const fetchManagers = () => {
    return dispatch => {
        fetch('/managers') 
        .then(response => response.json())
        .then(data => {
            dispatch(getManagers(data));
        })

    };
}  