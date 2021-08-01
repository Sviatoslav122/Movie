const initialState = {
	language: 'en',
	languages: {
		uk: [{ value: 'en', name: 'Англійська' }, { value: 'uk', name: 'Українська' }],
		en: [{ value: 'en', name: 'English' }, { value: 'uk', name: 'Ukrainian' },]
	},
	label: {
		en: { language: 'Languages', sort: 'Sort by', year: 'Year' },
		uk: { language: 'Мови', sort: 'Сортувати', year: 'Рік' }
	}
}

const languages = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_LANGUAGE':
			return { ...initialState, language: action.payload }

		default:
			return state
	}
};

export default languages;
