import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import'./Header.css';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user,logout} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light header ">
                <div className='d-flex'>
                    <div className="container-fluid">
                       <p className="navbar-brand fs-2 fw-bold fst-italic text-danger" > Cosmic Bliss
                       </p>
                    </div>
                    <button className='navbar-toggler' data-toggle='collapse' data-target='#mynavabr'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                <div className='collapse navbar-collapse' id='mynavabr'>
                    <ul className="navbar-nav d-flex flex-row ms-5 ps-5 align-items-evenly ">
                       <li className="nav-item p-3 ">
                       <Link className="nav-link active text-gray fw-bold fs-5" aria-current="page" to ="/home">Home</Link>
                       </li>
                       <li className="nav-item p-3">
                       <Link as={HashLink} className="nav-link text-gray fw-bold fs-5" to="/home#services">Services</Link>
                       </li>
                       <li className="nav-item p-3">
                       <Link className="nav-link text-gray fw-bold fs-5" to="/Session">Sessions&Pricing</Link>
                       </li>
                       <li className="nav-item p-3">
                       <Link className="nav-link text-gray fw-bold fs-5" to="/Blogs">Blogs</Link>
                       </li>
                       <p className='mt-4  text-warning fw-bold fs-5  text-nowrap'>{user.displayName}</p>
                        
                        {user?.email? 
                        <li className="nav-item p-3">
                           <Link onClick={logout} className='nav-link text-gray fw-normal fw-bold fs-5 border-0'>SignOut</Link>
                        </li> :
                        <li className="nav-item p-3">
                            <Link className="nav-link text-gray fw-normal fs-5" to="/LogIn">SignIn</Link>
                        </li>
                       }
                       
                    </ul>
                </div>
            </div>
        </nav>
        
        </div>

        
    );
};

export default Header;