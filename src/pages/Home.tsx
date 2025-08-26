 
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
export function Home() {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src="https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f?q=80&w=2070&auto=format&fit=crop" alt="Plants background" className="w-full h-full object-cover" loading="eager" decoding="async" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Breath Clean, Breath Healthy
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Bringing Humankind Closer to Nature
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-white text-green-700 px-6 py-3 rounded-md font-medium hover:bg-green-100 transition-colors">
                Our Services
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=1949&auto=format&fit=crop" alt="Indoor plants" className="rounded-lg shadow-lg w-full h-auto" loading="lazy" decoding="async" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Yashveer Group
              </h3>
              <p className="text-gray-700 mb-4">
                Yashveer Group is a pioneering company at the forefront of the
                green living revolution. Established in 2023, we have
                consistently strived to transform indoor and outdoor spaces into
                lush, vibrant ecosystems, promoting healthier, happier lives
                through the power of plants.
              </p>
              <p className="text-gray-700 mb-6">
                We specialize in providing scientifically approached indoor
                plants and related services, including maintenance and care.
                With a strong commitment to enhancing indoor spaces through the
                introduction of greenery, Yashveer Group has established itself
                as a trusted provider in the field of indoor plant solutions.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center">
                  <div className="bg-green-600 rounded-full p-1 mr-2">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Innovation</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-600 rounded-full p-1 mr-2">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Sustainability</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-600 rounded-full p-1 mr-2">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Excellence</span>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center mt-6 text-green-600 font-medium hover:text-green-700">
                Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              At Yashveer Group, we are on a mission to provide scientifically
              approached plant solutions for healthier living spaces.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: 'Indoor Plants',
            description: 'Scientifically approached indoor plants that purify air and enhance your living space.',
            image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000&auto=format&fit=crop'
          }, {
            title: 'Outdoor Plants',
            description: 'Selection of best plants for your outdoor spaces from 50+ varieties.',
            image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop'
          }, {
            title: 'Vertical Gardening',
            description: 'Customized vertical gardening solutions for limited spaces.',
            image: 'https://images.unsplash.com/photo-1558350315-8aa00e8e4590?q=80&w=1000&auto=format&fit=crop'
          }, {
            title: 'Hydroponic Kitchen Gardening',
            description: 'Grow your own vegetables with our fuzz-free water-based growth media.',
            image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1000&auto=format&fit=crop'
          }, {
            title: 'Landscaping',
            description: 'Transform your outdoor spaces into vibrant landscapes that invite relaxation.',
            image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=1000&auto=format&fit=crop'
          }, {
            title: 'Plant Maintenance',
            description: 'Professional services and maintenance for all kinds of plants.',
            image: 'https://images.unsplash.com/photo-1555955924-a8c17aa846b7?q=80&w=1000&auto=format&fit=crop'
          }].map((service, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" loading="lazy" decoding="async" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
                    Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>)}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      {/* Air Pollution Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Impact of Air Pollution on Human Health
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-800 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">
                  Air Pollution Analysis
                </h3>
                <p className="mb-4">
                  The Air Quality Index (AQI) is an indicator developed by
                  government organizations to show present air pollution
                  scenario to public.
                </p>
                <p>
                  The AQI is calculated by measuring particulate matter, CO2,
                  O3, NO2, SO2, and CO emissions.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-400">
                  Health Impact
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                    <span>
                      21% deaths are due to lower respiratory infection.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                    <span>
                      44% of all pneumonia deaths in children less than 5 years
                      old.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                    <span>
                      Air Pollution is responsible for 6.7 billion premature
                      deaths per year (WHO, 2022).
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-400">
                  Our Solutions
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-medium">Scientific Research</span>
                      <p className="text-gray-300 mt-1">
                        We use our scientific research to suggest the best
                        plants based on the AQI and pollutant levels.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-medium">Advanced Testing</span>
                      <p className="text-gray-300 mt-1">
                        We do advanced lab testing to calculate the AQI and
                        indicate the level of health concern.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-medium">Customized Approach</span>
                      <p className="text-gray-300 mt-1">
                        We use a customized and personalized approach to provide
                        you with the optimal solutions for pollution.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-medium">Expert Support</span>
                      <p className="text-gray-300 mt-1">
                        We have a team of passionate and professional plant
                        experts ready to help with any plant needs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Projects</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Take a look at some of our successful projects that have
              transformed spaces and improved air quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            title: 'Landscaping',
            location: 'Residential Complex, Pune',
            image: 'https://images.unsplash.com/photo-1558614409-43d177158032?q=80&w=1000&auto=format&fit=crop'
          }, {
            title: 'Vertical Gardening',
            location: 'Corporate Office, Mumbai',
            image: 'https://images.unsplash.com/photo-1597121066959-28756734e21c?q=80&w=1000&auto=format&fit=crop'
          }, {
            title: 'Home Gardening Service',
            location: 'Private Residence, Pune',
            image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop'
          }, {
            title: 'Hydroponic Kitchen Garden',
            location: 'Restaurant, Pune',
            image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1000&auto=format&fit=crop'
          }, {
            title: 'School Project',
            location: 'Delhi Public School, Sonipat',
            image: 'https://images.unsplash.com/photo-1599685315640-4a9ba285b38a?q=80&w=1000&auto=format&fit=crop'
          }, {
            title: 'Office Plants',
            location: 'AKSN Infotech, Pune',
            image: 'https://images.unsplash.com/photo-1524397057410-1e775ed476f3?q=80&w=1000&auto=format&fit=crop'
          }].map((project, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" loading="lazy" decoding="async" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.location}</p>
                </div>
              </div>)}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how we can bring nature into your home
            or workplace with our scientifically approached plant solutions.
          </p>
          <Link to="/contact" className="bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-green-100 transition-colors text-lg">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>;
}