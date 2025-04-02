import React from "react";
import { Mail, Phone, MapPin, CreditCard, Building2, Hash } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-9">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-8 text-blue-700 flex items-center">
            <Building2 className="mr-2" />
            Bank Details
          </h2>

          <div className="space-y-6">
            <div className="flex items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <div className="flex-shrink-0">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-800">Account Name</h3>
                <p className="text-gray-700 font-semibold">
                  Leaf International
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <div className="flex-shrink-0">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-800">Bank Name</h3>
                <p className="text-gray-700 font-semibold">Bank Of Baroda</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <div className="flex-shrink-0">
                <Hash className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-800">Account Number</h3>
                <p className="text-gray-700 font-semibold">89850200000205</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <div className="flex-shrink-0">
                <Hash className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-800">IFSC Code</h3>
                <p className="text-gray-700 font-semibold">BARB0ROHINI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-8 text-blue-700 flex items-center">
            <Phone className="mr-2" />
            Contact Information
          </h2>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-800">Address</h3>
                <p className="text-gray-600 mt-1">
                  P-84 CSA Colony,
                  <br />
                  Kishanganj,
                  <br />
                  Delhi 110007
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600 mt-1">+91 9868840872</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-800">Email</h3>
                <p className="text-gray-600 mt-1">infoleafdelhi@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
