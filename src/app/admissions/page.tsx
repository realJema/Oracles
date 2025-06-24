'use client';

import Link from "next/link";
import { useState } from "react";

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    email: '',
    phone: '',
    classApplying: '',
    childAge: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
  };

  const admissionSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete and submit the online application form with required information"
    },
    {
      step: 2,
      title: "Document Review",
      description: "Our admissions team reviews your application and supporting documents"
    },
    {
      step: 3,
      title: "School Visit",
      description: "Schedule a visit to tour our facilities and meet with our staff"
    },
    {
      step: 4,
      title: "Assessment",
      description: "Child participates in age-appropriate assessment activities"
    },
    {
      step: 5,
      title: "Enrollment",
      description: "Upon acceptance, complete enrollment and prepare for the school year"
    }
  ];

  const requirements = [
    "Birth Certificate (original and photocopy)",
    "Recent passport-sized photographs (4 copies)",
    "Immunization records",
    "Previous school records (if applicable)",
    "Parent/Guardian identification",
    "Proof of residence"
  ];

  const feeStructure = [
    { item: "Registration Fee", amount: "[Amount]", note: "One-time payment" },
    { item: "Tuition Fee (Per Term)", amount: "[Amount]", note: "3 terms per year" },
    { item: "Books & Materials", amount: "[Amount]", note: "Per academic year" },
    { item: "Uniform", amount: "[Amount]", note: "One-time purchase" },
    { item: "Feeding (Optional)", amount: "[Amount]", note: "Per term" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Admissions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Join our school family and give your child the foundation for a bright future
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our straightforward admission process is designed to be simple and stress-free
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
              <p className="text-lg text-gray-600 mb-8">
                Please ensure you have all the following documents ready for a smooth admission process:
              </p>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Dates</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-gray-900">Registration Period</h3>
                    <p className="text-gray-600">[Month] - [Month] [Year]</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-gray-900">Assessment Period</h3>
                    <p className="text-gray-600">[Month] [Year]</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-gray-900">School Resumption</h3>
                    <p className="text-gray-600">[Month] [Day], [Year]</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-gray-900">Orientation Day</h3>
                    <p className="text-gray-600">[Month] [Day], [Year]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fee Structure</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent and affordable fees for quality education
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-6">
                <h3 className="text-xl font-semibold">Academic Year [Year] Fee Structure</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 text-gray-900 font-semibold">Item</th>
                        <th className="text-left py-3 px-4 text-gray-900 font-semibold">Amount</th>
                        <th className="text-left py-3 px-4 text-gray-900 font-semibold">Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeStructure.map((fee, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="py-3 px-4 text-gray-700">{fee.item}</td>
                          <td className="py-3 px-4 text-gray-700 font-medium">{fee.amount}</td>
                          <td className="py-3 px-4 text-gray-600 text-sm">{fee.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-accent rounded-lg">
                                      <p className="text-sm text-primary">
                    <strong>Note:</strong> Fees are subject to review annually. Payment plans are available. 
                    Please contact the school office for more information about scholarships and financial assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Form</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your child&apos;s journey with us by completing this application form
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                      Child&apos;s Full Name *
                    </label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      required
                      value={formData.childName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                      Child&apos;s Age *
                    </label>
                    <input
                      type="number"
                      id="childAge"
                      name="childAge"
                      required
                      min="3"
                      max="12"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="classApplying" className="block text-sm font-medium text-gray-700 mb-2">
                    Class Applying For *
                  </label>
                  <select
                    id="classApplying"
                    name="classApplying"
                    required
                    value={formData.classApplying}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select a class</option>
                    <option value="nursery1">Nursery 1</option>
                    <option value="nursery2">Nursery 2</option>
                    <option value="class1">Class 1</option>
                    <option value="class2">Class 2</option>
                    <option value="class3">Class 3</option>
                    <option value="class4">Class 4</option>
                    <option value="class5">Class 5</option>
                    <option value="class6">Class 6</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please share any special needs, previous school experience, or other relevant information..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                    I agree to the school&apos;s terms and conditions and privacy policy
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-dark transition-colors duration-200"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for More Info */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need More Information?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our admissions team is here to help you through every step of the process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Admissions Office
            </Link>
            <Link
              href="/school"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Learn More About Our School
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
