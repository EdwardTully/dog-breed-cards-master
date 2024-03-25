
import './App.css';

import {Routes, Route } from 'react-router-dom'
import UpCloser from './cards/UpCloser';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/upclose" element={<UpCloser />} />
        <Route path='/home' element={<Home/>}
        />
      </Routes>
    </div>
  );
}

export default App;
