import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// Pages
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';


function App() {
  // You can use this space for other things
  const [currentPage, setCurrentPage] = useState('about');

  useEffect(() => {

      let renderPage = (currentPage) => {

          switch(currentPage){
              case 'about':
                  return <About/>
              case 'portfolio':
                  return <Portfolio/>
              default: 
               return <About/>
          }
      }


  },[currentPage])

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header
        currentPage={currentPage} 
        handlePageChange={handlePageChange}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;