import React from 'react';

import {FilmCards} from "../components/FilmCards";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        films: [],
        loading: true,
      }



    searchMovies = (str,type = 'all') => {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({films: data.Search, loading: false}))

    };


    
    render() {
        return  (
                    <div className="content">
                        <Search searchMovies={this.searchMovies}/>
                
                        {this.state.loading ? 
                            <Preloader />  :  <FilmCards films={this.state.films}/>
                            }
                    </div>
    
        );
    }
};

export {Main};