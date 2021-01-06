import './itemHeight.css';
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
            const response1 = await axios.get(`https://ergast.com/api/f1/${season}/results/1.json`);
            this.setState({races: response1.data.MRData.RaceTable.Races})
            console.log(response1)
            const responses = []
            for(let i = 1; i<=this.state.races.length; i++){
                const response = await axios.get(`https://ergast.com/api/f1/${season}/${i}/results.json`);
                responses.push(response)
            }
            this.setState({results: responses})
            this.setState({change: false})
            
        } catch (error) {
            console.error(error);
        }
    }

    render(){
        return (
            <div className="ui container top-bar">
                <SearchSeason getSeason={this.getSeason}/>
                <div className="content ui container">
                <div className="ui grid" style={{display: "flex", justifyContent: "center"}}>
                    <DisplayRaces className="two wide column" races={this.state.races} />
                    <GetRaceResults className="fourteen wide column" results={this.state.results} change={this.state.change} races={this.state.races}/>
                </div>
                </div>    
            </div>
        )
    }
}

export default App