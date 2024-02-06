// CategoryBanner.js
import React from 'react';
import classNames from 'classnames';
import { useCategory } from './CategoryContext';
import './CategoryBanner.css';

const CategoryBanner = () => {

  const { activeCategory, setActiveCategory } = useCategory();

  return (
    <> 
      <div id='categoryid' className="flex justify-center pt-[9rem]">
        <p className='border-b-2 border-red-500 text-4xl pb-[1rem] font-extrabold'>
          New Arrivals
        </p>
      </div> 

      <div className="category flex justify-center ">

        
        <div
          className={classNames('mr-4 cursor-pointer ', {
            'border-b-2 border-red-500': activeCategory === 'kids',
          })}
          onClick={() => setActiveCategory('kids')}
        >
          Kids
        </div>
        <div
          className={classNames('mr-4 cursor-pointer ', {
            'border-b-2 border-red-500': activeCategory === 'women',
          })}
          onClick={() => setActiveCategory('women')}
        >
          Womens
        </div>
        <div
          className={classNames('cursor-pointer ', {
            'border-b-2 border-red-500': activeCategory === 'men',
          })}
          onClick={() => setActiveCategory('men')}
        >
          Mens
        </div>
      </div>
    </>
  );
};

export default CategoryBanner;
