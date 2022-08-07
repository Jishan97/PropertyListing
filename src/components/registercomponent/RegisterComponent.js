import React, { useState } from "react";
import { connect } from "react-redux";
import { startRegisterUser } from "../../redux/actions/userAction";
import FormContainer from "../form-container/FormContainer";
import { Link } from "react-router-dom";
import "./RegisterComponent.css";

const RegisterComponent = (props) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)
  // const history = unstable_HistoryRouter();
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

      setErrorEmail(null);
    setErrorPassword(null);
      
      const formData = {
        id,
        email,
        password,
      };
      // const redirect = () => history.push(`/login`);
      const redirect = () => {
        setId("");
        setEmail("");
        setPassword("")
      }
      props.dispatch(startRegisterUser(formData, redirect));
    }
    };

  return (
    <FormContainer>
      <div className="input-section">
        <div>
          <div className="welcome-text">Welcome User!</div>
          <div className="welcome-text" style={{ color: "#5C727D" }}>
            Live the experience
          </div>
        </div>
        <div className="input-form">
          <div>
            <div>
              <label className="form-label">User ID</label>
            </div>
            <div>
              <input
                type="text"
                className="form-input"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
          </div>
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
              Already a member?{" "}
              <Link to="/login" className="login-link">
                Login{" "}
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </FormContainer>
  );
};

export default connect()(RegisterComponent);
