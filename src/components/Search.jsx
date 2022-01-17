import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);

    this.state = {   
        search: '',
    };
};

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }


    render() {
        return (
            <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input 
                    id="search" 
                    placeholder="Введите название фильма" 
                    type="search" 
                    className="validate"
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={() => this.handleKey}
                />
                <button onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
                </div>
              </div>
            </form>
          </div>


        )
    }

};

export {Search};