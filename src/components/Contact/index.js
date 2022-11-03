import React, { useRef,useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './contact.css';
import emailjs from '@emailjs/browser';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const form = useRef();
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
  const sendEmail = () => {
    // e.preventDefault();

    emailjs.sendForm('service_58eeuha', 'template_eaoiirp', form.current, '7moyyXkvrDcFvYmwA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
    sendEmail();
    // If everything goes according to plan, we want to clear out the input.
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div className='contact-container'>
      {/* {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )} */}
      {/* <form className="form"> */}
      <div className='main-title'>
      <h2 className='contact-heading'>Contact Me</h2>
      <p className='text'>Please complete the form below to send me an email
</p>
      </div>
      {/* <div className='input-container'> */}
      <form ref={form} className="form">
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
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
          type="text"
          placeholder="Email"
        />
        <textarea className='form_control'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
       <button className='submit' type="button" onClick={handleFormSubmit}>Send<span><FontAwesomeIcon icon={faPaperPlane}/></span></button>
      {/* </div> */}
      </form>   
    </div> 
  );
}
export default ContactForm;
