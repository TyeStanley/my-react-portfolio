import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  
  return (
    <footer>
      <h5>
        Free coffee is always welcomed!&nbsp;
        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
      </h5>
      
      <div className="mb-4">
        <a href="https://www.linkedin.com/in/tye-stanley/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="m-1 fa-2xl"></FontAwesomeIcon>
        </a>
        <a href="https://github.com/TyeStanley" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="m-1 fa-2xl"></FontAwesomeIcon>
        </a>
        <a href="https://stackoverflow.com/users/17858669/tye-stanley" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faStackOverflow} className="m-1 fa-2xl"></FontAwesomeIcon>
        </a>
      </div>
    </footer>
  );
}