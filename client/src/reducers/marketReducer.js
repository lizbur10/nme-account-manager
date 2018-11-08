const initialState = {
    markets: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MARKETS':
            return {
                ...state,
                markets: action.markets
            };
        default: 
            return state;
    }
}

export default reducer;