import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SingUP = () => {
    const [name, setName] = useState("");
const [email, setEmali] = useState("");
const [password, setPassword] = useState("");
const [passwordr, setPasswordr] = useState("");
const [accept, setArccept] = useState(false);
  return (
    <div>
        <div className="signhhhh">
        <div className="container">
    <form  className="saignup">
        <h1>Sing Up</h1>
        <label htmlFor="name">Name:</label>
        <input
        type="text"
        placeholder="Name....."
        id="name"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        {name === "" && accept === true && <p>Username is Recuired</p>}

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

        <label htmlFor="repeat">Repeat-password:</label>
        <input
        type="password"
        placeholder="Repeat-password....."
        id="repeat"
        className="form-control"
        value={passwordr}
        onChange={(e) => setPasswordr(e.target.value)}
        />
        {passwordr !== password && accept === true && (
        <p>password does not Match</p>
        )}

        <Link to={"/Login"} className="btns mt-3">Done</Link>
        <Link to={"/"} className="btns mt-3">Cancel</Link>
        

    </form>
    
    </div>
    </div>
    </div>
  )
}

export default SingUP