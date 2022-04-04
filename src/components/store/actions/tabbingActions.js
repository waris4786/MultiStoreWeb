export const setGetTabbingValue = (data) => dispatch => {
    try {
        dispatch({ type: 'GET_TABBING_VALUE', data })
    } catch (err) {
        console.log(err);
    }
}
