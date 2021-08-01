import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Filter, Card, Pagination, CardSkeleton } from '../components';
import * as MoviesActions from '../redux/actions/movies';
import * as GenresActions from '../redux/actions/genres';
import * as LanguageActions from '../redux/actions/languages';
import styles from '../assets/scss/General.module.scss';


const Home = (props) => {
    const { getGenres, getMovies, SortMovie, total_pages, language, genres, genresAll, label, movies, loadedMovies, loadedGenres } = props;
    var skeleton = [];
    for (var i = 0; i < 20; i++) {
        skeleton.push(<CardSkeleton key={i} />);
    }
    const [page, setPage] = React.useState(1);
    const [sort, setSort] = React.useState([]);
    React.useEffect(() => {
        getGenres(language);
        getMovies(language);
    }, [language])

    // pagination onChange page
    const handleChange = React.useCallback((event, value) => {
        setPage(value);
        SortMovie(value, sort, language);
    }, []);

    const handleSort = React.useCallback((event, value) => {
        const sortValue = value.map(genre => genre.id);
        setSort(sortValue)
        SortMovie(page, sortValue, language);
    }, []);

    return (
        <div className={styles.container}>
            {loadedGenres &&
                <Filter genres={genres} label={label[language].sort} handleChange={handleSort} />
            }
            {!loadedMovies && skeleton}

            {loadedMovies &&
                <>
                    {movies.map((movie) => (
                        <Card key={movie.id} label={label[language].year} movie={movie} genres={genresAll} />
                    ))}
                    <Pagination count={total_pages} page={page} handleChange={handleChange} />
                </>
            }
        </div>
    )
}
const mapStateToProps = state => ({
    loadedMovies: state.movies.loadedMovies,
    movies: state.movies.movies,
    total_results: state.movies.total_results,
    total_pages: state.movies.total_pages,
    loadingGenres: state.genres.loadingGenres,
    loadedGenres: state.genres.loadedGenres,
    genres: state.genres.genres,
    genresAll: state.genres.genresAll,
    language: state.languages.language,
    label: state.languages.label
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...MoviesActions,
    ...GenresActions,
    ...LanguageActions
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home));