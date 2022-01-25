import React from 'react';

import {FilmCards} from "../components/FilmCards";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        films: [],
<<<<<<< HEAD
        loading: true,
      }

=======
      }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=dea19acd&s=terminator')
            .then(response => response.json())
            .then(data => this.setState({films: data.Search}, ))
    
       };
>>>>>>> c2f61fd2946a281c8e08080aca3e0e709de73616


    searchMovies = (str,type = 'all') => {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
<<<<<<< HEAD
            .then(data => this.setState({films: data.Search, loading: false}))

=======
            .then(data => this.setState({films: data.Search}))
>>>>>>> c2f61fd2946a281c8e08080aca3e0e709de73616
    };


    
    render() {
        return  (
                    <div className="content">
                        <Search searchMovies={this.searchMovies}/>
                
<<<<<<< HEAD
                        {this.state.loading ? 
                            <Preloader />  :  <FilmCards films={this.state.films}/>
                            }
=======
                        {this.state.films.length ? 
                            <FilmCards films={this.state.films}/>
                            : <Preloader /> }
            
>>>>>>> c2f61fd2946a281c8e08080aca3e0e709de73616
                    </div>
    
        );
    }
};

export {Main};