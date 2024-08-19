import React, { useState } from 'react'

const useFetch = (Email) => {
const[userEmail, setUserEmail] = useState(Email);
const [data, setData] = useState(null);

const inputEmail = (e) => {
   setUserEmail(e.target.value);
}

const user = async() => {
    try{
    await fetch('https://jsonplaceholder.typicode.com/users', {
        method: "GET"
    })
    .then((res) => res.json())
    .then((data) => {
        let res = data.find((user) => user.email === userEmail);
        if(res) {
            setData(res);
        }else {
            setData(null); 
        }
    })    
    } catch (er) { 
        console.error(er);
        setData(null); 
      }
    
}
  return {userEmail,data, user, inputEmail}
}
export default useFetch