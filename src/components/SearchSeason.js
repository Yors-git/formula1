import React from 'react';


class SearchSeason extends React.Component {
    state = { season: '' }

    onInputChange = (event) => {
        this.setState({ season: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getSeason(this.state.season)
        this.props.getResults(this.state.season)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.handleSubmit} className="ui form">
                        <div className="field">
                            <label>Season</label>
                            <input 
                                type="text" 
                                placeholder="Year" 
                                value={this.state.season}
                                onChange={this.onInputChange}
                            />
                        </div>
                </form>
            </div>
        )
    }
}

export default SearchSeason