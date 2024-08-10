import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import FoodMenu from './components/FoodMenu';
import ExploreFoods from './components/ExploreFoods'; // Correct import name
import Footer from './components/Footer';
import './App.css'; // Assuming you have some global styles here

function App() {
  return (
    <div className='App'>
      <Navbar />
      <SearchBar />
      <ExploreFoods /> {/* Correct component name */}
      <FoodMenu />
      <Footer />
    </div>
  );
}

export default App;
