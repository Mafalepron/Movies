import React from "react";
import { SearchCategories } from "./SearchCategories";

class Search extends React.Component {
      state = {   
          search: '',
<<<<<<< HEAD
          type: '',
=======
>>>>>>> c2f61fd2946a281c8e08080aca3e0e709de73616
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
<<<<<<< HEAD
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
=======
                    <button onClick={() => this.props.searchMovies(this.state.search)} className="btn search-btn">
                      Search
                    </button>
                    <SearchCategories />
                </div>
>>>>>>> c2f61fd2946a281c8e08080aca3e0e709de73616
          </div>


        )
    }

};

export {Search};