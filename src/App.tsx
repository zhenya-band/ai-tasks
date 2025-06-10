import { PricingPageGemini } from "./tasks/task1";
import { PricingCardCursor } from "./tasks/task1/PricingCardCursor";


function App() {
  return (
    <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center justify-center py-12 px-2">
      <h1 className="text-3xl font-bold text-white mb-10">Pricing cursor</h1>
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-5xl justify-center items-center">
        <PricingCardCursor
          plan="Standard"
          price="$100"
          features={[
            "50,000 Requests",
            "4 contributors",
            "Up to 3 GB storage space",
          ]}
        />
        <PricingCardCursor
          plan="Pro"
          price="$200"
          features={[
            "100,000 Requests",
            "7 contributors",
            "Up to 6 GB storage space",
          ]}
          isFeatured
        />
        <PricingCardCursor
          plan="Expert"
          price="$500"
          features={[
            "200,000 Requests",
            "11 contributors",
            "Up to 10 GB storage space",
          ]}
        />
      </div>
      <div className="w-full bg-amber-300 h-2 m-10" />
      <h1 className="text-3xl font-bold text-white mb-10">Pricing Gemini</h1>
      <PricingPageGemini />
    </div>
  );
}

export default App;
