import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Activities & Events | Oracles School",
  description: "Discover the exciting activities, events, and programs that make learning fun at Oracles Nursery & Primary School.",
};

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Back to School Orientation",
      date: "September 15, 2024",
      time: "9:00 AM - 12:00 PM",
      description: "Welcome new students and parents to our school community",
      category: "School Event"
    },
    {
      title: "Annual Sports Day",
      date: "October 20, 2024",
      time: "8:00 AM - 4:00 PM",
      description: "Athletic competitions and fun activities for all age groups",
      category: "Sports"
    },
    {
      title: "Science Fair",
      date: "November 10, 2024",
      time: "10:00 AM - 2:00 PM",
      description: "Students showcase their scientific projects and experiments",
      category: "Academic"
    },
    {
      title: "Christmas Concert",
      date: "December 18, 2024",
      time: "6:00 PM - 8:00 PM",
      description: "Festive performances by our talented students",
      category: "Cultural"
    }
  ];

  const pastEvents = [
    {
      title: "Cultural Heritage Day",
      date: "May 15, 2024",
      description: "Students celebrated Cameroon's rich cultural diversity with traditional dances, foods, and costumes",
      images: 3
    },
    {
      title: "Inter-School Quiz Competition",
      date: "April 28, 2024",
      description: "Our team placed 2nd in the regional academic competition",
      images: 5
    },
    {
      title: "Earth Day Cleanup",
      date: "April 22, 2024",
      description: "Students and teachers worked together to clean the school environment",
      images: 4
    },
    {
      title: "Reading Week Celebration",
      date: "March 18-22, 2024",
      description: "A week-long celebration of literacy with storytelling and book fairs",
      images: 6
    }
  ];

  const regularActivities = [
    {
      title: "Morning Assembly",
      frequency: "Daily",
      time: "7:30 AM",
      description: "Start each day with prayers, announcements, and motivation"
    },
    {
      title: "Library Reading Hour",
      frequency: "Weekly",
      time: "Tuesdays, 2:00 PM",
      description: "Dedicated time for reading and developing literacy skills"
    },
    {
      title: "Art & Craft Workshop",
      frequency: "Weekly",
      time: "Fridays, 3:00 PM",
      description: "Creative expression through various art forms and crafts"
    },
    {
      title: "Physical Education",
      frequency: "Twice Weekly",
      time: "Mon & Thu, 11:00 AM",
      description: "Sports activities and physical fitness exercises"
    },
    {
      title: "Music & Drama Club",
      frequency: "Weekly",
      time: "Wednesdays, 3:00 PM",
      description: "Develop musical talents and performance skills"
    },
    {
      title: "Environmental Club",
      frequency: "Bi-weekly",
      time: "Alternate Fridays",
      description: "Learn about environmental conservation and sustainability"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Activities & Events
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Enriching experiences that make learning memorable and fun
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mark your calendar for these exciting upcoming events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block bg-accent text-primary px-2 py-1 rounded-full text-xs font-medium mb-2">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {event.date}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {event.time}
                  </p>
                </div>
                <p className="text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regular Activities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ongoing programs that enrich our students&apos; educational experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-primary font-medium">{activity.frequency}</p>
                  <p className="text-gray-600">{activity.time}</p>
                </div>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Event Highlights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent memorable events and activities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-primary/80 text-white px-2 py-1 rounded text-xs">
                    {event.images} photos
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                    <span className="text-gray-500 text-sm">{event.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <button className="text-primary hover:text-primary-dark font-medium">
                    View Photos →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              View Complete Photo Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Events We Host</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We organize diverse events to support different aspects of student development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Academic Events</h3>
              <p className="text-gray-600 text-sm">Science fairs, quiz competitions, and academic exhibitions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sports Events</h3>
              <p className="text-gray-600 text-sm">Sports days, inter-house competitions, and athletic meets</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cultural Events</h3>
              <p className="text-gray-600 text-sm">Cultural festivals, art exhibitions, and musical performances</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Events</h3>
              <p className="text-gray-600 text-sm">Family days, community service, and parent-teacher meetings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to Participate in Our Events?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our school community and be part of these exciting activities and events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Enroll Your Child
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Get More Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
