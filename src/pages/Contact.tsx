import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Me</h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Get in touch for opportunities or just to say hi!
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <div className="prose max-w-none">
            <h3 className="text-lg font-medium text-gray-900">Get in touch</h3>
            <p className="mt-4 text-gray-500">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out through any of the following methods:
            </p>
          </div>
          
          <dl className="mt-8 space-y-6">
            <dt className="sr-only">Email</dt>
            <dd className="flex">
              <Mail className="h-6 w-6 text-gray-400" />
              <span className="ml-3 text-gray-500">craddock9richard@gmail.com</span>
            </dd>
            <dt className="sr-only">Phone</dt>
            <dd className="flex">
              <Phone className="h-6 w-6 text-gray-400" />
              <span className="ml-3 text-gray-500">+1 (610) 674 9272</span>
            </dd>
            <dt className="sr-only">Location</dt>
            <dd className="flex">
              <MapPin className="h-6 w-6 text-gray-400" />
              <span className="ml-3 text-gray-500">Allentown, PA</span>
            </dd>
          </dl>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-turquoise-500 focus:ring-turquoise-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-turquoise-500 focus:ring-turquoise-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-turquoise-500 focus:ring-turquoise-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-turquoise-600 hover:bg-turquoise-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-turquoise-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;