import React from "react";

function FilmCard(props) {
    return  <div className="card">
        <div className="card-image">
        {
          props.poster !== "N/A" ? <img src={props.poster} height='380px' width='350px'/> :
          <img src={`https://via.placeholder.com/380x350?text=${props.title}`}/>
        }
          
        </div>
        <div className="card-content">
            <a href="#">{props.title}</a>
        </div>
        <div className="card-action">
            <p>{props.type}</p>
            <span>year: &nbsp;{props.year}</span>
        </div>
      </div>
    


    

}

export default FilmCard;