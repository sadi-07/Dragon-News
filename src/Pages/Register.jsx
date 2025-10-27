import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser, setUser} = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({name, photo, email, password});

        createUser(email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='pb-15'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <h2 className='text-center font-bold text-2xl border-b-2 border-base-300 py-5'>Register your account</h2>
            <form onSubmit={handleRegister} className="card-body">
                <fieldset className="fieldset">


                    <label className="label font-semibold text-lg">Name</label>
                    <input type="text" name='name' className="input bg-base-300" placeholder="Your Name" required />

                    <label className="label font-semibold text-lg">Photo</label>
                    <input type="text" name='photo' className="input bg-base-300" placeholder="Photo URL" required />

                    <label className="label font-semibold text-lg">Email</label>
                    <input type="email" name='email' className="input bg-base-300" placeholder="Email" required />

                    <label className="label font-semibold text-lg">Password</label>
                    <input type="password" name='password' className="input bg-base-300" placeholder="Password" required />

                    <button type='submit' className="btn btn-neutral mt-4 ">Register</button>

                    <p className='font-semibold text-center text-base mt-2 text-gray-500'>Already Have an Account? <Link to="/auth/login" className='text-red-500 text-lg'>Login</Link></p>
                </fieldset>
            </form>
        </div>
        </div>
    );
};

export default Register;