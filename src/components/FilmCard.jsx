import React from "react";

function FilmCard(props) {
  const {
      Title: title,
      Year: year,
      imdbID: id,
      Type: type,
      Poster: poster,
  } = props;
    return  <div className="card">
        <div className="card-image">
        {
          props.poster !== "N/A" ? <img src={poster} height='380px' width='350px'/> :
          <img src={`https://via.placeholder.com/380x350?text=${title}`}/>
        }
          
        </div>
        <div className="card-content">
            <a href="#">{title}</a>
        </div>
        <div className="card-action">
<<<<<<< HEAD
            <p>{type}</p>
=======
            <p>{props.type}</p>
>>>>>>> c2f61fd2946a281c8e08080aca3e0e709de73616
            <span>year: &nbsp;{year}</span>
        </div>
      </div>
    


    

}

export default FilmCard;