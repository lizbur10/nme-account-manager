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

export const persistNewManager = (managerInfo) => {
    return dispatch => {
        dispatch(addManager(managerInfo));
        fetch('/managers', { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(managerInfo)
        }).then(response => {
            // ADD SUCCESS MESSAGE  
            alert("Manager successfully added");
            console.log(response);
        })
          .catch(error => console.log(error))
           
    };
}

export const addManager = (managerInfo) => {
    return {
        type: 'ADD_MANAGER',
        managerInfo: managerInfo
    }
}

export const persistUpdatedManager = (managerInfo) => {
    return dispatch => {
        dispatch(updateManager(managerInfo));
        fetch('/managers/' + managerInfo.id, { 
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(managerInfo)
        }).then(response => {
            // ADD SUCCESS MESSAGE
            alert("Manager information successfully updated");
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