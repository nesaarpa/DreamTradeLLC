import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from 'lucide-react';
export function Contact() {
  return <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-700">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="Office desk with computer and phone" />
          <div className="absolute inset-0 bg-primary-700 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-primary-100">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </div>
      {/* Contact Section */}
      <div className="py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Have questions or ready to start? Reach out to our team today.
            </p>
          </div>
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* Contact Info Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
              Contact Information
            </h2>
            <div className="mt-8 pt-8">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                    <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-2 text-base text-gray-500">
                      <a href="tel:+18001234567" className="text-primary-600 hover:text-primary-500">
                        +1 (800) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                    <MailIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-2 text-base text-gray-500">
                      <a href="mailto:info@dreamtradellc.com" className="text-primary-600 hover:text-primary-500">
                        info@dreamtradellc.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                    <MapPinIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-medium text-gray-900">
                      Address
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
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                    <ClockIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-medium text-gray-900">
                      Business Hours
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Monday - Friday
                      <br />
                      9:00 AM - 5:00 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <h2 className="sr-only">Map</h2>
            <div className="h-80 bg-gray-200">
              {/* Placeholder for map - in a real implementation, you would use a map component here */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  Interactive map would be displayed here.
                  <br />
                  Visit us at our New York office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}