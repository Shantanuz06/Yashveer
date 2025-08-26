import { ArrowRightIcon, CheckIcon } from 'lucide-react';
export function Services() {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src="https://images.unsplash.com/photo-1558614409-43d177158032?q=80&w=2070&auto=format&fit=crop" alt="Plants background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl">
              Scientifically approached plant solutions for healthier living
            </p>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Comprehensive Plant Solutions
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              At Yashveer Group, we offer a wide range of plant services
              designed to enhance your indoor and outdoor spaces while improving
              air quality and overall wellbeing.
            </p>
          </div>
          {/* Service Cards */}
          <div className="space-y-16">
            {/* Indoor Plants */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Scientifically Approached Indoor Plants
                </h3>
                <p className="text-gray-700 mb-4">
                  Our indoor plant solutions are backed by scientific research
                  to ensure optimal air purification and aesthetic appeal. We
                  carefully select plants based on their ability to remove
                  specific pollutants from your indoor environment.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Plant suggestions based on scientifically analyzed data
                      against air pollution
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Selection from over 50+ varieties of air-purifying plants
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Custom arrangements for homes and offices
                    </span>
                  </li>
                </ul>
                <button className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
                  Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000&auto=format&fit=crop" alt="Indoor Plants" className="rounded-lg shadow-lg w-full h-auto" />
              </div>
            </div>
            {/* Outdoor Plants */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop" alt="Outdoor Plants" className="rounded-lg shadow-lg w-full h-auto" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Outdoor Plants
                </h3>
                <p className="text-gray-700 mb-4">
                  Transform your outdoor spaces into vibrant landscapes that
                  invite you to relax, unwind, and reconnect with nature. Our
                  horticulturists employ a scientific approach to select plants
                  that thrive in your local climate and soil conditions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Climate-appropriate plant selection
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Seasonal arrangements and rotations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Drought-resistant and low-maintenance options
                    </span>
                  </li>
                </ul>
                <button className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
                  Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            {/* Vertical Gardening */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Vertical Gardening Solutions
                </h3>
                <p className="text-gray-700 mb-4">
                  Maximize your green space with our vertical gardening
                  solutions, perfect for urban environments with limited
                  horizontal space. Our vertical gardens are not just
                  aesthetically pleasing but also functional air purifiers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Customized designing suitable to your specifications and
                      style
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      High-quality materials and plants for better durability
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Space-efficient solutions for homes and offices
                    </span>
                  </li>
                </ul>
                <button className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
                  Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1558350315-8aa00e8e4590?q=80&w=1000&auto=format&fit=crop" alt="Vertical Gardening" className="rounded-lg shadow-lg w-full h-auto" />
              </div>
            </div>
            {/* Hydroponic Kitchen Gardening */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1000&auto=format&fit=crop" alt="Hydroponic Kitchen Gardening" className="rounded-lg shadow-lg w-full h-auto" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Hydroponic Kitchen Gardening
                </h3>
                <p className="text-gray-700 mb-4">
                  Grow your own vegetables year-round with our hydroponic
                  kitchen gardening solutions. Our fuzz-free water-based growth
                  media is formulated by our team of experts to ensure optimal
                  plant growth.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Personal choice of vegetables in your own hydroponic
                      kitchen garden
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Water-efficient and space-saving systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Expert setup and maintenance guidance
                    </span>
                  </li>
                </ul>
                <button className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
                  Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            {/* Landscaping */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Landscaping
                </h3>
                <p className="text-gray-700 mb-4">
                  We work with you to create a landscape that reflects your
                  vision and personality. Our landscaping services use
                  eco-friendly practices and materials that ensure the quality
                  and durability of your outdoor space.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Comprehensive landscape design and installation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Eco-friendly practices and sustainable materials
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Seasonal maintenance and updates
                    </span>
                  </li>
                </ul>
                <button className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
                  Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=1000&auto=format&fit=crop" alt="Landscaping" className="rounded-lg shadow-lg w-full h-auto" />
              </div>
            </div>
            {/* Maintenance */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1555955924-a8c17aa846b7?q=80&w=1000&auto=format&fit=crop" alt="Maintenance Services" className="rounded-lg shadow-lg w-full h-auto" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Services & Maintenance
                </h3>
                <p className="text-gray-700 mb-4">
                  We don't just install plants – we ensure they thrive. Our
                  comprehensive maintenance services monitor and adjust plant
                  care according to changing seasons and environments.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Regular maintenance schedules
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Plant health monitoring and treatment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Seasonal care adjustments
                    </span>
                  </li>
                </ul>
                <button className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
                  Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            {/* Gift Plants */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Gift Plants
                </h3>
                <p className="text-gray-700 mb-4">
                  Give the gift of nature with our specially curated plant
                  gifts. Perfect for corporate events, birthdays, housewarmings,
                  or any special occasion.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Beautifully packaged plant gifts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Corporate gifting solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Customized gift cards and messaging
                    </span>
                  </li>
                </ul>
                <button className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
                  Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1603912699214-92627f304eb6?q=80&w=1000&auto=format&fit=crop" alt="Gift Plants" className="rounded-lg shadow-lg w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Enhance Your Space with Plants?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your plant needs and how we can bring
            nature into your environment.
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-green-100 transition-colors text-lg">
            Get In Touch
          </button>
        </div>
      </section>
    </div>;
}