import React from 'react'
import useCalculate from './useCalculate';
const Calc = () => {
    const { inputMoney, gameChips, calculateMoney, handleBlur } = useCalculate({ input1: 0 });
  
    return (
      <div className="App">
        <h1 className='h1'>Перевод с долларов в игровые фишки</h1>
              <input
                  type="text"
                  name="input1"
                  value={inputMoney.input1}
                  onChange={calculateMoney}
                   className='money'
                   onBlur={handleBlur}
              />
              <input
                  type="number"
                  name="input2"
                  value={gameChips}
                  readOnly 
                  className='gameChips'
              />
          </div>
    );
}

export default Calc