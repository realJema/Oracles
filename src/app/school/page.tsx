import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Oracles School | Essungue Ejuma Foundation",
  description: "Learn about our comprehensive curriculum, dedicated staff, and excellent facilities at Oracles Nursery & Primary School.",
};

export default function SchoolPage() {
  const classLevels = [
    { name: "Nursery 1", age: "3-4 years", description: "Introduction to structured learning through play-based activities" },
    { name: "Nursery 2", age: "4-5 years", description: "Pre-reading skills, basic math concepts, and social development" },
    { name: "Class 1", age: "5-6 years", description: "Foundation literacy and numeracy skills" },
    { name: "Class 2", age: "6-7 years", description: "Building reading fluency and mathematical understanding" },
    { name: "Class 3", age: "7-8 years", description: "Expanding knowledge across all subjects with creative expression" },
    { name: "Class 4", age: "8-9 years", description: "Developing critical thinking and problem-solving skills" },
    { name: "Class 5", age: "9-10 years", description: "Advanced concepts and preparation for final primary year" },
    { name: "Class 6", age: "10-11 years", description: "Comprehensive preparation for secondary education" },
  ];

  const facilities = [
    { name: "Modern Classrooms", description: "Well-equipped learning spaces with adequate lighting and ventilation" },
    { name: "Playground", description: "Safe outdoor space for physical activities and recreation" },
    { name: "Library", description: "Collection of age-appropriate books to encourage reading" },
    { name: "Computer Lab", description: "Introduction to digital literacy and technology skills" },
    { name: "Science Lab", description: "Hands-on experiments and practical learning" },
    { name: "Art Studio", description: "Creative space for artistic expression and development" },
  ];

  const values = [
    { title: "Excellence", description: "We strive for the highest standards in education and character development" },
    { title: "Creativity", description: "We encourage innovative thinking and artistic expression" },
    { title: "Discipline", description: "We instill self-control, responsibility, and respect for others" },
    { title: "Integrity", description: "We promote honesty, fairness, and moral uprightness" },
    { title: "Community", description: "We foster a sense of belonging and mutual support" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Oracles Nursery & Primary School
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Where young minds are nurtured, talents are discovered, and futures are shaped
            </p>
          </div>
        </div>
      </section>

      {/* School History & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision & History</h2>
              <p className="text-lg text-gray-600 mb-6">
                Oracles Nursery & Primary School was founded with a vision to provide quality, 
                affordable education to children in our community. We believe that every child 
                deserves the opportunity to learn, grow, and achieve their full potential regardless 
                of their background.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our school has grown from humble beginnings to become a trusted institution 
                where parents confidently entrust their children&apos;s education. We are committed to 
                maintaining high standards while keeping education accessible to all families.
              </p>
              <p className="text-lg text-gray-600">
                Under the umbrella of the Essungue Ejuma Foundation, we continue to expand our 
                impact and reach more children who need quality education.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern school building exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Head Teacher Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Message from Our Head Teacher</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                    alt="Head Teacher"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    &quot;At Oracles School, we are not just teaching subjects; we are shaping the leaders 
                    of tomorrow. Our dedicated team works tirelessly to ensure that each child receives 
                    personalized attention and develops both academically and morally. We believe in the 
                    potential of every child and are committed to helping them discover and nurture their 
                    unique talents.&quot;
                  </blockquote>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">[Head Teacher Name]</p>
                    <p className="text-gray-600">Head Teacher, Oracles Nursery & Primary School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Levels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Class Levels</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive education from Nursery 1 through Primary 6, ensuring a smooth 
              progression through each developmental stage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{level.name}</h3>
                <p className="text-primary font-medium mb-3">{level.age}</p>
                <p className="text-gray-600 text-sm">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A well-rounded education that balances academics with character development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Core Subjects</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• English Language & Literature</li>
                <li>• Mathematics</li>
                <li>• Science</li>
                <li>• Social Studies</li>
                <li>• French Language</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Creative Arts</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Visual Arts & Crafts</li>
                <li>• Music & Songs</li>
                <li>• Drama & Performance</li>
                <li>• Cultural Studies</li>
                <li>• Creative Writing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Life Skills</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Physical Education</li>
                <li>• Computer Basics</li>
                <li>• Moral Education</li>
                <li>• Environmental Studies</li>
                <li>• Leadership Skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* School Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our educational philosophy and daily operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">{value.title.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern facilities designed to support effective learning and development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Give Your Child the Best Education?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our school family and watch your child thrive in our nurturing environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-200"
            >
              Apply for Admission
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
