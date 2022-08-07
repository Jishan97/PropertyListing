import React, { useState } from "react";
import FormContainer from "../form-container/FormContainer";
import "../registercomponent/RegisterComponent.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLoginUser } from "../../redux/actions/userAction";

const LoginComponent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubmit = () => {

    setErrorEmail(null);
    setErrorPassword(null);

    if (!isValidEmail(email)) {
      setErrorEmail("Invalid Email")
  }  
    
    if(password.length < 6){
      setErrorPassword("Invalid Password")
    }


    else {
   
      const formData = {
        email,
        password,
      };
  
      // const redirect = () => history.push(`/login`);
      const redirect = () => {
        setEmail("");
        setPassword("")
      }
      props.dispatch(startLoginUser(formData, redirect));
     
    }


 

  };

  return (
    <FormContainer>
      <div className="input-section">
        <div>
          <div className="welcome-text">Welcome Back!</div>
          <div className="welcome-text" style={{ color: "#5C727D" }}>
            Live the experience
          </div>
        </div>
        <div className="input-form">
          <div>
            <div>
              <label className="form-label">Email</label>
            </div>
            <div>
              <input
                type="text"
                value={email}
                className="form-input"
                onChange={(e) => setEmail(e.target.value)}
              />
              {
                errorEmail && (<p style={{color:'red'}}>{errorEmail}</p>)
              }
            </div>
          </div>
          <div>
            <div>
              <label className="form-label">Password</label>
            </div>
            <div>
              <input
                type="password"
                value={password}
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
              />
                {
                errorPassword && (<p style={{color:'red'}}>{errorPassword}</p>)
              }
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div>
            <div className="bottom-text">
            <Link to="/login" className="login-link">
                Forgot Password?{" "}
              </Link>{" "}
              <br/>
              Not Account Yet?{" "}
              <Link to="/register" className="login-link">
                Register{" "}
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </FormContainer>
  );
};

export default connect()(LoginComponent);
