import PropTypes from "prop-types";


function Movie({id, coverImg, title, summary, genres, rating, runtime}) {
    return (
        <div id={id}>
            <img src={coverImg} alt={title} />
            <h2>{title}</h2>
            <p>summary {summary}</p>
            <p>rating {rating}</p>
            <p>runtime {runtime} minutes </p>
            <p>Tag</p>
            <ul>
                {genres && genres.map((g) => <li key={g}>{g}</li>)}
            </ul>
        </div>
    );
};

Movie.propTypes={
    id: PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired,
    runtime : PropTypes.number.isRequired,
};

export default Movie;