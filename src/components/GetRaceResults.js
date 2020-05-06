import React from 'react';


class GetRaceResults extends React.Component {
  
    render(){
        if(!this.props.results){
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    {`Winner: ${this.props.results.givenName} 
                    ${this.props.results.familyName} 
                    code: ${this.props.results.code}`} 
                </div>
            )
        }
    }
}

export default GetRaceResults