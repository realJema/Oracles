import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Inspired by Northbound with educational imagery */}
      <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary/40"></div>
          {/* Decorative shapes */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 bg-accent/30 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/15 rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Offering <span className="text-accent italic font-light">excellence</span><br />
                in education
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-primary-light">
                We nurture young minds through comprehensive education, building the foundation 
                for tomorrow&apos;s leaders at Oracles Nursery & Primary School.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/enroll"
                  className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-200 text-center shadow-lg"
                >
                  Begin Enrollment →
                </Link>
                <Link
                  href="/school"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 text-center"
                >
                  Discover Our School
                </Link>
              </div>
            </div>
            
            <div className="relative">
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
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">6</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Primary Classes</div>
                    <div className="text-gray-600">Nursery 1 to Primary 6</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-accent/20 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Oracles School?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a nurturing environment where every child can discover their potential and excel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Diverse group of children studying together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
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
              <Link
                href="/school"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 inline-block shadow-lg"
              >
                Discover Our Approach →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              School Life & Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the exciting activities and events that make learning fun and memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Activity Cards */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576334761529-0c2708b86c7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Students performing in school play"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cultural Events</h3>
              <p className="text-gray-600">Annual cultural festivals, drama performances, and art exhibitions showcase student creativity.</p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Students in sports activities"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sports & Games</h3>
              <p className="text-gray-600">Physical education and team sports develop coordination and team spirit.</p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Students in science lab"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning Activities</h3>
              <p className="text-gray-600">Hands-on experiments and interactive learning sessions make education engaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Begin Your Child&apos;s Journey With Us
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our school family and give your child the foundation for a bright future through quality education and comprehensive development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/enroll"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 text-center shadow-lg"
              >
                Apply Now →
              </Link>
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-primary transition-colors duration-200 text-center shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
