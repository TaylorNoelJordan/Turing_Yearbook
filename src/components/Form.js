import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {name: '', quote: '', superlative: '', photo: ''}
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addNewStudent = (e) => {
        e.preventDefault();
        const newStudent = {...this.state, id: Date.now()} 

        this.props.addStudent(newStudent)
        this.resetInputs();
    }

    resetInputs = () => {
        this.setState({ name: '', quote: '', superlative: '', photo: ''})
    }

    render() {
        return (
            <section className='form-container'>
             <h2 className='form-title'>Add New Student</h2>
                <form>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text' 
                        placeholder='Enter Student Name' 
                        name='name' 
                        value={this.state.name} 
                        onChange={e => this.handleChange(e)}
                    />
                    <label htmlFor='quote'>Quote</label>
                    <input 
                        type='text' 
                        placeholder='Enter Student Quote' 
                        name='quote' 
                        value={this.state.quote} 
                        onChange={e => this.handleChange(e)}
                    />
                    <label htmlFor='superlative'>Superlative</label>
                    <input 
                        type='text'  
                        placeholder='Enter Student Superlative' 
                        name='superlative' 
                        value={this.state.superlative} 
                        onChange={e => this.handleChange(e)} 
                    />
                    <label htmlFor='photo'>Photo</label>
                    <input 
                        type='text' 
                        placeholder='Enter Photo URL' 
                        name='photo' 
                        value={this.state.photo} 
                        onChange={e => this.handleChange(e)} 
                    />
                    <button className='submitBtn' onClick={e => this.addNewStudent(e)}>Submit</button>
                </form>
            </section>
        )
    }
}

export default Form;