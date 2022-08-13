import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    }
    if (e.target.name === 'name' || 'message') {
      if (!e.target.value) {
        setErrorMessage(`Your ${e.target.name} is required.`)
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section id="contactId" className="d-flex flex-column">
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="form-control" type="text" defaultValue={name} name="name" onBlur={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input className="form-control" type="email" defaultValue={email} name="email" onBlur={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}