const initialState = {
	loadingMovies: false,
	loadedMovies: false,
	movies: [],
	total_pages: null,
	total_results: null,
	error: null,
}

const movies = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_MOVIES_REQUEST':
			return { ...initialState, loadingMovies: true }

		case 'GET_MOVIES_SUCCESS':
			return { ...state, loadingMovies: false, loadedMovies: true, movies: action.payload.results, total_pages: action.payload.total_pages, total_results: action.payload.total_pages }

		case 'GET_MOVIES_ERROR':
			return { ...state, loadingMovies: false, error: action.payload }

		case 'SORT_MOVIES_REQUEST':
			return { ...initialState, loadingMovies: true }

		case 'SORT_MOVIES_SUCCESS':
			return { ...state, loadingLoloadingMoviesations: false, loadedMovies: true, movies: action.payload.results, total_pages: action.payload.total_pages, total_results: action.payload.total_pages }

		case 'SORT_MOVIES_ERROR':
			return { ...state, loadingMovies: false, error: action.payload }

		default:
			return state
	}
};

export default movies;
