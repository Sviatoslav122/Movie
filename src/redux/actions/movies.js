import axios from 'axios';
import { api } from '../../api/base';

/**
 * Get Movies
 */
const getMovies = (language) => async dispatch => {
    dispatch({ type: 'GET_MOVIES_REQUEST' })
    try {
        const response = await axios.get(`${api.baseUrl}/3/discover/movie?api_key=${api.api_key}&language=${language}&page=${api.page}&sort_by=primary_release_date.desc`)
        dispatch({ type: 'GET_MOVIES_SUCCESS', payload: response.data })
    }
    catch (err) {
        dispatch({ type: 'GET_MOVIES_ERROR', payload: err.message })
    }
}

const SortMovie = (page, sort, language) => async dispatch => {
    dispatch({ type: 'SORT_MOVIES_REQUEST' })
    try {
        const url = sort.length ?
            `${api.baseUrl}/3/discover/movie?api_key=${api.api_key}&language=${language}&page=${page}&sort_by=primary_release_date.desc&with_genres=${sort.join(',')}` :
            `${api.baseUrl}/3/discover/movie?api_key=${api.api_key}&language=${language}&page=${page}&sort_by=primary_release_date.desc`
        const response = await axios.get(url)
        dispatch({ type: 'SORT_MOVIES_SUCCESS', payload: response.data })
    }
    catch (err) {
        dispatch({ type: 'SORT_MOVIES_ERROR', payload: err.message })
    }
}



export {
    getMovies,
    SortMovie
}

