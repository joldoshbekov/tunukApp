import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {NavBar} from './components/NavBar';
import {Dashboard} from './screens/Dashboard';
import {Detail} from './screens/Detail';
import {Checkout} from './screens/Checkout';

function App() {
  return <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </div>
    </Router>
}

export default App;