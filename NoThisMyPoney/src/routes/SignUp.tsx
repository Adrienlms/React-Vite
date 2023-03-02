import React, { useState } from 'react';
import { signInUser, firestore, auth } from '../firebase/firebase'
import firebase from 'firebase/app';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import fav from "../assets/fav.png";
import { Link} from "react-router-dom";


const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()


  const handleSignUp = () => {
    fetchSignInMethodsForEmail(auth, email)
      .then((signInMethods) => {
        if (signInMethods.length > 0) {
          alert("This email is already in use");
        } else {
          if (password !== confirmPassword) {
            alert("Passwords don't match");
          } else {
            alert("Passwords match");
            createUserWithEmailAndPassword(auth, email, password)
              .then((res) => {
                console.log(res.user);
                navigate('/signin');
              })
              .catch((err) => console.log(err.message));
          }
        }
      })
      .catch((err) => console.log(err.message));
  };





  return(
    <section className="bg-white-600 ">
      <div className="flex flex-col items-center justify-center px-6  pt-0 mx-auto md:h-screen lg:py-0">
      <div className="flex justify-center">
                <Link to="/"><img className="w-100 h-20" src={fav} alt="logo"/></Link>
              </div>
          <div className=" degrade w-full  rounded-lg shadow2 md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                      Sign up a account
                  </h1>
                  <form onSubmit={(event) => { event.preventDefault(); handleSignUp(); }}>
                      <div>
                          <label htmlFor="email" className="block mb-1 text-sm font-medium text-white dark:text-white">Your email</label>
                          <input  type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-1 mt-5 text-sm font-medium text-white dark:text-white">Password</label>
                          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-1 mt-5 text-sm font-medium text-white dark:text-white">Confirm Password</label>
                          <input type="password" id="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                      </div>
                      
                      <button type="submit" className="w-full mt-5 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                      
                  </form>
              </div>
          </div>
      </div>
    </section>
    )




}

export default SignUpPage;
