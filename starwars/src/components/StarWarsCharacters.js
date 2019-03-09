import React from 'react';
import Character from './Character';

const StarWarsCharacters = props => {
    return(
        <div className = "char-list">
            {props.starwarsChars.map(character => {
                return <Character
                    character = {character}
                />
            })}
            
        </div>
    )
}

export default StarWarsCharacters;

{/* <div className="class-list" />
{students.map((student, index) => (
    <Student student={student} key={student.name} />
))} */}