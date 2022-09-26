import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './contact.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name,email and password
    if (inputType === 'username') {
      setName(inputValue);
    } 
    if (inputType === 'email') {
      setEmail(inputValue);
    } 
    if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!username || !validateEmail(email) || !message) {
      setErrorMessage('Name, Email or Message is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    } else {
      setErrorMessage('Message sent!');
    }
    // alert(`Hello ${username}${email}${message}`);

    // If everything goes according to plan, we want to clear out the input.
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div className='contact-container'>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <form className="form">
      <h2 className='contact-heading'>Contact Form</h2>
      <div className='input-container'>
       <input className='form-control'
          value={username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input className='form-control'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <textarea className='text-area'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
       <button className='submit' type="button" onClick={handleFormSubmit}>Send <FontAwesomeIcon icon={faPaperPlane}/></button>
      </div>
      </form>
      
    </div> 
  );
}
export default ContactForm;
