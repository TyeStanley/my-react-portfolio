import React from 'react';

function Nav({ currentPage, handlePageChange }) {

  return (
    
    <nav className="col-9">
      <ul className="nav">
        <li className="nav-item mx-2">
          <span
            onClick={() => handlePageChange('about')}
            className={currentPage === 'about' ? 'navActive' : ''}
          >
            About Me
          </span>
        </li>
        <li className="nav-item mx-2">
          <span
            onClick={() => handlePageChange('portfolio')}
            className={currentPage === 'portfolio' ? 'navActive' : ''}
          >
            Portfolio
          </span>
        </li>
        <li className="nav-item mx-2">
          <span
            onClick={() => handlePageChange('contact')}
            className={currentPage === 'contact' ? 'navActive' : ''}
          >
            Contact
          </span>
        </li>
        <li className="nav-item mx-2">
          <span
            onClick={() => handlePageChange('resume')}
            className={currentPage === 'resume' ? 'navActive' : ''}
          >
            Resume
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;