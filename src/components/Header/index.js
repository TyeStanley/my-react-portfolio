import React from 'react';
import Nav from '../Nav';

function Header({ currentPage, handlePageChange }) {
  
  return (
    <header className="flex-row px-1">
      <h1>
        <a href="/">Tye Stanley</a>
      </h1>
      <Nav
        currentPage={currentPage} 
        handlePageChange={handlePageChange}
      />
    </header>
  );
}

export default Header;