import React from 'react';
import './Cohort.css';
import Person from './Person';


const Cohort = ({staff, students}) => {
    const staffCards = staff.map(staffMember =>{
       return ( 
       <Person 
            key={staffMember.id} 
            photo={staffMember.photo} 
            name={staffMember.name} 
            quote={staffMember.quote} 
            superlative={staffMember.superlative}
       />
       )
    })

    const studentCards = students.map(student => {
        return (
            <Person 
                key={student.id} 
                photo={student.photo} 
                name={student.name} 
                quote={student.quote} 
                superlative={student.superlative} 
                />
        )
    })

    return (
        <main className='card-container'>
           {staffCards}
           {studentCards}
        </main>
    )
}



export default Cohort;







// const staffMembers = people.staff;
// const students = people.students;

// const staffCards = staffMembers.map(staffMember =>
//     <Person photo={staffMember.photo}
//     name={staffMember.name}
//     quote={staffMember.quote}
//     superlative={staffMember.superlative}/>
//     )

// const studentCards = students.map(student =>
//     <Person photo={student.photo}
//      name={student.name}
//      quote={student.quote}
//      superlative={student.superlative} />)
