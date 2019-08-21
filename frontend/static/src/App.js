import React from 'react';
import RecipeForm from './components/RecipeForm';
import Aside from './components/Aside';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <div className="row">
        <Aside className="col-md-2"/>
        <main className="col-md-10"><RecipeForm /></main>
      </div>
    </div>
  );
}

export default App;
