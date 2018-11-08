export const toggleSwitch = (id, active) => {
    return {
        type: 'TOGGLE_ACTIVE',
        id: id,
        active: active
    };
} 

export {
    fetchWorkplaceAccounts
} from './workplaceAccountActions';

export {
    fetchManagers
} from './managerActions';