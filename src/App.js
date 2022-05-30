import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

import OrderReview from './components/OrderReview/OrderReview';
import ReviewPage from './components/ReviewsPage/ReviewPage';
import Error404 from './components/Error404/Error404';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviewPage' element={<ReviewPage></ReviewPage>}></Route>
        <Route path="*" element={<Error404></Error404>}>
       
          </Route>
      </Routes>
    
    </div>
  );
}

export default App;
