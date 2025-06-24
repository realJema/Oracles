'use client';

import { useState } from "react";
import Link from "next/link";

export default function DonatePage() {
  const [donationType, setDonationType] = useState('one-time');
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    anonymous: false
  });

  const predefinedAmounts = [
    { amount: '25', description: 'Textbooks for one student' },
    { amount: '50', description: 'School meals for one child/month' },
    { amount: '100', description: 'Classroom supplies for entire class' },
    { amount: '250', description: 'Teacher training workshop' },
    { amount: '500', description: 'Computer lab equipment' },
    { amount: '1000', description: 'Full scholarship for one year' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setDonorInfo(prev => ({ ...prev, [name]: target.checked }));
    } else if (name.startsWith('donor')) {
      const fieldName = name.replace('donor', '').toLowerCase();
      setDonorInfo(prev => ({ ...prev, [fieldName]: value }));
    } else {
      if (name === 'customAmount') {
        setCustomAmount(value);
      } else if (name === 'donationAmount') {
        setDonationAmount(value);
      }
    }
  };

  const handleDonation = () => {
    const amount = donationAmount === 'custom' ? customAmount : donationAmount;
    if (!amount || isNaN(Number(amount))) {
      alert('Please select or enter a valid donation amount');
      return;
    }
    
    // Integrate with payment processor (Paystack, Flutterwave, etc.)
    const donationData = {
      amount,
      type: donationType,
      donor: donorInfo
    };
    
    console.log('Donation data:', donationData);
    alert(`Redirecting to secure payment gateway for $${amount} ${donationType} donation`);
  };

  const impactStories = [
    {
      title: "Sarah's Success Story",
      description: "Thanks to our scholarship program, Sarah completed her primary education and is now excelling in secondary school.",
      impact: "Scholarship recipient"
    },
    {
      title: "New Computer Lab",
      description: "Community donations helped us establish a modern computer lab, bringing digital literacy to our students.",
      impact: "Technology advancement"
    },
    {
      title: "Teacher Training Program",
      description: "Ongoing donations support professional development for our teachers, enhancing educational quality.",
      impact: "Educational excellence"
    }
  ];

  const donationMethods = [
    {
      name: "Online Payment",
      description: "Secure online donations via Paystack or Flutterwave",
      icon: "💳"
    },
    {
      name: "Bank Transfer",
      description: "Direct bank transfer to our foundation account",
      icon: "🏦"
    },
    {
      name: "Mobile Money",
      description: "Mobile money transfer for convenient giving",
      icon: "📱"
    },
    {
      name: "In-Kind Donations",
      description: "Books, supplies, equipment, and other educational materials",
      icon: "📚"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your donation helps us provide quality education and create opportunities for children in our community
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Donation Form */}
            <div className="bg-white rounded-lg card-shadow-lg p-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Make a Donation</h2>
              
              {/* Donation Type */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">Donation Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`p-4 rounded-md border text-center font-medium transition-colors duration-200 ${
                      donationType === 'one-time'
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-accent'
                    }`}
                  >
                    One-Time Donation
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`p-4 rounded-md border text-center font-medium transition-colors duration-200 ${
                      donationType === 'monthly'
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-accent'
                    }`}
                  >
                    Monthly Donation
                  </button>
                </div>
              </div>

              {/* Donation Amount */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">Select Amount (USD)</label>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {predefinedAmounts.map((item) => (
                    <button
                      key={item.amount}
                      onClick={() => setDonationAmount(item.amount)}
                      className={`p-4 rounded-md border text-left transition-colors duration-200 ${
                        donationAmount === item.amount
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-accent'
                      }`}
                    >
                      <div className="font-bold">${item.amount}</div>
                      <div className="text-sm opacity-90">{item.description}</div>
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setDonationAmount('custom')}
                  className={`w-full p-4 rounded-md border text-center font-medium transition-colors duration-200 ${
                    donationAmount === 'custom'
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-accent'
                  }`}
                >
                  Custom Amount
                </button>
                
                {donationAmount === 'custom' && (
                  <div className="mt-4">
                    <input
                      type="number"
                      name="customAmount"
                      placeholder="Enter amount in USD"
                      value={customAmount}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              {/* Donor Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Donor Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="donorFirstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="donorFirstName"
                      name="donorFirstName"
                      required
                      value={donorInfo.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="donorLastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="donorLastName"
                      name="donorLastName"
                      required
                      value={donorInfo.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="donorEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="donorEmail"
                      name="donorEmail"
                      required
                      value={donorInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="donorPhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="donorPhone"
                      name="donorPhone"
                      value={donorInfo.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="donorOrganization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      id="donorOrganization"
                      name="donorOrganization"
                      value={donorInfo.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="anonymous"
                      checked={donorInfo.anonymous}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Make this donation anonymous</span>
                  </label>
                </div>
              </div>

              {/* Donation Button */}
              <button
                onClick={handleDonation}
                className="w-full bg-primary text-white py-4 px-6 rounded-md text-lg font-semibold hover:bg-primary-dark transition-colors duration-200 card-shadow"
              >
                Donate {donationAmount === 'custom' && customAmount ? `$${customAmount}` : donationAmount && donationAmount !== 'custom' ? `$${donationAmount}` : ''} Now
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Secure payment processing. You will receive a receipt via email.
              </p>
            </div>

            {/* Impact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg card-shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Your Impact</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">Education for All</h4>
                    <p className="text-gray-600">Your donation helps provide quality education to children who might not otherwise have access to it.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">Community Development</h4>
                    <p className="text-gray-600">Education creates ripple effects that strengthen entire communities and break cycles of poverty.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">Future Leaders</h4>
                    <p className="text-gray-600">You&apos;re investing in the next generation of leaders, innovators, and change-makers.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg card-shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">How We Use Donations</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Educational Programs</span>
                    <span className="font-semibold text-primary">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Infrastructure & Facilities</span>
                    <span className="font-semibold text-primary">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '25%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Teacher Training</span>
                    <span className="font-semibold text-primary">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '10%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Administrative Costs</span>
                    <span className="font-semibold text-primary">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '5%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Donate</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the donation method that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg card-shadow p-6 text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.name}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stories of Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how your donations are making a real difference in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg card-shadow-lg p-8">
                <div className="bg-accent rounded-lg h-32 mb-6 flex items-center justify-center">
                  <span className="text-gray-500">[Impact Photo]</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {story.impact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Giving */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Help</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              There are many ways to support our mission beyond monetary donations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg card-shadow p-8 text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-4">Share your skills and time to support our educational programs</p>
              <Link href="/contact" className="text-primary hover:underline font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg card-shadow p-8 text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Partnership</h3>
              <p className="text-gray-600 mb-4">Partner with us for CSR initiatives and employee engagement</p>
              <Link href="/contact" className="text-primary hover:underline font-medium">
                Partner With Us →
              </Link>
            </div>

            <div className="bg-white rounded-lg card-shadow p-8 text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 16V8a1 1 0 011-1h6a1 1 0 011 1v12M7 20H5a1 1 0 01-1-1V9a1 1 0 011-1h2m12 0h2a1 1 0 011 1v10a1 1 0 01-1 1h-2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spread the Word</h3>
              <p className="text-gray-600 mb-4">Help us reach more supporters by sharing our mission</p>
              <Link href="/foundation" className="text-primary hover:underline font-medium">
                Share Our Story →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
