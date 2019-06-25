import React from 'react';
import Person from './Person';
import people from '../data/yearbook-data.js';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE

const staffMembers = people.staff

const cards = staffMembers.map(staffMember =>
    <Person photo={staffMember.photo}
    name={staffMember.name}
    quote={staffMember.quote}
    superlative={staffMember.superlative}/>
    )

const Cohort = () => {
    return (
        <div className='card-container'>
        {cards}
        </div>
    )
}



export default Cohort;
