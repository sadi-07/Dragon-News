import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold text-2xl mb-5'>Find Us</h2>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn join-item bg-white py-6 text-base hover:bg-base-300 justify-start"> <FaFacebook
                    /> Facebook</button>
                    <button className="btn join-item bg-white py-6 text-base hover:bg-base-300 justify-start"> <FaTwitter/> Twitter</button>
                    <button className="btn join-item bg-white py-6 text-base hover:bg-base-300 justify-start"> <FaInstagram/> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;