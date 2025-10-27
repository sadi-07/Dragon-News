import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {logIn} = use(AuthContext);

    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({email, password});

        logIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className=''>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <h2 className='text-center font-bold text-2xl border-b-2 border-base-300 py-5'>Login your account</h2>
            <form onSubmit={handleLogIn} className="card-body">
                <fieldset className="fieldset">
                    <label className="label font-semibold text-lg">Email</label>
                    <input type="email" className="input bg-base-300" placeholder="Email" name='email'/>

                    <label className="label font-semibold text-lg">Password</label>
                    <input type="password" className="input bg-base-300" placeholder="Password" name='password'/>

                    <div><a className="link link-hover font-semibold text-base">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4 ">Login</button>
                    <p className='font-semibold text-center text-base mt-2 text-gray-500'>Don't Have an Account? <Link to="/auth/register" className='text-red-500 text-lg'>Register</Link></p>
                </fieldset>
            </form>
        </div>
        </div>
    );
};

export default Login;