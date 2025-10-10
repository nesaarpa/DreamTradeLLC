import React from 'react';
import { CheckCircleIcon, UsersIcon, BuildingIcon, AwardIcon } from 'lucide-react';
export function About() {
  const team = [{
    name: 'Alex Johnson',
    role: 'CEO & Co-Founder',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'With over 20 years of experience in international business, Alex leads our company with vision and expertise.'
  }, {
    name: 'Katherine Williams',
    role: 'COO & Co-Founder',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: "Katherine's background in strategic operations and global markets helps drive our company's success."
  }, {
    name: 'David Chen',
    role: 'Chief Strategy Officer',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    bio: 'David brings valuable insights from his extensive experience in market analysis and business development.'
  }, {
    name: 'Sophia Rodriguez',
    role: 'VP of Client Relations',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    bio: 'Sophia ensures our clients receive exceptional service and tailored solutions to meet their needs.'
  }];
  return <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-700">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="People working on laptops" />
          <div className="absolute inset-0 bg-primary-700 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-primary-100">
            Learn about our story, our mission, and the team behind A&K
            DreamTrade LLC.
          </p>
        </div>
      </div>
      {/* Our Story Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
                Our Story
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Building Dreams Through Trade
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Founded in 2010, A&K DreamTrade LLC began with a simple mission:
                to help businesses navigate the complex world of international
                trade and reach their full potential. What started as a small
                consulting firm has grown into a comprehensive business
                solutions provider with clients across the globe.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Our founders, Alex Johnson and Katherine Williams, combined
                their expertise in international business and strategic
                operations to create a company that truly understands the
                challenges businesses face in today's global market.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Today, we continue to build on our foundation of excellence,
                helping clients achieve their dreams through innovative
                solutions and strategic partnerships.
              </p>
            </div>
            <div className="mt-12 relative lg:mt-0">
              <div className="relative">
                <img className="mx-auto rounded-lg shadow-lg" width={490} src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Office building" />
              </div>
            </div>
          </div>
          {/* Mission and Values */}
          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  Our Mission & Values
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  At A&K DreamTrade LLC, our mission is to empower businesses to
                  succeed in the global marketplace through innovative
                  solutions, strategic guidance, and exceptional service.
                </p>
                <dl className="mt-10 space-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <CheckCircleIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Excellence
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We strive for excellence in everything we do, setting
                        high standards and consistently delivering quality
                        results.
                      </dd>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <UsersIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Integrity
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We conduct our business with the highest level of
                        integrity, building trust through honesty and
                        transparency.
                      </dd>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <BuildingIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Innovation
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We embrace innovation, constantly seeking new ways to
                        solve problems and create value for our clients.
                      </dd>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <AwardIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Client Focus
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We put our clients at the center of everything we do,
                        tailoring our solutions to their unique needs and goals.
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
              <div className="mt-10 -mx-4 relative lg:mt-0">
                <img className="relative mx-auto rounded-lg shadow-lg" width={490} src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Team meeting" />
              </div>
            </div>
          </div>
          {/* Leadership Team */}
          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Leadership Team
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-gray-500">
              Meet the experienced professionals who lead A&K DreamTrade LLC and
              drive our success.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map(member => <div key={member.name} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <img className="w-32 h-32 rounded-full mx-auto" src={member.image} alt={member.name} />
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-medium text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary-600">{member.role}</p>
                      <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
}