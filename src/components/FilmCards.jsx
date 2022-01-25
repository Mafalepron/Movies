import React from "react";
import FilmCard from "./FilmCard";

function FilmCards(props) {
    const {films} = props;
    return(
        <div className="Movies">
            {films.map(film => (
                <FilmCard 
                    key={film.imdbID} 
                    {...film}
                />
            )) 
            }
        </div>     
    );
        
};

export {FilmCards};