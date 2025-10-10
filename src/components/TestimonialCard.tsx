import React from 'react';
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}
export function TestimonialCard({
  quote,
  name,
  title,
  company,
  image
}: TestimonialCardProps) {
  return <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full" src={image} alt={name} />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">
              {title}, {company}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 italic">"{quote}"</p>
        </div>
      </div>
    </div>;
}