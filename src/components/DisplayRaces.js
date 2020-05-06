import React from 'react';
import RaceItem from './RaceItem'

const DisplayRaces = ({races}) => {
    const racesList = races.map(race => {
        return  <RaceItem race={race} key={race.round} />
    })
    
    return <div className="ui list">{racesList}</div>
}

export default DisplayRaces;