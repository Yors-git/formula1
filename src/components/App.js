import React from 'react';
import SearchSeason from './SearchSeason';
import DisplayRaces from './DisplayRaces';
import GetRaceResults from './GetRaceResults'
import axios from 'axios';

class App extends React.Component{
    state = { results: [], races: [] }
    getSeason = async (season) => {
        try {
          const response1 = await axios.get(`https://ergast.com/api/f1/${season}/results/1.json`);
          this.setState({races: response1.data.MRData.RaceTable.Races})
          console.log(response1)
        } catch (error) {
          console.error(error);
        }
    }
    
    getResults = async (season, round) => {
        try {
            const response = await axios.get(`https://ergast.com/api/f1/${season}/1/results.json`);
            this.setState({results: response.data.MRData.RaceTable.Races[0].Results[0].Driver})
            console.log(response)
          } catch (error) {
            console.error(error);
          }
    }

    render(){
        return (
            <div className="ui container">
                <SearchSeason getSeason={this.getSeason} getResults={this.getResults} />
                <DisplayRaces races={this.state.races} />
                <GetRaceResults results={this.state.results}/>
            </div>
        )
    }
}

export default App