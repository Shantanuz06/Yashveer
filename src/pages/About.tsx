import { CheckIcon } from 'lucide-react';
export function About() {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src="https://images.unsplash.com/photo-1611921561569-bcd07c4bc09f?q=80&w=2070&auto=format&fit=crop" alt="Plants background" className="w-full h-full object-cover" loading="eager" decoding="async" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl">
              Bringing Humankind Closer to Nature
            </p>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                Yashveer Group is a pioneering company at the forefront of the
                green living revolution. Established in 2023, we have
                consistently strived to transform indoor and outdoor spaces into
                lush, vibrant ecosystems, promoting healthier, happier lives
                through the power of plants.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey began with a simple vision: to enhance green living
                and make it accessible to everyone. What started as a passion
                for plants has grown into a comprehensive service that provides
                scientifically approached plant solutions for homes, offices,
                and commercial spaces.
              </p>
              <p className="text-gray-700">
                Today, Yashveer Group is a reputable company that specializes in
                providing scientifically approached indoor plants and related
                services, including maintenance and care. With a strong
                commitment to enhancing indoor spaces through the introduction
                of greenery, we have established ourselves as a trusted provider
                in the field of indoor plant solutions.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1497990571654-77aa8ec36038?q=80&w=1934&auto=format&fit=crop" alt="Our team" className="rounded-lg shadow-lg w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </div>
          {/* Mission, Vision, Values */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-green-700 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  At Yashveer Group, we are on a mission to provide
                  scientifically approached plant solutions that improve air
                  quality, enhance wellbeing, and bring people closer to nature
                  in their everyday environments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-green-700 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  Our vision is simple yet profound: to enhance green living by
                  making scientifically proven plant solutions accessible to
                  all, creating healthier, more sustainable environments where
                  people and plants thrive together.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-green-700 mb-4">
                  Core Values
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                    <span>Innovation in plant solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                    <span>Sustainability in all practices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                    <span>Excellence in service delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Yashveer Group?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
              title: 'Scientific Approach',
              description: 'We use scientific research and literature to suggest the best plants based on air quality needs.'
            }, {
              title: 'Advanced Testing',
              description: 'Rigorous real-world and lab testing to calculate AQI and indicate the level of health concern.'
            }, {
              title: 'Customized Solutions',
              description: 'We provide personalized plant solutions tailored to your specific space and requirements.'
            }, {
              title: 'Expert Team',
              description: 'Our team of passionate plant experts provides consultation, delivery, installation, and maintenance.'
            }].map((item, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>)}
            </div>
          </div>
          {/* Air Pollution Impact */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Impact of Air Pollution on Human Health
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  The Problem
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-red-500 rounded-full p-1 mr-3 mt-0.5">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        21% deaths are due to lower respiratory infection. 44%
                        of all pneumonia deaths in children less than 5 years
                        old.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-500 rounded-full p-1 mr-3 mt-0.5">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        11% of lung cancer deaths in adults are attributed to
                        exposure to carcinogens from household air pollution.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-500 rounded-full p-1 mr-3 mt-0.5">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Air Pollution is responsible for 6.7 billion premature
                        deaths per year (WHO, 2022).
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  Our Solution
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Scientific plant selection based on air purification
                        capabilities and pollutant-specific remediation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Customized indoor and outdoor plant solutions that
                        increase oxygen levels and absorb harmful pollutants.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Ongoing maintenance and support to ensure optimal plant
                        health and air purification efficiency.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}