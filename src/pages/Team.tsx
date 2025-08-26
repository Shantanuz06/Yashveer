import { LinkedinIcon, MailIcon,} from 'lucide-react';
export function Team() {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src="https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=2070&auto=format&fit=crop" alt="Team background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Blossom Team
            </h1>
            <p className="text-xl md:text-2xl">
              Meet the passionate experts behind Yashveer Group
            </p>
          </div>
        </div>
      </section>
      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Leadership Team
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our team of dedicated professionals is committed to bringing
              nature closer to you through innovative plant solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            name: 'Mrs. Pranita Jondhale',
            position: 'CEO',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
          }, {
            name: 'Dr. Ashish S. Jondhale',
            position: 'Research Analyst',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop'
          }, {
            name: 'Miss. Chandrika Joddar',
            position: 'Managing Director',
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop'
          }, {
            name: 'Miss. Nirmiti More',
            position: 'Executive Director - Business Growth',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop'
          }, {
            name: 'Mr. Amol Jawade',
            position: 'Manager (Sales & Marketing)',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop'
          }, {
            name: 'Miss. Bithika Gain',
            position: 'Manager (Customer Delight)',
            image: 'https://images.unsplash.com/photo-1573497019236-61938a6236bd?q=80&w=1000&auto=format&fit=crop'
          }].map((member, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-green-600 mb-4">{member.position}</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <MailIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>)}
          </div>
          {/* Operations Team */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Operations Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{
              name: 'Mr. Shubham Nagrale',
              position: 'Manager (Operation & Processing)',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
            }, {
              name: 'Mr. Amol Darekar',
              position: 'Collaborative Partner, Flowmax Pumps (Engineering Expert)',
              image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop'
            }, {
              name: 'Mr. Lokesh Warakhandkar',
              position: 'Senior Manager (Sales & Marketing)',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop'
            }, {
              name: 'Mr. Abhishek Band',
              position: 'Senior Manager (Operation & Processing)',
              image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1000&auto=format&fit=crop'
            }].map((member, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
                  <div className="h-64 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-green-600 mb-4">{member.position}</p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-500 hover:text-green-600">
                        <LinkedinIcon className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-green-600">
                        <MailIcon className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      {/* Join Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Join Our Team</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              We're always looking for passionate individuals to join our team.
              If you share our love for plants and sustainability, we'd love to
              hear from you.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Current Openings
            </h3>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Plant Specialist
                </h4>
                <p className="text-gray-600 mb-4">
                  We're looking for knowledgeable plant specialists to join our
                  team and help us deliver exceptional plant solutions to our
                  clients.
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-colors">
                  Apply Now
                </button>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Sales Representative
                </h4>
                <p className="text-gray-600 mb-4">
                  Join our sales team to help connect our plant solutions with
                  businesses and individuals looking to enhance their spaces.
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-colors">
                  Apply Now
                </button>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Landscape Designer
                </h4>
                <p className="text-gray-600 mb-4">
                  We're seeking creative landscape designers with a passion for
                  sustainable, green spaces to join our growing team.
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}