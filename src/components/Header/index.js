import React from 'react';
import Nav from '../Nav';

function Header({ currentPage, handlePageChange }) {
  
  return (
    <header className="d-flex flex-row">
      <h1 className="col-3 ">
        <a 
        href="/"
        >
          Tye Stanley
        </a>
      </h1>
      <Nav
        currentPage={currentPage} 
        handlePageChange={handlePageChange}
      />
    </header>
  );
}

export default Header;