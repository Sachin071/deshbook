import React from 'react'
import {auth, provider} from '../../Firebase';
import { signInWithPopup} from "firebase/auth";
import { UseStateValue } from '../../hooks/StateProvider';
import { actionTypes } from '../reducer';


const Login = () => {
    const[state,dispatch] = UseStateValue();

    const signIn = ()=>{
        // Google sign in
        signInWithPopup(auth,provider)
        .then((result)=>{
            dispatch({
                type: actionTypes.SET_USER,
                user : result.user
            })
            console.log("resss",result);
        }).catch(
            (error)=>{console.log(error);}
        )
    }

  return (
    <div className="fb__login">
        <div className="fb__login-logo">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" alt="logosss" />
            {/* <img src={logo} alt="logosss" /> */}
            <h3>facebook</h3>
        </div>
        <button type='submit'
            onClick={signIn}
        >
            Sign In
        </button>
    </div>
  )
}

export default Login