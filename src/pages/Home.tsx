import React from 'react';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { ContactForm } from '../components/ContactForm';
import { BarChart3Icon, GlobeIcon, TrendingUpIcon, ShieldCheckIcon, CheckCircleIcon, UsersIcon, PhoneIcon, MailIcon } from 'lucide-react';
export function Home() {
  const services = [{
    title: 'Business Consulting',
    description: "Expert guidance to help your business grow and thrive in today's competitive market.",
    icon: <BarChart3Icon className="h-6 w-6 text-primary-600" />,
    link: '/services'
  }, {
    title: 'Global Trade Solutions',
    description: 'Comprehensive international trade services to expand your business across borders.',
    icon: <GlobeIcon className="h-6 w-6 text-primary-600" />,
    link: '/services'
  }, {
    title: 'Market Analysis',
    description: 'In-depth market research and analysis to identify opportunities and mitigate risks.',
    icon: <TrendingUpIcon className="h-6 w-6 text-primary-600" />,
    link: '/services'
  }, {
    title: 'Risk Management',
    description: 'Strategic risk assessment and management to protect your business interests.',
    icon: <ShieldCheckIcon className="h-6 w-6 text-primary-600" />,
    link: '/services'
  }];
  const testimonials = [{
    quote: "A&K DreamTrade transformed our business with their innovative solutions. Their team's expertise helped us expand into new markets we never thought possible.",
    name: 'Sarah Johnson',
    title: 'CEO',
    company: 'Innovate Tech',
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  }, {
    quote: 'Working with A&K DreamTrade has been a game-changer for our company. Their strategic guidance has led to a 45% increase in our international sales.',
    name: 'Michael Chen',
    title: 'COO',
    company: 'Global Ventures',
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  }, {
    quote: 'The team at A&K DreamTrade provided exceptional service and valuable insights that helped us navigate complex market challenges.',
    name: 'Emily Rodriguez',
    title: 'Director',
    company: 'Summit Enterprises',
    image: 'https://randomuser.me/api/portraits/women/3.jpg'
  }];
  return <div className="bg-white">
      <Hero />
      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Services
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Business Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We offer a wide range of services designed to help your business
              succeed in today's competitive market.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => <ServiceCard key={index} {...service} />)}
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
                About Us
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Your Trusted Business Partner
              </p>
              <p className="mt-4 text-lg text-gray-500">
                A&K DreamTrade LLC is a premier business consulting firm
                dedicated to helping companies achieve their goals through
                strategic partnerships and innovative solutions. With years of
                experience and a team of experts, we provide comprehensive
                services tailored to your specific needs.
              </p>
              <div className="mt-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Experienced Team
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Our team consists of industry experts with years of
                      experience in various business sectors.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Client-Focused Approach
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      We prioritize understanding your unique needs to deliver
                      tailored solutions that drive results.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Global Network
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Our extensive global network provides access to markets
                      and opportunities worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Team working together" />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Our Impact
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Driving Business Success
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6 text-center">
                  <div className="text-5xl font-extrabold text-primary-600">
                    500+
                  </div>
                  <div className="mt-2 text-lg font-medium text-gray-900">
                    Clients Served
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6 text-center">
                  <div className="text-5xl font-extrabold text-primary-600">
                    30+
                  </div>
                  <div className="mt-2 text-lg font-medium text-gray-900">
                    Countries
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6 text-center">
                  <div className="text-5xl font-extrabold text-primary-600">
                    15+
                  </div>
                  <div className="mt-2 text-lg font-medium text-gray-900">
                    Years Experience
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6 text-center">
                  <div className="text-5xl font-extrabold text-primary-600">
                    98%
                  </div>
                  <div className="mt-2 text-lg font-medium text-gray-900">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Contact Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get In Touch
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Have questions or ready to start? Reach out to our team today.
            </p>
          </div>
          <div className="mt-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                        <UsersIcon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900">
                          Our Office
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          123 Business Avenue
                          <br />
                          Suite 456
                          <br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                        <PhoneIcon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900">
                          Phone
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          +1 (800) 123-4567
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                        <MailIcon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900">
                          Email
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          info@dreamtradellc.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}