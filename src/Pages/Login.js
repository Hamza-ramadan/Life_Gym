import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmali] = useState("");
const [password, setPassword] = useState("");
const [accept, setArccept] = useState(false);



  return (
    <div>
        <div className='signhhhh'>
        <div className=" container">
    <form  className="saignup">
    <h1>Login</h1>
        

        <label htmlFor="email">Emali:</label>
        <input
        type="email"
        placeholder="Emali....."
        id="email"
        className="form-control"
        value={email}
        required
        onChange={(e) => setEmali(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
        type="password"
        placeholder="Password....."
        id="password"
        className="form-control"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        />
        {password.length < 8 && accept === true && (
        <p>Password must be more 8 Char</p>
        )}

        

        <Link className="btns mt-3">Login</Link>
        <Link to={"/SingUP"} className="btns mt-3">Sign Up</Link>
        

    </form>

    </div>
    </div>
    </div>
  )
}

export default Login