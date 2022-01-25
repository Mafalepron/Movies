import React from "react";
import FilmCard from "./FilmCard";

function FilmCards(props) {
<<<<<<< HEAD
    const {films = []} = props;
    return(
        <div className="Movies">
            {films.length ? films.map(film => (
=======
    const {films} = props;
    return(
        <div className="Movies">
            {films.map(film => (
>>>>>>> c2f61fd2946a281c8e08080aca3e0e709de73616
                <FilmCard 
                    key={film.imdbID} 
                    {...film}
                />
<<<<<<< HEAD
            )) :
            <h4>Nothing found</h4> 
=======
            )) 
>>>>>>> c2f61fd2946a281c8e08080aca3e0e709de73616
            }
        </div>     
    );
        
};

export {FilmCards};