import React from 'react'
import axios from 'axios'

const Login = () => {

    const handleClick = async() => {
      console.log('in handle cluek');
      const response = await axios.get('http://localhost:3000/login');
      return response.json();
    };

  return (
    <div className="App">
        <p>Click here to login</p>
        <button onClick={handleClick}>Continue with TikTok</button>
    </div>
    
  )
} 

export default Login