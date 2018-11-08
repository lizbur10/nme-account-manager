export const getMarkets = (markets) => {
    return {
        type: 'GET_MARKETS',
        markets: markets
    }
}

export const fetchMarkets = () => {
    return dispatch => {
        fetch('/markets') 
        .then(response => response.json())
        .then(data => {
            dispatch(getMarkets(data));
        })

    };
}  
