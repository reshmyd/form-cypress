import './App.scss';
import {useState} from 'react'

const App = () => {
  
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [passwordMismatch, setPasswordMismatch] = useState(false)
  
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target[1].value !== e.target[2].value) setPasswordMismatch(true)
    else setHasSubmitted(true)
  }
  
  
  return (
    <div className="App">
      
      <div className="signUp-form">
        
        {!hasSubmitted ? (<form onSubmit={handleSubmit}>
          
          <div>
            <label htmfor="username">Username:</label>
            <input type="text" id="username" required />
          </div>
          
          <div>
            <label htmfor="password">Password:</label>
            <input type="password" id="password" minLength="8" required />
          </div>
          
          <div>
            <label htmfor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" minLength="8" required />
          </div>
          
          {passwordMismatch && <div>Passwords dont match. Retype your passwords.</div>}
          
          <button type="submit">Sign Up</button> 
        </form>) : <div>You have signed up successfully!</div>}

      </div>
      
    </div>
  );
}

export default App;
