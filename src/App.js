import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// Pages
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';


function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {

    switch(currentPage) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />
      case 'contact':
        return <Contact />
      case 'resume':
        return <Resume />
      default: 
        return <About />
    }
  }

  return (
    <div className="App">
      <Header
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;