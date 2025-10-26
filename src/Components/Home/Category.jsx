import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Category = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h2 className='font-bold text-2xl mb-5'>All Categories</h2>

            <div className='list grid grid-cols-1 gap-3 font-semibold'>
                {
                    categories.map(category => (
                        <NavLink 
                        key={category.id} 
                        className={"btn bg-base-200 hover:bg-base-300 border-none py-6 text-lg text-gray-500 justify-start"}
                        to={`/category/${category.id}`}
                        >{category.name}</NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;