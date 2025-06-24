'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FoundationPage() {
  const impactAreas = [
    {
      title: "Quality Education",
      description: "Providing accessible, high-quality education to children from all backgrounds in Cameroon",
      icon: "📚",
      stats: "200+ students benefiting annually"
    },
    {
      title: "Infrastructure Development",
      description: "Building and maintaining modern school facilities with technology-enabled classrooms",
      icon: "🏫",
      stats: "6 classrooms fully equipped"
    },
    {
      title: "Teacher Training",
      description: "Professional development programs following Cameroon Ministry of Education standards",
      icon: "👩‍🏫",
      stats: "15+ teachers trained"
    },
    {
      title: "Community Outreach",
      description: "Educational programs and literacy initiatives for the broader Cameroonian community",
      icon: "🤝",
      stats: "500+ community members reached"
    },
    {
      title: "Technology Integration",
      description: "Bringing modern technology and digital literacy to prepare students for the future",
      icon: "💻",
      stats: "1 computer lab established"
    },
    {
      title: "Scholarship Programs",
      description: "Supporting deserving students from underprivileged backgrounds in Cameroon",
      icon: "🎓",
      stats: "20+ scholarships awarded"
    }
  ];

  const achievements = [
    {
      year: "2019",
      title: "Foundation Establishment",
      description: "Launched with the vision of transforming education in Cameroon"
    },
    {
      year: "2020",
      title: "First School Opening",
      description: "Opened Oracles Nursery & Primary School with 50 students"
    },
    {
      year: "2021",
      title: "Technology Initiative",
      description: "Established first computer lab for digital literacy"
    },
    {
      year: "2022",
      title: "Community Programs",
      description: "Launched adult literacy and community education programs"
    },
    {
      year: "2023",
      title: "Infrastructure Expansion",
      description: "Added new classrooms and modern learning facilities"
    }
  ];

  const futureProjects = [
    {
      title: "Secondary School Development",
      description: "Planning to establish a secondary school to provide continuous education pathway",
      timeline: "2024-2025",
      icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    },
    {
      title: "Vocational Training Center",
      description: "Creating a vocational training center for practical skills development",
      timeline: "2025",
      icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
      </svg>
    },
    {
      title: "Digital Learning Hub",
      description: "Establishing a digital learning center with advanced technology resources",
      timeline: "2024",
      icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Essungue Ejuma Foundation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            >
              Transforming communities through education and empowering the next generation of leaders in Cameroon
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mission</h3>
                  <p className="text-lg text-gray-600">
                    To provide quality, accessible education that empowers children and youth in Cameroon 
                    to reach their full potential while contributing positively to their communities and society at large.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vision</h3>
                  <p className="text-lg text-gray-600">
                    A Cameroon where every child, regardless of their background, has access to quality education 
                    that prepares them for a successful and meaningful life.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Core Values</h3>
                  <ul className="text-lg text-gray-600 space-y-2">
                    <li>• <strong>Excellence:</strong> Striving for the highest standards in education</li>
                    <li>• <strong>Inclusivity:</strong> Welcoming children from all backgrounds</li>
                    <li>• <strong>Integrity:</strong> Operating with transparency and accountability</li>
                    <li>• <strong>Innovation:</strong> Embracing new approaches to education</li>
                    <li>• <strong>Community:</strong> Building strong partnerships with local communities</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
                alt="Students learning in a classroom"
                fill
                className="object-cover"
              />
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
              Making a lasting difference in Cameroonian education through targeted initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="text-primary font-semibold">{area.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Approach & Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Educational Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Combining Cameroon&apos;s educational excellence with modern teaching methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Educational Standards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Excellence</h3>
                  <p className="text-gray-600 mb-4">
                    Following Cameroon&apos;s Anglophone education system, preparing students for success
                    through comprehensive learning and development.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      GCE Board Standards
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Common Entrance Preparation
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      First School Leaving Certificate
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Curriculum */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Curriculum</h3>
                  <p className="text-gray-600 mb-4">
                    Our curriculum aligns with both Cameroonian and international educational standards, 
                    offering a rich learning experience.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Core Academic Subjects
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Cultural & Arts Education
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Digital Literacy
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Partnerships */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Partnerships</h3>
                  <p className="text-gray-600 mb-4">
                    We work closely with local and international organizations to enhance educational opportunities.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Local Community Leaders
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Educational NGOs
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Government Institutions
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Teacher Development */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m14-10a4 4 0 100-8 4 4 0 000 8zm-7 4a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Teacher Excellence</h3>
                  <p className="text-gray-600 mb-4">
                    Continuous professional development ensures our teachers remain at the forefront of educational practices.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Regular Training Programs
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Modern Teaching Methods
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Mentorship Programs
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline of Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestones in our mission to transform education in Cameroon
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                >
                  <div className="w-1/2 bg-white rounded-lg shadow-lg p-6">
                    <div className="text-primary font-bold mb-2">{achievement.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Future Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expanding our impact through additional community development initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureProjects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{project.description}</p>
                <div className="text-primary text-center font-semibold">Timeline: {project.timeline}</div>
              </motion.div>
            ))}
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
            Together, we can create opportunities and build a brighter future for Cameroon&apos;s children
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Involved
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
