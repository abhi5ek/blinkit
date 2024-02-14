import React from 'react'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { NavLink, useNavigate } from 'react-router-dom';

const UploadImg = () => {

  const navigate = useNavigate();
     
    const imageForm = useFormik({
        initialValues: {
          image : "",
        },
        onSubmit : async ( values ) => {
    
          console.log(values);
    
          const res = await fetch('http://localhost:5000/image/addimage', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type' : 'application/json'
            }
          });
    
          console.log(res.status);
    
          if(res.status === 200){
            Swal.fire({
              icon : 'success',
              title : 'WellDone!',
              text : 'Uploaded Successfully 😎'
            })
            navigate('/home');
          }else{
            Swal.fire({
              icon : 'error',
              title : 'Oops!',
              text : 'Something went wrong'
            })
          }
    
        }
      });
    

  return (
    <div className='d-flex justify-content-center align-item-center p-5'>

        <div className='card border-2 border-primary ' style={{width:'25rem'}}>

            <h2 className='mt-3 d-flex justify-content-center align-item-center'>Upload Image</h2>

            <div className='p-3'>
            <form className='form-control mt-3' onSubmit={imageForm.handleSubmit}>
                <input className='' type="file" placeholder='Upload image' name='image' onChange={imageForm.handleChange} value={imageForm.values.image} />
                <div className='d-flex justify-content-center align-item-center'>
                <button type='submit' className='btn btn-primary'>Upload</button>
                </div>
            </form>

            </div>


        </div>
      
    </div>
  )
}

export default UploadImg
