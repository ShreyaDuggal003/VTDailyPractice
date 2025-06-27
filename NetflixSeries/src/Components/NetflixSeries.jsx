import React from 'react';
import seriesData from "../Data/seriesData.json"
import SeriesCard from './SeriesCard';

function NetflixSeries() {

    return (
        <ul>
            {seriesData.map((curElement) => (
                <SeriesCard key={curElement.id} data={curElement}/>
            ))
            }
        </ul>

    );
}

export default NetflixSeries;
