import React from 'react';
import { WiDirectionLeft } from "react-icons/wi";
import { Link } from 'react-router';


const NewsDetailsCard = ({ news }) => {

    return (
        <div className='border py-7 border-gray-300'>
            <div className='px-8'>
                <img className='rounded-xl w-full' src={news.image_url} alt="" />
                <h2 className='font-bold text-3xl leading-12 mt-7 mb-4'>{news.title}</h2>
                <p className='font-semibold text-gray-500 text-lg mb-5'>{news.details}</p>
                <Link to={`/category/${news.category_id}`} className='flex gap-2 items-center font-semibold text-lg bg-red-600 text-white cursor-pointer w-fit btn'><WiDirectionLeft size={38} /> All news in this category</Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;