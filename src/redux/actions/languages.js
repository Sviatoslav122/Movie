/**
 * Get Language
 */
const getLanguage = (language) => async dispatch => {
    dispatch({ type: 'GET_LANGUAGE', payload: language })
}

export {
    getLanguage
}

