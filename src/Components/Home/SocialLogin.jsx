import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiRefinedgithub } from 'react-icons/si';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5 text-2xl'>Login With</h2>
            <div className='space-y-3'>
                <button className='btn w-full text-base py-6 btn-outline'> <FcGoogle size={24} /> Login with Google</button>
                <button className='btn w-full text-base py-6 btn-outline'> <SiRefinedgithub size={24} /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;