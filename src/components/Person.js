import React from 'react';
import './Person.css';


const Person = (props) => {
    return (
    <div className='person-card'>
         <img className='yearbook-photo' src={props.photo} alt=""/>
        <h3 className='person-name'>{props.name}</h3>
        <p className='person-quote'>"{props.quote}"</p>
        <h3 className='superlative'>{props.superlative}</h3>
    </div>
    
    )
    
}

export default Person;
