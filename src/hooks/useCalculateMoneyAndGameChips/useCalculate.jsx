import React, { useEffect, useState } from 'react'

const useCalculate = (inputValue) => {
    const [inputMoney, setInputMoney] = useState(inputValue);
    const [gameChips, setGameChips] = useState(0);

    const calculateMoney = (e) => {
        const { name, value } = e.target;

        if (isNaN(value) || value.trim() === '') {
            setInputMoney(prev => ({
                ...prev,
                [name]: ''
            }));
            setGameChips(0); 
            return;
        }

        const numericValue = Number(value);

        setInputMoney(prev => ({
            ...prev,
            [name]: numericValue
        }));
        
        const calc = numericValue * 10;
        setGameChips(calc);
    };

// ```````````````````````````````````````````````````````````````````//1
    const handleBlur = (e) => {                                       //1    
        const { name, value } = e.target;                             //1
        const noLeadingZeros = value.replace(/^0+/, '') || '0';       //1
        setInputMoney(prev => ({                                      //1
            ...prev,                                                  //1
            [name]: Number(noLeadingZeros)                            //1
        }));                                                          //1
    };                                                                //1
// ```````````````````````````````````````````````````````````````````//1


    return { inputMoney, gameChips, calculateMoney, handleBlur };
}

export default useCalculate