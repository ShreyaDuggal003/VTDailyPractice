import React from 'react';

const NetflixCard = (props) => {

    const {name, id, img_url, rating, description, cast, genre, watch_url} = props.data;

    return (
        <li>
            <div>
                <img
                    src={img_url}
                    alt={name}
                    width="20%"
                    height="20%" />
            </div>

            <h2>Name: {name}</h2>
            <h3>Rating: {rating}</h3>
            <p>Summary: {description}</p>
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>

            <a href={watch_url} target='_blank'>
                <button>Watch now</button> <br />
            </a>
        </li>
    );
}

export default NetflixCard;
