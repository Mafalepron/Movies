import React from "react";
import { SearchCategories } from "./SearchCategories";

class Search extends React.Component {
      state = {   
          search: '',
      };  


    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
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
                    <button onClick={() => this.props.searchMovies(this.state.search)} className="btn search-btn">
                      Search
                    </button>
                    <SearchCategories />
                </div>
          </div>


        )
    }

};

export {Search};