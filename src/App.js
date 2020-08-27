import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import OnlineCourse from './components/OnlineCourse/OnlineCourse';

function App() {
  return (
    <div >
      
      <Header></Header>
      <OnlineCourse></OnlineCourse>
      <Footer></Footer>
    </div>
  );
}

export default App;
