import './itemHeight.css'
import React from 'react';

const ThirdPlace = ({driver}) => {
    return(
        <div className="height1 item">
            <div className="content">
              <a href={driver.url} target="_blank" rel="noopener noreferrer" className="header">{`Third Place: ${driver.givenName} ${driver.familyName}`}</a>
              <div className="description">{`code: ${driver.code}`}</div>  
            </div>
        </div>
        
    )
}

export default ThirdPlace