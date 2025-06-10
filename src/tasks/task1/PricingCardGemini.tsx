import React from 'react';

// PROPS DEFINITION
// Defines the shape of the data the component expects.
interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

/**
 * A responsive and accessible pricing card component.
 * @param {PricingCardProps} props - The props for the component.
 * @param {string} props.plan - The name of the pricing plan (e.g., "Standard").
 * @param {string} props.price - The price of the plan (e.g., "$100").
 * @param {string[]} props.features - A list of features for the plan.
 * @param {boolean} [props.isFeatured=false] - If true, applies a distinct, "featured" style.
 */
export const PricingCardGemini: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  // DYNAMIC STYLING
  // Base classes are applied to all cards.
  // Conditional classes are added based on the `isFeatured` prop for styling variations.
  const cardBaseClasses =
    'flex flex-col h-full rounded-lg p-6 shadow-lg text-center transition-transform duration-300 ease-in-out focus-within:ring-4 focus-within:ring-opacity-75';
  
  const cardVariantClasses = isFeatured
    ? 'bg-slate-800 text-white scale-105 hover:scale-110 focus-within:ring-indigo-400'
    : 'bg-white text-gray-800 hover:scale-105 focus-within:ring-indigo-500';

  const buttonBaseClasses =
    'mt-auto w-full py-3 font-semibold rounded-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-75';
    
  const buttonVariantClasses = isFeatured
    ? 'bg-white text-slate-800 hover:bg-gray-200 focus:ring-gray-300'
    : 'bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-600';

  const featureBorderClass = isFeatured ? 'border-slate-600' : 'border-gray-200';

  return (
    <div className={`${cardBaseClasses} ${cardVariantClasses}`}>
      {/* Plan Name */}
      <h3 className="text-sm font-semibold uppercase tracking-wider">{plan}</h3>

      {/* Price */}
      <p className="my-4 text-5xl font-extrabold">{price}</p>

      {/* Features List */}
      <ul className="my-4 space-y-4 text-sm">
        {features.map((feature, index) => (
          <li key={index} className={`border-t ${featureBorderClass} pt-4`}>
            {feature}
          </li>
        ))}
      </ul>

      {/* Subscribe Button */}
      <a
        href="#subscribe"
        className={`${buttonBaseClasses} ${buttonVariantClasses}`}
        aria-label={`Subscribe to the ${plan} plan`}
      >
        Subscribe
      </a>
    </div>
  );
};

// --- DEMO USAGE ---
// The component below demonstrates how to implement the PricingCard.

const pricingData: PricingCardProps[] = [
    {
        plan: "Standard",
        price: "$100",
        features: ["50,000 Requests", "4 contributors", "Up to 3 GB storage space"],
        isFeatured: false,
    },
    {
        plan: "Pro",
        price: "$200",
        features: ["100,000 Requests", "7 contributors", "Up to 6 GB storage space"],
        isFeatured: true,
    },
    {
        plan: "Expert",
        price: "$500",
        features: ["200,000 Requests", "11 contributors", "Up to 10 GB storage space"],
        isFeatured: false,
    }
];

export const PricingPageGemini = () => {
  return (
    <div className="bg-slate-900 flex w-full items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Container that handles the responsive layout.
          - Stacks vertically on small screens (< 640px) with `grid-cols-1`.
          - Switches to a three-column layout on larger screens (`lg:grid-cols-3`).
          - `items-stretch` ensures all cards are of equal height.
      */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
        {pricingData.map((data) => (
          <PricingCardGemini key={data.plan} {...data} />
        ))}
      </div>
    </div>
  );
};