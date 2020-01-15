import React from 'react';

// import Navigation from './components/Navigation';
import DisplayWeather from './components/DisplayWeather';
import Search from './components/Search';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Search />
      <DisplayWeather />
      <Footer />
    </div>
  );
}

export default App;
