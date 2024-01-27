import { useState } from 'react';
import './App.css'

export default function App() {

  const[email,setEmail] = useState('');
  
  let handleChange = (e) =>{
    setEmail(e.target.value)
  }

  return (
    <div className="App">
      <div className="logo-box">

      <img src="./x-twitter.svg" alt="twitter-logo" className='logo'/>
      <h2>Sign in to Twitter</h2>

      <button>
        <img src="./google.svg" alt="google-logo" className='google-logo'/>
        Sign in with Google
      </button>

      <button>
        <img src="./apple.svg" alt="apple-logo" className='apple-logo'/>
        Sign in with Apple
      </button>

      <hr />
      <span>or</span>

      <form>
        <input type="text" placeholder='Phone, email or username' value={email} onClick={handleChange} />
        <button>Next</button>
      </form>

      <button>Forget Password</button>
      <p>Don't have an account? <a>Sign up</a></p>
       
      </div>
    </div>
  );
}