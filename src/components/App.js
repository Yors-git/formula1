import React from 'react';
import SearchSeason from './SearchSeason';
import DisplayRaces from './DisplayRaces';
import GetRaceResults from './GetRaceResults'
import axios from 'axios';

class App extends React.Component{
    state = { results: [], races: [], change:null }

    getSeason = async (season, change) => {
        try {
            this.setState({change: change})
            console.log(this.state.change)
            const response1 = await axios.get(`https://ergast.com/api/f1/${season}/results/1.json`);
            this.setState({races: response1.data.MRData.RaceTable.Races})
            console.log(response1)
            const responses = []
            for(let i = 1; i<=this.state.races.length; i++){
                const response = await axios.get(`https://ergast.com/api/f1/${season}/${i}/results.json`);
                responses.push(response)
            }
        // this.setState({results: response.data.MRData.RaceTable.Races[0].Results[0].Driver})
            this.setState({results: responses})
            this.setState({change: false})
            
        } catch (error) {
            console.error(error);
        }
    }

    render(){
        return (
            <div className="ui container">
                <SearchSeason getSeason={this.getSeason} />
                <div className="ui grid">
                    <DisplayRaces className="four wide column" races={this.state.races} />
                    <GetRaceResults className="twelve wide column" results={this.state.results} change={this.state.change}/>
                </div>
                
            </div>
        )
    }
}

export default App