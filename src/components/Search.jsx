import React from "react";

class Search extends React.Component {
      state = {   
          search: '',
          type: '',
      };  


    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleTypeSearch = (event) => {
        this.setState({type: event.target.value})
    }


    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                  <input 
                      id="search" 
                      placeholder="Введите название фильма" 
                      type="search" 
                      className="validate"
                      value={this.state.search}
                      onChange={(e) => this.setState({search: e.target.value})}
                      onKeyDown={this.handleKey}
                  />
                    <button 
                        onClick={() => this.props.searchMovies(this.state.search, this.state.type)} 
                        className="btn search-btn"
                    >
                      Search
                    </button>
                </div>
                <form 
                    className="search-form">
                    <p>
                    <label>
                    <input 
                        className="with-gap" 
                        name="group3" 
                        type="radio" 
                        onChange={this.handleTypeSearch}
                        value='all'
                        checked={this.state.type === 'all'}
                    />
                    <span >All</span>
                    </label>
                </p>
                <p className="searcher">
                    <label>
                    <input 
                        className="with-gap" 
                        name="group3" 
                        type="radio" 
                        onChange={this.handleTypeSearch}
                        value="movie"
                        checked={this.state.type === 'movie'}
                    />
                    <span>Movies</span>
                    </label>
                </p>
                <p className="searcher">
                    <label >
                    <input 
                        className="with-gap" 
                        name="group3" 
                        type="radio" 
                        onChange={this.handleTypeSearch}
                        value="series"
                        checked={this.state.type === 'series'}
                    />
                    <span>Series</span>
                    </label>
                </p>
                </form>
          </div>


        )
    }

};

export {Search};