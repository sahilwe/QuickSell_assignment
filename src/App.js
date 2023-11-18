// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Display_dropdown from './components/Display_dropdown/Display_dropdown';
import StatePage from './Pages/StatePage/StatePage';
import User from './Pages/User/User';
import PriorityPage from './Pages/PriorityPage/PriorityPage';
import Home from './components/Home/Home';
import ApiData from './components/Data/ApiData';

const App = () => {
  return (
    <Router>
      <div>
        {/* <Display_dropdown /> */}
        <Routes>
          <Route path="/by-state" element={<StatePage/>} />
          <Route path="/by-user" element={<User/>} />
          <Route path="/by-priority" element={<PriorityPage/>} />
          <Route path='/' element ={<ApiData/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;






