import React from 'react';

function Nav({ currentPage, handlePageChange }) {

  return (
    
    <nav>
      <ul className="nav nav-tabs flex-row">
        <li className="nav-item mx-2">
          <span
            onClick={handlePageChange('about')}
            className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </span>
        </li>
        <li className="nav-item mx-2">
          <span
            onClick={handlePageChange('portfolio')}
            className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </span>
        </li>
        <li className="mx-2">Contact</li>
        <li className="mx-2">Resume</li>
      </ul>
    </nav>
  )
}

export default Nav;