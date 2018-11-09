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

export const persistManager = (methodType, managerInfo) => {
    console.log("manager info: ", managerInfo);
    return dispatch => {
        dispatch(updateManager(managerInfo));
        fetch('/managers', { 
            method: methodType,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(managerInfo)
        }).then(response => {
            // ADD SUCCESS MESSAGE AND REDIRECT 
            console.log(response);
        })
          .catch(error => console.log(error))
           
    };
}

export const updateManager = (managerInfo) => {
    return {
        type: 'UPDATE_MANAGER',
        managerInfo: managerInfo
    }
}