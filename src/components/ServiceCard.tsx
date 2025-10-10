import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}
export function ServiceCard({
  title,
  description,
  icon,
  link
}: ServiceCardProps) {
  return <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-base text-gray-500">{description}</p>
        </div>
      </div>
      <div className="px-4 py-4 sm:px-6">
        <Link to={link} className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500">
          Learn more <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>;
}