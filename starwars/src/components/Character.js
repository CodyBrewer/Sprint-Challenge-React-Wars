import React from 'react';
import './StarWars.css';

const Character = props => {
    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
          return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
      }

    return(
        <div>
            <h2 className = {camelize(props.character.name)}>{props.character.name}</h2>
            <ul className="swCharacter">
                <li>Height: {props.character.height} cm</li>
                <li>Mass: {props.character.mass}</li>
                <li>Hair Color: {props.character.hair_color}</li>    
                <li>Skin Color: {props.character.skin_color}</li>    
                <li>Eye Color: {props.character.eye_color}</li>    
                <li>Birth Year: {props.character.birth_year}</li>    
                <li>Gender: {props.character.gender}</li>      
            </ul> 
        </div>
    )
}

export default Character;