'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'classroom', name: 'Classroom' },
    { id: 'events', name: 'Events' },
    { id: 'sports', name: 'Sports' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'facilities', name: 'Facilities' }
  ];

  const galleryItems = [
    { 
      id: 1, 
      category: 'classroom', 
      title: 'Mathematics Class', 
      description: 'Students engaged in interactive math learning',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 2, 
      category: 'events', 
      title: 'Science Fair', 
      description: 'Annual science exhibition showcasing student projects',
      image: 'https://images.unsplash.com/photo-1532153955177-f59af40d6472?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 3, 
      category: 'sports', 
      title: 'Sports Day', 
      description: 'Annual sports competition and fun activities',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 4, 
      category: 'cultural', 
      title: 'Cultural Day', 
      description: 'Celebrating diversity through traditional performances',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 5, 
      category: 'facilities', 
      title: 'School Library', 
      description: 'Our well-stocked library for reading enthusiasts',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 6, 
      category: 'classroom', 
      title: 'Art Class', 
      description: 'Creative expression through arts and crafts',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 7, 
      category: 'events', 
      title: 'Graduation Ceremony', 
      description: 'Celebrating our Primary 6 graduates',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 8, 
      category: 'sports', 
      title: 'Football Match', 
      description: 'Inter-house football competition',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 9, 
      category: 'cultural', 
      title: 'Music Performance', 
      description: 'Students showcasing musical talents',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 10, 
      category: 'facilities', 
      title: 'Computer Lab', 
      description: 'Modern computer lab for digital literacy',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 11, 
      category: 'classroom', 
      title: 'Science Experiment', 
      description: 'Hands-on learning in the science lab',
      image: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 12, 
      category: 'events', 
      title: 'Parent-Teacher Meeting', 
      description: 'Collaborative discussions about student progress',
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Capturing moments of learning, growth, and joy at Oracles School
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-br from-primary/5 to-accent/20 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-accent hover:text-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-gradient-to-br from-primary/5 to-accent/20 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover-lift">
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">School Videos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our students in action through these memorable video moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="School building tour"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-95 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">School Tour</h3>
                <p className="text-gray-600 text-sm">Take a virtual tour of our modern school facilities</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Cultural performance"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-95 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Day Highlights</h3>
                <p className="text-gray-600 text-sm">Watch our students showcase their talents</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Science lab activities"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-95 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Learning in Action</h3>
                <p className="text-gray-600 text-sm">See our interactive learning approach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Upload Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Memories</h2>
            <p className="text-lg text-gray-600 mb-6">
              Do you have photos from school events that you&apos;d like to share with our community?
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 shadow-lg">
              Submit Photos →
            </button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Photos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Events Captured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600">Videos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-gray-600">Years of Memories</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
