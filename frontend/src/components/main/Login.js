import React from 'react';
import app_config from '../../config';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { enqueueSnackbar } from 'notistack';

const Login = () => {
  const url = app_config.apiUrl;
  const navigate = useNavigate();

  const loginform = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch(`${url}/user/auth`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      if (res.status === 200) {
        const data = await res.json();
        enqueueSnackbar('Login Successful', { variant: 'success', autoHideDuration: 2000, anchorOrigin: { vertical: 'top', horizontal: 'right' } });

        if (data.role === 'admin') {
          sessionStorage.setItem('admin', JSON.stringify(data));
          navigate('/admin/dashboard');
        } else {
          sessionStorage.setItem('user', JSON.stringify(data));
          navigate('/user/profile');
        }
      } else if (res.status === 401) {
        enqueueSnackbar('Invalid Credentials', { variant: 'error', autoHideDuration: 2000, anchorOrigin: { vertical: 'top', horizontal: 'right' } });
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error', autoHideDuration: 2000, anchorOrigin: { vertical: 'top', horizontal: 'right' } });
      }
    }
  });

  return (
    <div className="loginMain">
      <section className=" gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card  logincard" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">
                  <form onSubmit={loginform.handleSubmit}>
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="ts-50 mb-5">Please enter your login and password!</p>
                      <div className="   form-white mb-4 ">
                        <label className="form-label" htmlFor="typeEmailX">
                          Email
                        </label>
                        <input type="email" id="email" onChange={loginform.handleChange} value={loginform.values.email} className="form-control form-control-lg" />
                      </div>
                      <div className="   form-white mb-4">
                        <label className="form-label" htmlFor="typePasswordX">
                          Password
                        </label>
                        <input type="password" id="password" onChange={loginform.handleChange} value={loginform.values.password} className="form-control form-control-lg" />
                      </div>
                      <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p>
                      <button className="btn btn-outline-light btn-lg px-5 sbutton" type="submit">
                        Login
                      </button>
                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f fa-lg" />
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-twitter fa-lg mx-4 px-2" />
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-google fa-lg" />
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="mb-0">
                        Don't have an account?{' '}
                        <a href="/main/signup" className="text-white-50 fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
