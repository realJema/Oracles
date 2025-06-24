'use client';

import { useState } from "react";

export default function EnrollPage() {
  const [formData, setFormData] = useState({
    // Child Information
    childName: '',
    childAge: '',
    classApplying: '',
    
    // Parent Information
    parentName: '',
    email: '',
    phone: '',
    
    // Additional Information
    previousSchool: '',
    message: '',
    
    // Terms
    terms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enrollment application submitted:', formData);
    alert('Enrollment application submitted successfully! We will contact you within 48 hours.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Begin Your Child&apos;s Educational Journey
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Take the first step towards excellence in education at Oracles Nursery & Primary School
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment Process Overview */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Simple Enrollment Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Complete Application</h3>
              <p className="text-gray-600 text-sm">Fill out the enrollment form below</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Review & Assessment</h3>
              <p className="text-gray-600 text-sm">We review your application and schedule an assessment</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Welcome to School</h3>
              <p className="text-gray-600 text-sm">Upon acceptance, complete enrollment and start learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-primary text-white p-8">
              <h2 className="text-3xl font-bold mb-2">Enrollment Application</h2>
              <p className="text-primary-light">Secure your child&apos;s place in our next academic session</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Child Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Child&apos;s Information
                </h3>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter child&apos;s full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                      Child&apos;s Age *
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      required
                      value={formData.childAge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select age</option>
                      <option value="3">3 years</option>
                      <option value="4">4 years</option>
                      <option value="5">5 years</option>
                      <option value="6">6 years</option>
                      <option value="7">7 years</option>
                      <option value="8">8 years</option>
                      <option value="9">9 years</option>
                      <option value="10">10 years</option>
                      <option value="11">11 years</option>
                      <option value="12">12+ years</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="classApplying" className="block text-sm font-medium text-gray-700 mb-2">
                      Class Applying For *
                    </label>
                    <select
                      id="classApplying"
                      name="classApplying"
                      required
                      value={formData.classApplying}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select class</option>
                      <option value="nursery1">Nursery 1</option>
                      <option value="nursery2">Nursery 2</option>
                      <option value="nursery3">Nursery 3</option>
                      <option value="primary1">Primary 1</option>
                      <option value="primary2">Primary 2</option>
                      <option value="primary3">Primary 3</option>
                      <option value="primary4">Primary 4</option>
                      <option value="primary5">Primary 5</option>
                      <option value="primary6">Primary 6</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Parent/Guardian Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter parent/guardian name"
                    />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter email address"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Additional Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700 mb-2">
                      Previous School (if any)
                    </label>
                    <input
                      type="text"
                      id="previousSchool"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter previous school name"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Comments or Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Any additional information you&apos;d like to share..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    checked={formData.terms}
                    onChange={handleInputChange}
                    className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the <a href="#" className="text-primary hover:text-primary-dark font-medium">terms and conditions</a> and 
                    understand that this application does not guarantee admission. I acknowledge that additional documents 
                    may be required and that an assessment may be conducted.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg"
                >
                  Submit Enrollment Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Your Application?</h2>
          <p className="text-gray-600 mb-6">
            Our admissions team is here to assist you throughout the enrollment process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              Call Us: +234 XXX XXX XXXX
            </a>
            <a
              href="mailto:admissions@oraclesschool.edu"
              className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Email Admissions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 
