import React from 'react';
import Person from './Person';
import people from '../data/yearbook-data.js';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE

const staffMembers = people.staff;
const students = people.students;

const staffCards = staffMembers.map(staffMember =>
    <Person photo={staffMember.photo}
    name={staffMember.name}
    quote={staffMember.quote}
    superlative={staffMember.superlative}/>
    )

const studentCards = students.map(student =>
    <Person photo={student.photo}
     name={student.name}
     quote={student.quote}
     superlative={student.superlative} />)



const Cohort = () => {
    return (
        <div className='card-container'>
        {staffCards}
        {studentCards}
        </div>
    )
}



export default Cohort;
