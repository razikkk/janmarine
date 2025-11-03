import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fleetData } from '../data/fleetData';

const Fleet = () => {
  const categories = ['All', 'Heavy Trucks', 'Light Commercial', 'Medium Trucks', 'Specialized'];

  return (
    <div className="animate-fade-in">
      <section className="relative h-[820px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">
  <div className="absolute inset-0 opacity-25">
    <img
      src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1920"
      alt="Fleet"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white font-[Outfit] text-center">
    <h1 className="text-5xl md:text-7xl font-semibold animate-slide-up">
      Our Fleet
    </h1>
    <p className="text-lg md:text-xl mt-6 text-gray-300 leading-relaxed max-w-3xl mx-auto">
  Discover our modern fleet — engineered for reliability, efficiency, and safety.  
  Every vehicle reflects our promise of performance and precision in logistics.
</p>

  </div>
</section>


      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-gray-100 hover:bg-pantone-red hover:text-white transition-all font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetData.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-pantone-blue bg-blue-50 px-3 py-1 rounded-full">
                      {vehicle.category}
                    </span>
                    <span className="text-sm font-semibold text-gray-600">{vehicle.capacity}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-1 font-medium">{vehicle.model}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{vehicle.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/fleet/${vehicle.id}`}
                    className="flex items-center justify-center w-full bg-pantone-red text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all font-semibold"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16  text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Specific Vehicle?</h2>
          <p className="text-xl mb-8">
            Can't find what you're looking for? Contact us for custom fleet solutions tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-pantone-blue px-8 py-4 rounded-lg shadow-md hover:bg-gray-100 transition-all text-lg font-semibold inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
