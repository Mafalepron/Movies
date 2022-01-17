import React from 'react';

import {FilmCards} from "../components/FilmCards";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

class Main extends React.Component {
    state = {
        films: [],
      };

componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=dea19acd&s=matrix')
        .then(response => response.json())
         .then(data => this.setState({films: data.Search}, ))
    
      };

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=dea19acd&s=${str}`)
            .then(response => response.json())
            .then(data => this.setState({films: data.Search}, ))
    };


    
    render() {
        return(
                <div className="content">
                <Search searchMovies={this.searchMovies}/>
            {
                this.state.films.length ? (
                <FilmCards films={this.state.films}/>
                ) : <Preloader /> 
            }
                </div>
    
  );
 }
};

export {Main};