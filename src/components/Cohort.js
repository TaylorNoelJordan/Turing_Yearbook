import React from 'react';
import './Cohort.css';
import Person from './Person';


const Cohort = ({data}) => {
    const photoCards = data.map(person =>{
       return ( 
       <Person 
            key={person.id} 
            photo={person.photo} 
            name={person.name} 
            quote={person.quote} 
            superlative={person.superlative}
       />
       )
    })


    return (
        <main className='card-container'>
           {photoCards}
        </main>
    )
}



export default Cohort;
