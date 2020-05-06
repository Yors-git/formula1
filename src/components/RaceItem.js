import React from 'react';

const RaceItem = ({race}) => {
    return (
        <div className="item">
            <div className="content">
            <a href={race.url} target="_blank" rel="noopener noreferrer" className="header">{race.raceName}</a>
            </div>
        </div>
    )
}

export default RaceItem;