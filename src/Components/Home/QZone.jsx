import React from 'react';
import swimIMG from "../../assets/swimming.png"
import classIMG from "../../assets/class.png"
import playIMG from "../../assets/playground.png"

const QZone = () => {
    return (
        <div className='bg-base-300 rounded-lg py-5 px-3'>
            <h2 className='font-bold text-2xl pb-5'>Q-Zone</h2>
            <img src={swimIMG} alt="" />
            <img src={classIMG} alt="" />
            <img src={playIMG} alt="" />

        </div>
    );
};

export default QZone;