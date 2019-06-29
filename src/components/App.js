import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cohort from './Cohort';
import Form from './Form';
import people from '../data/yearbook-data.js';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students,
      isHidden: true
    }
  }

  addStudent = (newStudent) => {
    this.setState({ students: [...this.state.students, newStudent] })
  }

  toggleForm = () => {
    this.setState({ isHidden: !this.state.isHidden})
  }
  
  render() {
    const Staff = () => (
      <div>
        <h2>Staff</h2>
        <Cohort data={this.state.staff} />
      </div>
    );
    
   const Students = () => (
      <div>
        <h2>Students</h2>
        <Cohort data={this.state.students} />
      </div>
    );
 
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
      <div>
      <button className='form-toggleBtn' onClick={this.toggleForm}>{this.state.isHidden ? 'Add New Student' : 'Collapse'}</button>
      {!this.state.isHidden && <Form addStudent={this.addStudent} />}
      </div>
      <Router>
        <Link to="/staff" className="togglePerson"><span className='staff-vew'>Staff</span></Link> | 
        <Link to="/students"><span className='student-view'>Students</span></Link>
        <Route path="/staff" component={Staff} />
        <Route path="/students" component={Students} />
      </Router>
      </div>
    );
  }
}

export default App;
