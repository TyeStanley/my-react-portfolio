import React from 'react';

function Nav({ currentPage, handlePageChange }) {

  return (
    
    <nav>
      <ul className="nav nav-tabs flex-row">
        <li className="nav-item mx-2">
          <span
            onClick={() => handlePageChange('about')}
            className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </span>
        </li>
        <li className="nav-item mx-2">
          <span
            onClick={() => handlePageChange('portfolio')}
            className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </span>
        </li>
        <li className="nav-item mx-2">
          <span
            onClick={() => handlePageChange('contact')}
            className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </span>
        </li>
        <li className="nav-item mx-2">
          <span
            onClick={() => handlePageChange('resume')}
            className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;