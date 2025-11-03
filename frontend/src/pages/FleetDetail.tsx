import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { fleetData } from '../data/fleetData';

const FleetDetail = () => {
  const { id } = useParams();
  const vehicle = fleetData.find(v => v.id === id);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Vehicle Not Found</h1>
          <Link to="/fleet" className="text-pantone-blue hover:underline">
            Back to Fleet
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/fleet"
            className="inline-flex items-center text-pantone-red hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Fleet
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>

            <div>
              <span className="text-sm font-semibold text-pantone-blue bg-blue-50 px-4 py-2 rounded-full">
                {vehicle.category}
              </span>
              <h1 className="text-4xl font-bold mt-4 mb-2">{vehicle.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{vehicle.model}</p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold">Capacity:</span>
                  <span className="text-2xl font-bold text-pantone-red">{vehicle.capacity}</span>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8">{vehicle.description}</p>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <div className="grid grid-cols-1 gap-3">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="bg-pantone-blue text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all text-lg font-semibold inline-block w-full text-center"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-b pb-4">
                <span className="text-gray-600 font-medium">Engine</span>
                <p className="text-xl font-semibold mt-1">{vehicle.specifications.engine}</p>
              </div>
              <div className="border-b pb-4">
                <span className="text-gray-600 font-medium">Payload Capacity</span>
                <p className="text-xl font-semibold mt-1">{vehicle.specifications.payload}</p>
              </div>
              <div className="border-b pb-4">
                <span className="text-gray-600 font-medium">Dimensions</span>
                <p className="text-xl font-semibold mt-1">{vehicle.specifications.dimensions}</p>
              </div>
              <div className="border-b pb-4">
                <span className="text-gray-600 font-medium">Fuel Type</span>
                <p className="text-xl font-semibold mt-1">{vehicle.specifications.fuelType}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">More Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetData
              .filter(v => v.id !== vehicle.id)
              .slice(0, 3)
              .map((otherVehicle) => (
                <Link
                  key={otherVehicle.id}
                  to={`/fleet/${otherVehicle.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={otherVehicle.image}
                        alt={otherVehicle.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-1">{otherVehicle.name}</h3>
                      <p className="text-gray-600">{otherVehicle.model}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetDetail;
