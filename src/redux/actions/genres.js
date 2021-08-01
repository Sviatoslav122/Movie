import axios from 'axios';
import { api } from '../../api/base';

/**
 * Get Genres
 */
const getGenres = (language) => async dispatch => {
    dispatch({ type: 'GET_GENRES_REQUEST' })
    try {
        const response = await axios.get(`${api.baseUrl}/3/genre/movie/list?api_key=${api.api_key}&language=${language}&sort_by=release_date.asc`)
        dispatch({ type: 'GET_GENRES_SUCCESS', payload: response.data.genres })
    }
    catch (err) {
        dispatch({ type: 'GET_GENRES_ERROR', payload: err.message })
    }
}

export {
    getGenres
}

