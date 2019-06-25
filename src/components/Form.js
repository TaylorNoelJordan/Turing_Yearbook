import React from 'react';
import './Form.css'

const Form = () => {
    return (
        <div className='form-container'>
            <form>
                <label for='name'>Name</label>
                <input type='text' placeholder='Enter Student Name' id='name'/>
                <label for='quote'>Quote</label>
                <input type='text' placeholder='Enter Student Quote' id='quote'/>
                <label for='superlative'>Superlative</label>
                <input type='text'  placeholder='Enter Student Superlative' id='superlative'/>
                <label for='photo'>Photo</label>
                <input type='text' placeholder='Enter Photo URL' id='photo'/>
                <input type='submit' id='submit-btn'/>
            </form>
        </div>
    )
}

export default Form;