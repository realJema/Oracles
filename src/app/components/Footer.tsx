import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.jpg"
                  alt="Essungue Ejuma Foundation Logo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="text-xl font-bold">Essungue Ejuma Foundation</div>
                <div className="text-sm text-gray-300">Oracles Nursery & Primary School</div>
              </div>
            </div>
            <p className="text-primary-light mb-6 max-w-md leading-relaxed">
              Empowering minds and building futures through quality education. 
              We provide a safe, nurturing environment where children from Nursery to Primary 6 
              can learn, grow, and develop their full potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-light/80 hover:text-white transition-colors duration-200" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-primary-light/80 hover:text-white transition-colors duration-200" aria-label="WhatsApp">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
                </svg>
              </a>
              <a href="#" className="text-primary-light/80 hover:text-white transition-colors duration-200" aria-label="Email">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/school" className="text-primary-light hover:text-white transition-colors duration-200 block">Our School</Link></li>
              <li><Link href="/foundation" className="text-primary-light hover:text-white transition-colors duration-200 block">The Foundation</Link></li>
              <li><Link href="/admissions" className="text-primary-light hover:text-white transition-colors duration-200 block">Admissions</Link></li>
              <li><Link href="/events" className="text-primary-light hover:text-white transition-colors duration-200 block">Activities & Events</Link></li>
              <li><Link href="/gallery" className="text-primary-light hover:text-white transition-colors duration-200 block">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Information</h3>
            <div className="space-y-4 text-primary-light">
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary-light/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div className="text-sm">
                  <div className="font-medium text-white">Oracles School</div>
                  <div>[School Address]</div>
                  <div>[City, Region], Cameroon</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="h-5 w-5 flex-shrink-0 text-primary-light/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-sm">[+237 XXX XXX XXX]</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="h-5 w-5 flex-shrink-0 text-primary-light/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-sm">info@essunguejuma.org</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="h-5 w-5 flex-shrink-0 text-primary-light/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div className="text-sm">
                  <div>Mon-Fri: 7:00 AM - 5:00 PM</div>
                  <div>Sat: 8:00 AM - 2:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-light/30 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                          <div className="text-primary-light/80 text-sm">
                © {new Date().getFullYear()} Essungue Ejuma Foundation. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/contact" className="text-primary-light/80 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
                <Link href="/donate" className="text-primary-light/80 hover:text-white transition-colors duration-200">
                  Donate
                </Link>
                <Link href="/enroll" className="text-primary-light/80 hover:text-white transition-colors duration-200">
                  Enroll Now
                </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
