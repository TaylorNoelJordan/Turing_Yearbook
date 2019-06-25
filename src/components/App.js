import React, { Component } from 'react';
import Cohort from './Cohort';
import Person from './Person';
import people from '../data/yearbook-data.js';
import './App.css';



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



class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
      <h2>Staff</h2>
      <Cohort team={staffCards}/>
      <h2>Students</h2>
      <Cohort team={studentCards} />
      </div>
    );
  }
}

export default App;
