import './App.css';
import React, { useState } from 'react';
import Calc from './hooks/useCalculateMoneyAndGameChips/Calc';
import User from './hooks/useFetch/User';
import Dark from './hooks/useDarkMode/Dark';

function App() {
  
  
  return (
    <div className="App">
      {/* <Calc/> */}
      {/* <User /> */}
      <Dark />
    </div>
  );
}

export default App;