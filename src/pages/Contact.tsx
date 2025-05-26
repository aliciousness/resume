import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const lambdaUrl = process.env.LAMBDA_URL || 'https://lambda-function-url.lambda-url.region.amazonaws.com';
    
    try {
      const response = await fetch(lambdaUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern animate-grid" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Let's discuss what's next!
          </p>
        </motion.div>
        {/* Original Contact Form layout */}
        {/* <div className="mt-12 grid grid-cols-1 gap-8 max-w-xl mx-auto"> */}
        <div className="mt-12 grid grid-cols-1 gap-8 max-w-xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm shadow-xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="group">
                <label className="block text-sm font-medium text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-600 bg-gray-700/50 text-white shadow-sm focus:border-turquoise-500 focus:ring-turquoise-500 transition-all duration-200"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-600 bg-gray-700/50 text-white shadow-sm focus:border-turquoise-500 focus:ring-turquoise-500 transition-all duration-200"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-200">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-600 bg-gray-700/50 text-white shadow-sm focus:border-turquoise-500 focus:ring-turquoise-500 transition-all duration-200"
                  rows={4}
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-lg font-medium text-white bg-gradient-to-r from-turquoise-500 to-turquoise-700 hover:from-turquoise-600 hover:to-turquoise-800 shadow-lg hover:shadow-xl transition-all duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              {submitStatus === 'success' && <p className="text-green-500 mt-2">Message sent successfully!</p>}
              {submitStatus === 'error' && <p className="text-red-500 mt-2">Failed to send message. Please try again.</p>}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:pl-8"
          >
            {/* Leaving commented out because the contact info is not being used currently
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-turquoise-500/10 rounded-lg">
                    <Mail className="h-6 w-6 text-turquoise-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-300">craddock9richard@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-turquoise-500/10 rounded-lg">
                    <Phone className="h-6 w-6 text-turquoise-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="mt-1 text-gray-300">+1 (610) 674 9272</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-turquoise-500/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-turquoise-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="mt-1 text-gray-300">Allentown, Pennsylvania</p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;