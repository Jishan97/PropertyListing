import React, { useState } from "react";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    
  }

  return (
    <div>
      <div>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button onClick={handleSubmit} >SUBMIT</button>
      </div>
      <div>
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  );
};

export default LoginComponent;
