export const toggleSwitch = (id, active) => {
    return {
        type: 'TOGGLE_ACTIVE',
        id: id,
        active: active
    };
} 