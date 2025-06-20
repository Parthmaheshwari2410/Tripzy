

import { allData } from "../../assets/assets";
import { Star } from "lucide-react";
import MapComponent from "./MapPin";
import TopDestination from "./TopDestination";
import TopPlacesToStay from "./TopPlacesToStay";
import TopFoodAndDrink from "./TopFoodAndDrink";

const DestinationPage = ({ destination }) => {
  const data = allData.find(item => item.city === destination) || allData[0];
 

  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <img
          src={data.image}
          alt={data.city}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{data.city}</h1>
          <p className="text-lg opacity-90 max-w-2xl">{data["description"]}</p>
          <div className="flex items-center mt-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-2 text-lg">{data["ratingg"]}</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {data["categories"] && data["categories"].map((category, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>
        <TopDestination />
        <TopPlacesToStay />
        <TopFoodAndDrink />

        <section className="mb-12">
          <MapComponent
            destination={data.city}
          />
        </section>

      </div>
    </div>
  );
};

export default DestinationPage;



