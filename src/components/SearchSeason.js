import React from 'react';


class SearchSeason extends React.Component {
    state = { season: '', change: null }

    onInputChange = (event) => {
        this.setState({ season: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({change: true})
        this.props.getSeason(this.state.season, this.state.change)
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