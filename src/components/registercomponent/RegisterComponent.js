import React, { useState } from "react";
import { connect } from "react-redux";
import { startRegisterUser } from "../../redux/actions/userAction";
// import { unstable_HistoryRouter } from "react-router-dom";

const RegisterComponent = (props) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = unstable_HistoryRouter();

  const handleSubmit = () => {
    const formData = {
      id,
      email,
      password,
    };
    // const redirect = () => history.push(`/login`);
    const redirect = () => console.log("hi how are you?");
    props.dispatch(startRegisterUser(formData, redirect));
  };

  return (
    <div>
      <div>
        <div>
          <label>ID</label>
        </div>
        <div>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
      </div>
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
        <button onClick={handleSubmit}>SUBMIT</button>
      </div>
      <div>
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  );
};

export default connect()(RegisterComponent);
