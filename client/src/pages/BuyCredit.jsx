import React from 'react';
import { assets, plans } from '../assets/assets'; // Ensure the correct relative path to the plans array

const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-grey-400 px-10 py-2 rounded-full mb-6'>
        Our plans
      </button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>
        Choose the Plan
      </h1>

      <div>
        {plans.map((item, index) => (
          <div key={index} className="mb-4">
            <img src={assets.lock_icon} alt="Lock Icon" className="w-8 h-8 mx-auto mb-2" />
            <p className="text-lg font-semibold">{item.id}</p>
            <p className="text-gray-600">{item.desc}</p>
            <p className="text-blue-500">
              {item.price} / {item.credits} credits
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
