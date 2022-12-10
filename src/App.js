import { useRef } from 'react';
import './App.css';
function App() {
  const userNameRef = useRef()
  const passwordRef = useRef()
  const emailRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    userNameRef.current.value = '';
    passwordRef.current.value = '';
    emailRef.current.value = '';

    const alertMsg = `
    Your username : ${username}
    Your password : ${password}
    Your Email : ${email}
  `

  alert(alertMsg);
  }
  return (
    <div className="App">
        <h1>Welcome! Login here</h1>
        <form onSubmit={handleSubmit}>
            <div className='input-One'>
                <label htmlFor="username">User Name:</label>
                <input ref={userNameRef} type="text" id='username' placeholder='Enter your name' />
            </div>
            <br />
            <div className='input-Two'>
                <label htmlFor="email">Email:</label>
                <input ref={emailRef} type="text" id='email' placeholder='Enter your Email' />
            </div>
            <br />
            <div className='input-Three'>
                <label htmlFor="password">Password:</label>
                <input ref={passwordRef} type="text" id='password' placeholder='Enter your password' />
            </div>
            <br />
            <button type='submit'>Login</button>
        </form>
    </div>
  );
}

export default App;
