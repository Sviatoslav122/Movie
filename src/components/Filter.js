import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import styles from '../assets/scss/Filter.module.scss';

const Filter = ({ genres, handleChange, label }) => {
    return (
        <Autocomplete
            multiple
            id="size-small-outlined-multi"
            size="small"
            options={genres}
            className={styles.filter}
            onChange={handleChange}
            getOptionLabel={(genres) => genres.name}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label={label} />
            )}
        />
    );
}

Filter.propTypes = {
    genres: PropTypes.array,
    handleChange: PropTypes.func,
    label: PropTypes.string
}
export default Filter;