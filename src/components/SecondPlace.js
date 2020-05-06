import React from 'react';

const SecondPlace = ({driver}) => {
    return(
        <div className="item">
            <div className="content">
              <a href={driver.url} target="_blank" rel="noopener noreferrer" className="header">{`Second Place: ${driver.givenName} ${driver.familyName}`}</a>
              <div className="description">{`code: ${driver.code}`}</div>  
            </div>
        </div>
        
    )
}

export default SecondPlace