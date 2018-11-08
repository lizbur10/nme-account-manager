export const getManagers = (managers) => {
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

export const managersToggleSwitch = (id, active) => {
    return {
        type: 'MANAGER_TOGGLE_ACTIVE',
        id: id,
        active: active
    };
} 