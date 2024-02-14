import React from 'react'
import {useFormik, validateYupSchema} from 'formik'
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useState } from 'react'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required')
});



const Login = () => {
  const navigate = useNavigate();
  
  const loginform = useFormik({
    initialValues: {
      email : "",
      password : ""
    },
    onSubmit : async ( values ) => { 
      console.log(values) ;

      const res = await fetch('http://localhost:5000/user/authenticate',{
        method: 'POST',
        body: JSON.stringify(values),
        headers:{
          'Content-Type' : 'application/json'
        }
      });   

      console.log(res.status);
      
      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title :'Nice',
          text : 'Logged in Successfully'
        });
        navigate("/uploadimg")
        
        const data = await res.json();
        sessionStorage.setItem('user',JSON.stringify(data));

      }else if(res.status === 401){
        Swal.fire({
          icon : 'error',
          title :'Error',
          text : 'Email or Password is incorrect'
        })
      }else{
        Swal.fire({
          icon : 'error',
          title :'Error',
          text : 'Something went Wrong'
        })
      }


      // write code to submit form to server
    },
    validationSchema : LoginSchema
  });

  return (
    <div className='d-flex justify-content-center align-item-center p-5'>
        <div className='card border-2 border-primary' style={{width:"25rem"}}>
            <h3 className='d-flex justify-content-center mt-3'>LOGIN</h3>

            <div className=''>

                <form className='p-3' onSubmit={loginform.handleSubmit}>
                  <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{loginform.errors.email}</span>
                  <input className='form-control mb-3' type="email" name="email" onChange={loginform.handleChange} value={loginform.values.email} id="" placeholder='Enter Email' />
                  <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{loginform.errors.password}</span>
                  <input className='form-control mb-3' type="password" name="password" onChange={loginform.handleChange} value={loginform.values.password} id="" placeholder='Enter password' />

                <div className='d-flex justify-content-center'>
                <button className='btn btn-primary mb-3 text-white'>login</button>
                </div>
                </form>

            </div>

        </div>
      
    </div>
  )
}

export default Login
