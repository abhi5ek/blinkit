import React,{useState} from 'react'
import {useFormik, validateYupSchema} from 'formik'
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const SignupSchema = Yup.object().shape({
    name: Yup.string().min(3,'Min 3 character required').required('Name is Required'),
    email: Yup.string().required('Email is Required'),
    password: Yup.string().min(4,'too short').required('Password is Required')
  });

const Signup = () => {
  const navigate = useNavigate();
  
  const signupForm = useFormik({

    initialValues: {
      name: "",
      email: "",
      password: ""
    },

    onSubmit : async (values,{setSubmitting }) => {
      console.log(values);
      setSubmitting(true);
      
      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      console.log(res.status);
      setSubmitting(false);
  
      if(res.status===200){
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Registered Successfully!!',
        })
        navigate("/login");
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    },
    validationSchema : SignupSchema,
  });

  return (
  <div className='d-flex justify-content-center align-item-center p-5'> 
  <div className='card border-2 border-warning' style={{width:"25rem"}}>
    <h2 className='d-flex justify-content-center mt-3'>SIGNUP</h2>

    <div className=''>
    <form className='p-3' action="" onSubmit={signupForm.handleSubmit}>
        <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{signupForm.errors.name}</span>
        <input className='form-control mb-3' type="name" name='name' onChange={signupForm.handleChange} value={signupForm.values.name} id="" placeholder='Enter Name' />
        <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{signupForm.errors.email}</span>
        <input className='form-control mb-3' type="email" name="email"  onChange={signupForm.handleChange} value={signupForm.values.email} id="" placeholder='Enter Email' />
        <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{signupForm.errors.password}</span>
        <input className='form-control mb-3' type="password" name='password' onChange={signupForm.handleChange} value={signupForm.values.password} id="" placeholder='Enter Password' />
        
        <div className='d-flex justify-content-center align-item-center '>
        <button disabled={signupForm.isSubmitting} className='btn btn-warning mb-3 text-white'>Signup</button>
        </div>
    </form> 

    </div>

 
  </div>

  </div>

  )
}

export default Signup
