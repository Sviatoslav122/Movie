import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import styles from '../assets/scss/Card.module.scss';
import noImg from '../assets/img/no-image.jpg';



function MediaControlCard({ movie, genres, label }) {
    const img = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : noImg;
    const genresArr = genres.filter(item => movie.genre_ids.includes(item.id));

    return (
        <Card className={styles.card}>
            <CardMedia
                className={styles.img}
                image={img}
                title="Live from space album cover"
            />
            <div className={styles.details}>
                <CardContent className={styles.content}>
                    <Typography component="h4" variant="h4">
                        {movie.title}
                    </Typography>
                    <Typography component="span" className={styles.year}>
                        {label}: <b>{dayjs(movie.release_date).format('YYYY')}</b>
                    </Typography>
                    {genresArr.length !== 0 && <ul className={styles.ul} >
                        {genresArr.map((genre) => (
                            <li className={styles.genre} key={genre.id}><span>{genre.name}</span></li>
                        ))}
                    </ul>}
                </CardContent>
            </div>
        </Card>
    );
}
MediaControlCard.propTypes = {
    movie: PropTypes.object,
    genres: PropTypes.array,
    label: PropTypes.string
}

export default MediaControlCard;