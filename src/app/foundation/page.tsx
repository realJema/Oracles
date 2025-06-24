'use client';

import Link from "next/link";
import { useState } from "react";

export default function FoundationPage() {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const predefinedAmounts = ['25', '50', '100', '250', '500'];

  const handleDonation = () => {
    const amount = donationAmount === 'custom' ? customAmount : donationAmount;
    if (!amount || isNaN(Number(amount))) {
      alert('Please enter a valid amount');
      return;
    }
    // Integrate with payment processor (Paystack, Flutterwave, etc.)
    alert(`Redirecting to payment gateway for $${amount} donation`);
  };

  const boardMembers = [
    {
      name: "[Founder Name]",
      role: "Founder & Chairman",
      description: "Visionary leader committed to educational excellence and community development"
    },
    {
      name: "[Board Member 1]",
      role: "Vice Chairman",
      description: "Education specialist with over 20 years of experience in curriculum development"
    },
    {
      name: "[Board Member 2]",
      role: "Secretary",
      description: "Community leader and advocate for children's rights and education"
    },
    {
      name: "[Board Member 3]",
      role: "Treasurer",
      description: "Financial expert ensuring transparent and responsible fund management"
    }
  ];

  const impactAreas = [
    {
      title: "Quality Education",
      description: "Providing accessible, high-quality education to children from all backgrounds",
      icon: "📚"
    },
    {
      title: "Infrastructure Development",
      description: "Building and maintaining modern school facilities and learning environments",
      icon: "🏫"
    },
    {
      title: "Teacher Training",
      description: "Continuous professional development for our teaching staff",
      icon: "👩‍🏫"
    },
    {
      title: "Community Outreach",
      description: "Educational programs and literacy initiatives for the broader community",
      icon: "🤝"
    },
    {
      title: "Technology Integration",
      description: "Bringing modern technology and digital literacy to our students",
      icon: "💻"
    },
    {
      title: "Scholarship Programs",
      description: "Supporting deserving students who need financial assistance",
      icon: "🎓"
    }
  ];

  const donationImpacts = [
    { amount: "$25", impact: "Provides textbooks for one student for a semester" },
    { amount: "$50", impact: "Funds school meals for one child for a month" },
    { amount: "$100", impact: "Supports classroom supplies for an entire class" },
    { amount: "$250", impact: "Funds teacher training workshops" },
    { amount: "$500", impact: "Provides technology equipment for the computer lab" },
    { amount: "$1000", impact: "Sponsors a full scholarship for one student per year" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Essungue Ejuma Foundation
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Transforming communities through education and empowering the next generation of leaders
            </p>
          </div>
        </div>
      </section>

      {/* Foundation Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mission</h3>
                  <p className="text-lg text-gray-600">
                    To provide quality, accessible education that empowers children and youth to reach their 
                    full potential while contributing positively to their communities and society at large.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vision</h3>
                  <p className="text-lg text-gray-600">
                    A world where every child, regardless of their background, has access to quality education 
                    that prepares them for a successful and meaningful life.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Core Values</h3>
                  <ul className="text-lg text-gray-600 space-y-2">
                    <li>• <strong>Excellence:</strong> Striving for the highest standards in all we do</li>
                    <li>• <strong>Inclusivity:</strong> Welcoming children from all backgrounds</li>
                    <li>• <strong>Integrity:</strong> Operating with transparency and accountability</li>
                    <li>• <strong>Innovation:</strong> Embracing new approaches to education</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center">
                [Foundation Image]<br />
                <span className="text-sm">Add foundation or community photo here</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work across multiple areas to create lasting positive change in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals leading our mission to transform education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm text-center">Photo</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your donation helps us continue providing quality education and opportunities to children in need
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Make a Donation</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Amount</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setDonationAmount(amount)}
                        className={`p-3 rounded-md border text-center font-medium transition-colors duration-200 ${
                          donationAmount === amount
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-accent'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setDonationAmount('custom')}
                    className={`w-full p-3 rounded-md border text-center font-medium transition-colors duration-200 ${
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
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="radio" name="frequency" value="once" defaultChecked className="mr-2 text-primary" />
                    <span className="text-gray-700">One-time donation</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="frequency" value="monthly" className="mr-2 text-primary" />
                    <span className="text-gray-700">Monthly donation</span>
                  </label>
                </div>

                <button
                  onClick={handleDonation}
                  className="w-full bg-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-dark transition-colors duration-200"
                >
                  Donate Now
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Secure payment processing via Paystack/Flutterwave
                </p>
              </div>
            </div>

            {/* Donation Impact */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Your Impact</h3>
              <div className="space-y-4">
                {donationImpacts.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">{item.amount}</span>
                    </div>
                    <div>
                      <p className="text-gray-700">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Future Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expanding our impact through additional community development initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secondary School</h3>
              <p className="text-gray-600">Planning to expand with a secondary school to provide continuous education pathways</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Adult Literacy Program</h3>
              <p className="text-gray-600">Community education programs for adults who missed formal education opportunities</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vocational Training</h3>
              <p className="text-gray-600">Skills training programs to empower youth and adults with practical career skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Donation FAQ</h2>
            <p className="text-lg text-gray-600">Common questions about supporting our foundation</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How are donations used?</h3>
              <p className="text-gray-600">All donations go directly to supporting our educational programs, facility improvements, teacher training, and student scholarships. We maintain full transparency in our financial reporting.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are donations tax-deductible?</h3>
              <p className="text-gray-600">As a registered non-profit organization, donations may be tax-deductible. Please consult with your tax advisor and request a donation receipt for your records.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I donate in-kind items?</h3>
              <p className="text-gray-600">Yes! We welcome donations of books, educational materials, computers, and other school supplies. Please contact us to coordinate in-kind donations.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I stay updated on the foundation&apos;s progress?</h3>
              <p className="text-gray-600">We send regular updates to our donors and supporters. You can also follow our progress through our website and social media channels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Us in Transforming Lives Through Education
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we can create opportunities and build a brighter future for our community&apos;s children
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#donate"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
