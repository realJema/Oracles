'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';

export default function AdmissionsPage() {
  const admissionRequirements = [
    {
      title: "Age Requirements",
      description: "Following Cameroon Ministry of Education guidelines:",
      items: [
        "Nursery 1: 3-4 years",
        "Nursery 2: 4-5 years",
        "Nursery 3: 5-6 years",
        "Primary 1-6: 6-12 years"
      ]
    },
    {
      title: "Required Documents",
      description: "Essential documentation for enrollment:",
      items: [
        "Birth Certificate",
        "Previous School Records (if applicable)",
        "Immunization Records",
        "2 Passport Photos",
        "Parent/Guardian ID"
      ]
    },
    {
      title: "Academic Year",
      description: "Following the Cameroon academic calendar:",
      items: [
        "First Term: September - December",
        "Second Term: January - March",
        "Third Term: April - June",
        "Annual Holidays: July - August"
      ]
    }
  ];

  const educationalSystem = [
    {
      title: "Anglophone Education",
      description: "Following the English-speaking subsystem of education in Cameroon",
      features: [
        "English as the language of instruction",
        "Common Entrance examination preparation",
        "First School Leaving Certificate (FSLC)",
        "Aligned with Cameroon GCE Board standards",
        "Focus on core subjects and practical skills",
        "Integration of local and international curriculum elements"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Admissions at Oracles Nursery & Primary School
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Join our educational community where we nurture young minds through 
              excellence in Anglophone education.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Educational System */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Educational System</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Following Cameroon&apos;s Anglophone education system with modern teaching methods
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {educationalSystem.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{system.title}</h3>
                <p className="text-gray-600 mb-6">{system.description}</p>
                <ul className="space-y-3">
                  {system.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about joining our school community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {admissionRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{requirement.title}</h3>
                <p className="text-gray-600 mb-4">{requirement.description}</p>
                <ul className="space-y-3">
                  {requirement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enrollment Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to join our educational community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600">
                Reach out to our admissions office to express interest
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">School Visit</h3>
              <p className="text-gray-600">
                Schedule a visit to tour our facilities and meet our staff
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Documents</h3>
              <p className="text-gray-600">
                Provide all required documentation for enrollment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirmation</h3>
              <p className="text-gray-600">
                Receive enrollment confirmation and welcome package
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Begin Your Child&apos;s Educational Journey
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our admissions process and schedule a visit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Admissions
            </Link>
            <Link
              href="/enroll"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Start Enrollment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
