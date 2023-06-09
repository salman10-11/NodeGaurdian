import { useFormik } from 'formik';
import React from 'react';
import Swal from "sweetalert2";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Name is Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required'),
});

const Signup = () => {

  const signupForm = useFormik({
    initialValues: {
        name : '',
        email : '',
        password : '',
    },

    onSubmit : async (values, {setSubmitting, resetForm}) => {
      setSubmitting(true);
        console.log(values);

        const res = await fetch('http://localhost:5000/user/add', {
          method: 'POST',
          body : JSON.stringify(values),
          headers: { 'Content-Type' : 'application/json' }
        });

        console.log(res.status);

        if(res.status === 200){
          Swal.fire({
            icon : "success",
            title : 'Success',
            text : 'User Registered Successfully'
          })
        }

        setSubmitting(false);
        
        resetForm();
    },
    validationSchema : SignupSchema
})

  return (
<section className="signupMain">
  <div className="container">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black signCard" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="  flex-fill mb-0">
                    <label className="form-label" htmlFor="typetext">
                      Your Name
                      </label>
                      <input
                        type="text"
                        id="form3Example1c"
                        className="form-control"
                      />
                      
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="  flex-fill mb-0">
                    <label className="form-label" htmlFor="typeEmail">
                      Your Email 
                      </label>
                      <input
                        type="email"
                        id="form3Example3c"
                        className="form-control"
                      />
                      
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="  flex-fill mb-0">
                    <label className="form-label" htmlFor="typePassword">
                      Password 
                      </label>
                      <input
                        type="password"
                        id="form3Example4c"
                        className="form-control"
                      />
                     
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="  flex-fill mb-0">
                    <label className="form-label" htmlFor="typePassword">
                       Repeat Your Password 
                      </label>
                      <input
                        type="password"
                        id="form3Example4cd"
                        className="form-control"
                      />
                      
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg sinbutton">
                      Register
                    </button>
                  </div>
                  <div>
                  <p className="mb-0">
                    Have an account?{" "}
                    <a href="/main/login" className="text-white-50 fw-bold">
                      Login
                    </a>
                  </p>
                </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  
  )
}

export default Signup