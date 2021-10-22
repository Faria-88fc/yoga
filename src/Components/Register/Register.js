import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const{ handleEmailRegistration, signInWithGoogle,emailHandle,passwordHandle,error} = useAuth();
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center mt-5 pt-5'>
              <form onSubmit={handleEmailRegistration}>
                 <h3 className='my-3 text-primary fst-italic fw-bold'>Cosmic Bliss Yoga Studio</h3>
                 <input type="text" name="" className='form-control w-75 ' placeholder="username" required id=""  />
                 <br />
                 <input onBlur={emailHandle} type="email" name="" className='form-control w-75'  placeholder="your email" required id="" />
                 <br />
                 <div className='text-warning'>{error}</div>
                 <input onBlur={passwordHandle} type="password" name="" id="" className='form-control w-75' required placeholder='password'/>
                 <br />
                 <input onClick={handleEmailRegistration} type="button" className='form-control w-75 btn-primary' value="Sign Up" />

                <div className='my-3 text-gray fw-bold ps-5 fs-3 '>---- OR ----</div>
                <button onClick={signInWithGoogle} className='ms-4'> SignIn with<img className='g-img' src="images/google.png" alt="" /> </button>

              <br />
              <p className='m-3 rounded p-2 bg-white w-75'>Already Member? <Link to ='/login'>SignIn</Link></p>
              </form>
              
            </div>

            
        </div>
    );
};

export default Register;