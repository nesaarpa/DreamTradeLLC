import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3Icon, GlobeIcon, TrendingUpIcon, ShieldCheckIcon, UsersIcon, BuildingIcon, BriefcaseIcon, PresentationIcon, CheckCircleIcon } from 'lucide-react';
export function Services() {
  const services = [{
    id: 'business-consulting',
    title: 'Business Consulting',
    description: "Our expert consultants provide strategic guidance to help your business grow and thrive in today's competitive market.",
    icon: <BarChart3Icon className="h-12 w-12 text-primary-600" />,
    details: ['Strategic business planning', 'Operational efficiency analysis', 'Growth strategy development', 'Performance optimization', 'Competitive market positioning']
  }, {
    id: 'global-trade',
    title: 'Global Trade Solutions',
    description: 'Comprehensive international trade services to expand your business across borders safely and efficiently.',
    icon: <GlobeIcon className="h-12 w-12 text-primary-600" />,
    details: ['Import/export strategy', 'International market entry', 'Cross-border compliance', 'Global supply chain management', 'International partnership development']
  }, {
    id: 'market-analysis',
    title: 'Market Analysis',
    description: 'In-depth market research and analysis to identify opportunities and mitigate risks for your business.',
    icon: <TrendingUpIcon className="h-12 w-12 text-primary-600" />,
    details: ['Competitive landscape analysis', 'Market trend identification', 'Consumer behavior research', 'Market opportunity assessment', 'Data-driven growth recommendations']
  }, {
    id: 'risk-management',
    title: 'Risk Management',
    description: 'Strategic risk assessment and management to protect your business interests and ensure long-term stability.',
    icon: <ShieldCheckIcon className="h-12 w-12 text-primary-600" />,
    details: ['Risk identification and analysis', 'Mitigation strategy development', 'Compliance assessment', 'Crisis management planning', 'Business continuity solutions']
  }, {
    id: 'leadership-development',
    title: 'Leadership Development',
    description: 'Comprehensive programs to develop strong, effective leaders within your organization.',
    icon: <UsersIcon className="h-12 w-12 text-primary-600" />,
    details: ['Executive coaching', 'Leadership skills training', 'Succession planning', 'Team building workshops', 'Performance management systems']
  }, {
    id: 'corporate-restructuring',
    title: 'Corporate Restructuring',
    description: 'Expert guidance for organizations undergoing significant structural changes or facing challenges.',
    icon: <BuildingIcon className="h-12 w-12 text-primary-600" />,
    details: ['Organizational design', 'Change management', 'Process reengineering', 'Merger and acquisition support', 'Turnaround strategies']
  }, {
    id: 'investment-advisory',
    title: 'Investment Advisory',
    description: 'Strategic investment guidance to maximize returns and achieve long-term financial objectives.',
    icon: <BriefcaseIcon className="h-12 w-12 text-primary-600" />,
    details: ['Investment opportunity analysis', 'Portfolio diversification strategy', 'Risk-return optimization', 'Market timing guidance', 'Investment performance monitoring']
  }, {
    id: 'training-workshops',
    title: 'Training & Workshops',
    description: "Specialized training programs designed to enhance your team's skills and knowledge in key business areas.",
    icon: <PresentationIcon className="h-12 w-12 text-primary-600" />,
    details: ['Customized training programs', 'Skill development workshops', 'Team capability building', 'Industry-specific education', 'Professional certification preparation']
  }];
  return <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-700">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Team meeting" />
          <div className="absolute inset-0 bg-primary-700 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-primary-100">
            Comprehensive business solutions tailored to your needs.
          </p>
        </div>
      </div>
      {/* Services Overview */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive Business Solutions
            </p>
            <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
              We offer a wide range of services designed to help your business
              succeed in today's competitive market.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {services.map(service => <div key={service.id} className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                        {service.icon}
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <h3 className="text-2xl font-medium text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-lg text-gray-500">
                        {service.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {service.details.map((detail, index) => <li key={index} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckCircleIcon className="h-5 w-5 text-green-500" />
                            </div>
                            <p className="ml-3 text-base text-gray-500">
                              {detail}
                            </p>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-primary-200">
              Contact us today for a consultation.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50">
                Get Started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a href="tel:+18001234567" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>;
}