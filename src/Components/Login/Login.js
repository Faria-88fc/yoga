import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import'./Login.css'
const Login = () => {
    const{emailPasswordSignIn,signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'
    const handleGoogleLogin = () =>{
      signInWithGoogle()
      .then (result =>{
        history.push(redirect_url);
        

    })
    
    }

    
    return (
        <div >
            <div className='d-flex justify-content-center align-items-center mt-5 pt-5'>
              <form>
                 <h3 className='my-3 text-gray fst-italic fw-bold'>Cosmic Bliss Yoga Studio</h3>
                 <input type="email" name="" className='form-control w-75' placeholder="your email" required id="" />
                 <br />
                 <input type="password" name="" id="" className='form-control w-75' required placeholder='password'/>
                 <br />
                 <input onClick={emailPasswordSignIn} type="button" className='form-control w-75 btn-danger' value="Sign In" />

                 <div className='my-3 text-gray fw-bold ps-5 fs-3 '>---- OR ----</div>
                <button onClick={handleGoogleLogin} className='ms-4'> SignIn with<img className='g-img' src="images/google.png" alt="" /> </button>

              <br />
              <p className='m-3 rounded p-2 bg-white w-50'>New here? <Link to ='/register'>SignUp</Link></p>
              </form>
              
            </div>
            
        </div>
    );
};

export default Login;