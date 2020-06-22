import React from 'react';
import Winner from './Winner';
import SecondPlace from './SecondPlace';
import ThirdPlace from './ThirdPlace';


const GetRaceResults = ({results, change}) => {

    if( change === true){
        return <div>Loading...</div>
    }  
    const listOfWinners = results.map(result =>{
        return <Winner driver={result.data.MRData.RaceTable.Races[0].Results[0].Driver} />
    })
    const listOfSecond = results.map(result =>{
        return <SecondPlace driver={result.data.MRData.RaceTable.Races[0].Results[1].Driver} />
    })
    const listOfThird = results.map(result =>{
        return <ThirdPlace driver={result.data.MRData.RaceTable.Races[0].Results[2].Driver} />
    })
    
    return (
    
        <div className="ui grid">
        <div className="row">
            <div className="five wide column ui relaxed divided list">
            {listOfWinners}
            </div>
            <div className="five wide column ui relaxed divided list">
            {listOfSecond}
            </div>
            <div className="five wide column ui relaxed divided list">
            {listOfThird}
            </div>
        </div>
        </div>
        
    )
            
}

export default GetRaceResults