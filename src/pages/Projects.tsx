export function Projects() {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src="https://images.unsplash.com/photo-1597121066959-28756734e21c?q=80&w=2070&auto=format&fit=crop" alt="Projects background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl">
              Transforming spaces with the power of plants
            </p>
          </div>
        </div>
      </section>
      {/* Projects Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Completed Projects
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore our diverse portfolio of completed projects across various
              categories.
            </p>
          </div>
          {/* Landscaping Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-2 border-b border-gray-200">
              Landscaping Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(item => <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-16261787939${item}6-22b28830aa30?q=80&w=1000&auto=format&fit=crop`} alt={`Landscaping Project ${item}`} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Residential Landscape Design
                    </h4>
                    <p className="text-gray-600 mb-4">
                      A complete transformation of outdoor space with native
                      plants and sustainable design principles.
                    </p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Location: Pune</span>
                      <span>Completed: 2023</span>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          {/* Vertical Gardening Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-2 border-b border-gray-200">
              Vertical Gardening Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(item => <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1597121066${item}59-28756734e21c?q=80&w=1000&auto=format&fit=crop`} alt={`Vertical Garden Project ${item}`} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Corporate Office Vertical Garden
                    </h4>
                    <p className="text-gray-600 mb-4">
                      A stunning living wall installation that improves air
                      quality and enhances the workspace environment.
                    </p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Location: Mumbai</span>
                      <span>Completed: 2023</span>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          {/* Home Gardening Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-2 border-b border-gray-200">
              Home Gardening Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(item => <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-15452410${item}7-6083a3684587?q=80&w=1000&auto=format&fit=crop`} alt={`Home Garden Project ${item}`} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Private Residence Plant Setup
                    </h4>
                    <p className="text-gray-600 mb-4">
                      A comprehensive indoor plant arrangement designed to
                      purify air and enhance living spaces.
                    </p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Location: Pune</span>
                      <span>Completed: 2023</span>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          {/* School Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-2 border-b border-gray-200">
              School Projects with Flowmax Pumps
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Delhi Public school Sonipat, Haryana', 'Orchid International School Jaipur, Rajasthan', 'Orchid International School Indore, Madhya Pradesh', 'Orchid International School Joka Kolkata, West Bengal', 'Orchid International School Madhyamgram Kolkata, West Bengal', 'Gurunanak Khalasa collage of Arts Commerce and Science Matunga, Mumbai'].map((school, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-159968531${index + 1}640-4a9ba285b38a?q=80&w=1000&auto=format&fit=crop`} alt={`School Project: ${school}`} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Educational Hydroponic System
                    </h4>
                    <p className="text-gray-600 mb-4">{school}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Type: Hydroponic System</span>
                      <span>Completed: 2023</span>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            name: 'Ms. Darshana Janbandhu',
            location: 'A6-1003, Akshar Elementa, Tathwade, Wakad, Pune',
            quote: 'The plants have completely transformed our home environment. The air feels fresher and the aesthetic appeal is incredible.'
          }, {
            name: 'Ms. Suman Singh',
            location: 'B1-101 MontVert Finesse, Baner-Pashan Link Road, Pune',
            quote: "Yashveer Group's scientific approach to selecting plants for our space has made a noticeable difference in air quality and ambiance."
          }, {
            name: 'Mr. Pravin Patil',
            location: 'Kalewadi Phata Pune',
            quote: 'Our office environment has improved significantly since installing plants from Yashveer Group. Our employees love the green space.'
          }, {
            name: 'Mr. Nitin Jeswani',
            location: 'Sonegao Nagpur',
            quote: 'The fruit plants provided by Yashveer Group for our farm are thriving. Their expertise in plant selection is unmatched.'
          }, {
            name: 'Mr. Jitendra Sirsikar',
            location: 'Sadashiv peth Pune',
            quote: 'The office plants have not only enhanced the appearance of our workspace but have also created a more pleasant work environment.'
          }, {
            name: 'Ashwini International School',
            location: 'Wakad, Pune',
            quote: 'The awareness campaign conducted by Yashveer Group was informative and engaging. Our students learned a lot about the importance of plants.'
          }].map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
}