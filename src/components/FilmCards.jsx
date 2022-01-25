import React from "react";
import FilmCard from "./FilmCard";

function FilmCards(props) {
    const {films = []} = props;
    return(
        <div className="Movies">
            {films.length ? films.map(film => (
                <FilmCard 
                    key={film.imdbID} 
                    {...film}
                />
            )) :
            <h4>Nothing found</h4> 
            }
        </div>     
    );
        
};

export {FilmCards};