import React from 'react';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

export const PricingCardCursor: React.FC<PricingCardProps> = ({ plan, price, features, isFeatured = false }) => {
  return (
    <div
      tabIndex={0}
      className={`
        flex flex-col justify-between items-center w-full max-w-xs mx-auto rounded-md shadow-md
        px-8 py-10
        transition-transform duration-200
        outline-none
        focus:ring-4 focus:ring-blue-400
        ${isFeatured ? 'z-10 scale-105 bg-gray-700 text-white shadow-xl' : 'bg-white text-gray-800'}
        hover:scale-105 hover:shadow-2xl
      `}
      aria-label={`${plan} plan`}
    >
      <div className="flex flex-col items-center gap-2">
        <span className={`text-lg font-semibold mb-2 ${isFeatured ? 'text-white' : 'text-gray-700'}`}>{plan}</span>
        <span className="text-5xl font-bold mb-4">{price}</span>
        <ul className="w-full mb-6">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className={`py-2 text-center border-b ${isFeatured ? 'border-gray-600' : 'border-gray-200'} last:border-b-0 ${isFeatured ? 'text-white' : 'text-gray-700'}`}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="mt-4 w-full py-2 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-white text-gray-900 hover:bg-gray-100"
      >
        SUBSCRIBE
      </button>
    </div>
  );
};
