import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import styles from '../assets/scss/Pagination.module.scss';

const BasicPagination = ({ count, page, handleChange }) => {
    return (
        <div className={styles.pagination}>
            <Pagination count={count} color="primary" page={page} onChange={handleChange} />
        </div>
    )
}

BasicPagination.propTypes = {
    count: PropTypes.number,
    page: PropTypes.number,
    handleChange: PropTypes.func
}

export default BasicPagination;