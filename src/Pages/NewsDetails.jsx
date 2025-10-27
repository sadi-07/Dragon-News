import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/Home/RightAside';
import { format } from 'date-fns';
import logo from "../assets/logo.png"
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from './NewsDetailsCard';


const NewsDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState([]);

    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails);
    }, [data, id])


    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex justify-center items-center flex-col py-4 gap-2'>
                <img src={logo} alt="" />
                <p className='font-semibold text-gray-600 text-xl py-2'>Journalism Without Fear or Favour</p>
                <p className='font-semibold text-gray-500 text-lg'>
                    {format(new Date(), "EEEE, MMMM dd, yyyy")}
                </p>
            </div>
            <main className='grid grid-cols-12 gap-8 py-5'>
                <aside className='col-span-9'>
                    <h2 className='font-bold mb-5 text-2xl text-gray-500'>News Details</h2>
                    <NewsDetailsCard news ={news}></NewsDetailsCard>
                </aside>

                <aside className='col-span-3 h-fit top-5 sticky'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;