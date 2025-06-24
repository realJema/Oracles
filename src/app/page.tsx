'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Inspired by Northbound with educational imagery */}
      <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary/40"></div>
          {/* Animated decorative shapes */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-20 right-20 w-32 h-32 bg-white/20 rounded-full"
          />
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute bottom-40 left-10 w-24 h-24 bg-accent/30 rounded-full"
          />
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/15 rounded-full"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Offering <span className="text-accent italic font-light">excellence</span><br />
                in education
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90">
                We nurture young minds through comprehensive education, building the foundation 
                for tomorrow&apos;s leaders at Oracles Nursery & Primary School.
              </p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/enroll"
                  className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-200 text-center shadow-lg transform hover:scale-105"
                >
                  Begin Enrollment →
                </Link>
                <Link
                  href="/school"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 text-center transform hover:scale-105"
                >
                  Discover Our School
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Happy children learning in classroom"
                  fill
                  className="object-cover"
          priority
        />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              {/* Floating card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">6</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Primary Classes</div>
                    <div className="text-gray-600">Nursery 1 to Primary 6</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              variants={fadeIn}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600">Students</div>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Teachers</div>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-gray-600">Years Experience</div>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* New Section: Educational Approach */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Educational Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in a holistic approach to education that nurtures both academic excellence and character development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Learning</h3>
              <p className="text-gray-600">
                We adapt our teaching methods to each child&apos;s unique learning style and pace, ensuring every student reaches their full potential.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Character Development</h3>
              <p className="text-gray-600">
                Beyond academics, we focus on building strong moral values, leadership skills, and social responsibility.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation & Creativity</h3>
              <p className="text-gray-600">
                Our curriculum encourages creative thinking, problem-solving, and innovation through hands-on learning experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with Animation */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Oracles Nursery & Primary School?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a nurturing environment where every child can discover their potential and excel
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Students reading books in library"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Excellence</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive curriculum designed to develop critical thinking and academic proficiency through innovative teaching methods.</p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Teacher helping student with homework"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Faculty</h3>
              <p className="text-gray-600 leading-relaxed">Highly qualified educators committed to nurturing each child&apos;s potential with personalized attention and care.</p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Children playing and learning together"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Character Development</h3>
              <p className="text-gray-600 leading-relaxed">Building integrity, leadership, and moral values alongside academic achievement in a supportive environment.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission Statement with Parallax Effect */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-primary/5 to-accent/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Diverse group of children studying together"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Oracles Nursery & Primary School, we believe every child deserves quality education 
                that nurtures their intellectual, emotional, and social development. We are committed to 
                creating an environment where children can explore, learn, and grow into confident, 
                responsible citizens.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through our comprehensive curriculum and dedicated teaching staff, we prepare our students 
                for success in their academic journey and beyond, fostering creativity, critical thinking, 
                and strong moral values.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/school"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 inline-block shadow-lg"
                >
                  Discover Our Approach →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* New Section: Latest News & Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest News & Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest happenings at Oracles Nursery & Primary School
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48">
          <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Annual Sports Day"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary mb-2">March 15, 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Annual Sports Day</h3>
                <p className="text-gray-600 mb-4">Join us for a day of athletic excellence and friendly competition.</p>
                <Link href="/events" className="text-primary hover:text-primary-dark font-medium">
                  Learn More →
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48">
          <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Science Fair"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary mb-2">March 22, 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Science Fair 2024</h3>
                <p className="text-gray-600 mb-4">Discover amazing projects by our young scientists.</p>
                <Link href="/events" className="text-primary hover:text-primary-dark font-medium">
                  Learn More →
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48">
          <Image
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Cultural Day"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary mb-2">March 29, 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Day Celebration</h3>
                <p className="text-gray-600 mb-4">Experience the rich cultural diversity of our school community.</p>
                <Link href="/events" className="text-primary hover:text-primary-dark font-medium">
                  Learn More →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action with Animation */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-primary/5 to-accent/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Begin Your Child&apos;s Journey With Us
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Join our school family and give your child the foundation for a bright future through quality education and comprehensive development.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/enroll"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 text-center shadow-lg inline-block"
                >
                  Apply Now →
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-primary transition-colors duration-200 text-center shadow-lg inline-block"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
