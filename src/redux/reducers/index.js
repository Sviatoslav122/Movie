import { combineReducers } from 'redux';
import movies from './movies';
import genres from './genres';
import languages from './languages';

const rootReducer = combineReducers({
	movies, genres, languages
});

export default rootReducer;
