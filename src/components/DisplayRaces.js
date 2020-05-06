import React from 'react';
import RaceItem from './RaceItem'

const DisplayRaces = ({races}) => {
    const racesList = races.map(race => {
        return  <RaceItem race={race} />
    })
    
    return <div className="ui relaxed divided list">{racesList}</div>
}

export default DisplayRaces;