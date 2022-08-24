import React, { useState } from "react";
import { useFormik, Formik } from "formik";

import { connect } from "react-redux";
import { startRegisterUser } from "../../redux/actions/userAction";
import FormContainer from "../form-container/FormContainer";
import { Link } from "react-router-dom";
import "./RegisterComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;









const RegisterComponent = (props) => {

  const [passwordShown, setPasswordShown] = useState(false);

  // // const history = unstable_HistoryRouter();

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };


  return (

    <Formik
      initialValues={{
        name: "",
        email: "",
        password:""
      }}
      validate={values => {

        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        if (!values.email) {
          errors.email = "Required";
        }

        if (!values.password) {
          errors.password = "Required";
        }
        
        else if(values.password.length  < 6) {
          errors.password = "Length should be greater than 6"

        }
        else if( values.password != values.cpassword){
          errors.password = "Password not matched"
        }


      

        return errors;
      }}

      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values))
        console.log(JSON.stringify(values));
        // values = {"favoriteFood":"ramen","fa
        setSubmitting(false);
        //     // const redirect = () => {
        //     //   setId("");
        //     //   setEmail("");
        //     //   setPassword("")
        //     // }
        //     // props.dispatch(startRegisterUser(formData, redirect));

      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (

        <form onSubmit={handleSubmit}>
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
                    <label className="form-label">Name {touched.name && errors.name
                      ? <p style={{color:'red', margin:0}}>{errors.name}</p>
                      : null}</label> 
                  </div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      onChange={handleChange}
                      onBlur={handleBlur}

                    />
                    
                  </div>
                </div>
                <div>
                  <div>
                    <label className="form-label">Email   {touched.email && errors.email
                      ? <p style={{color:'red', margin:0}}>{errors.email}</p>
                      : null}</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="email"
                      className="form-input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  
                  </div>
                </div>
                <div>
                  <div>
                    <label className="form-label">Password   {touched.password && errors.password
                      ? <p style={{color:'red', margin:0}}>{errors.password}</p>
                      : null}</label>
                  </div>
                  <div>
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      className="form-input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                    
                  

                  </div>
                </div>

              
                <div>
                  <div>
                    <label className="form-label">Confirm Password  
                
                      </label>
                  </div>
                  <div>
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="cpassword"
                      className="form-input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                 
                    
                  

                  </div>
                </div>





                <div style={{ textAlign: "center" }}>
                  <button className="submit-btn" type="submit" disabled={isSubmitting}>
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
        </form>

      )}

    </Formik>


  );
};

export default connect()(RegisterComponent);
