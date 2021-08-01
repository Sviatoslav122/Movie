const initialState = {
	loadingGenres: false,
	loadedGenres: false,
	genres: [],
	genresAll: [],
	error: null,
}

const genres = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_GENRES_REQUEST':
			return { ...initialState, loadingGenres: true }

		case 'GET_GENRES_SUCCESS':
			const genres = action.payload
			const genresId = [53, 28, 35, 9648];
			const genresFiltered = genres.filter(item => genresId.includes(item.id))

			return { ...state, loadingGenres: false, loadedGenres: true, genres: genresFiltered, genresAll: action.payload }

		case 'GET_GENRES_ERROR':
			return { ...state, loadingGenres: false, error: action.payload }

		default:
			return state
	}
};

export default genres;
