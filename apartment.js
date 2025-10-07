import Image from 'next/image';
import Link from 'next/link';

// Define the Apartment data array to keep the component clean
const apartments = [
  { id: 1, label: 'Luxury Apartment - Kigali', details: '3 bedrooms and 2 bathrooms', price: '3,000,000 RWF', location: 'KG 7 Ave, Kigali', images: ['/sc.webp', '/bc.webp', '/re.webp'] },
  { id: 2, label: 'Luxury Apartment - Kigali', details: '3 bedrooms and 2 bathrooms', price: '3,000,000 RWF', location: 'KG 7 Ave, Kigali', images: ['/gfs.webp', '/bc.webp', '/ab.webp'] },
  { id: 3, label: 'Luxury Apartment - Kigali', details: '3 bedrooms and 2 bathrooms', price: '3,000,000 RWF', location: 'KG 7 Ave, Kigali', images: ['/bc.webp', '/cd.webp', '/ab.webp'] },
  { id: 4, label: 'Luxury Apartment - Kigali', details: '3 bedrooms and 2 bathrooms', price: '3,000,000 RWF', location: 'KG 7 Ave, Kigali', images: ['/gfs.webp', '/bc.webp', '/ab.webp'] },
  { id: 5, label: 'Luxury Apartment - Kigali', details: '3 bedrooms and 2 bathrooms', price: '3,000,000 RWF', location: 'KG 7 Ave, Kigali', images: ['/sc.webp', '/bc.webp', '/ab.webp'] },
  { id: 6, label: 'Luxury Apartment - Kigali', details: '3 bedrooms and 2 bathrooms', price: '3,000,000 RWF', location: 'KG 7 Ave, Kigali', images: ['/gfs.webp', '/bc.webp', '/ab.webp'] },
  { id: 7, label: 'Luxury Apartment - Kigali', details: '3 bedrooms and 2 bathrooms', price: '3,000,000 RWF', location: 'KG 7 Ave, Kigali', images: ['/bc.webp', '/cd.webp', '/ab.webp'] },
  { id: 8, label: 'Luxury Apartment - Kigali', details: '3 bedrooms and 2 bathrooms', price: '3,000,000 RWF', location: 'KG 7 Ave, Kigali', images: ['/gfs.webp', '/bc.webp', '/ab.webp'] },
];

export default function ApartmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      
      {/* HEADER: Consistent with the Home page structure */}
      <header className="site-header flex flex-col sm:flex-row justify-between items-center px-4 py-4 h-32 bg-white shadow-md">
        <h1 className="text-5xl font-extrabold font-serif text-blue-700">
          Apartments
        </h1>
        <nav className="site-nav mt-3 sm:mt-0">
          <ul className="flex space-x-6 text-lg font-medium gap-x-8 gap-y-3">
            {/* Nav links matching your main page, but pointing to the correct files */}
            <li><Link className="hover:text-blue-600 transition duration-150" href="/"><strong>Home</strong></Link></li>
            <li><a className="hover:text-blue-600 transition duration-150" href="/farmland"><strong>Farm🌲</strong></a></li>
            <li><a className="hover:text-blue-600 transition duration-150" href="/warehouses"><strong>Warehouses🏬</strong></a></li>
            <li><a className="hover:text-blue-600 transition duration-150" href="/houses"><strong>Houses🏡</strong></a></li>
          </ul>
        </nav>
      </header>
      
      <main className="container mx-auto px-4 py-10">
        
        {/* HERO SECTION */}
        <section className="hero bg-blue-700 text-white p-12 text-center rounded-lg shadow-xl mb-12">
          <h2 className="text-4xl font-bold mb-3">Apartments in Rwanda</h2>
          <p className="text-xl">Modern apartments available across Kigali.</p>
        </section>

        {/* PROPERTY LISTINGS SECTION */}
        <section className="py-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Available Apartment Listings</h2>
          
          <div className="main-container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Map over the apartment data to generate the list */}
            {apartments.map((apt) => (
              <div key={apt.id} className="item-group bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
                
                {/* Label/Title */}
                <div className="label bg-blue-600 text-white text-center py-2 font-semibold">{apt.label}</div>
                
                {/* Slider/Image Area */}
                <div className="slider relative h-48 overflow-hidden">
                  {/* NOTE: Only showing the first image for static rendering. 
                      The slider functionality from your script will handle image rotation. */}
                  <Image 
                    className="slide w-full h-full object-cover" 
                    src={apt.images[0]} // Use the first image as the default view
                    alt={apt.label} 
                    width={500} 
                    height={300} 
                    priority={apt.id === 1} // Prioritize only the first one for performance
                  />
                  
                  {/* Slider Buttons (Require the external JS to be loaded) */}
                  <button className="prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/80 transition duration-200">❮</button>
                  <button className="next absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/80 transition duration-200">❯</button>
                  <div className="counter absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded"></div>
                </div>
                
                {/* Details */}
                <div className="details p-4 space-y-1 text-sm">
                  <p className="font-semibold text-lg">{apt.price}</p>
                  <p className="text-gray-600">{apt.details}</p>
                  <p className="text-gray-600">{apt.location}</p>
                  <a className="mt-3 block text-blue-500 font-medium hover:underline" href="/prop1">View more</a>
                </div>
              </div>
            ))}
            
          </div>
        </section>
      </main>

      {/* FOOTER: Consistent with the Home page structure */}
      <footer className="site-footer bg-gray-900 text-white mt-12">
        <div className="footer-container container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Explore */}
          <div className="footer-column">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Explore</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link className="hover:text-white transition duration-150" href="/">Home</Link></li>
              <li><Link className="hover:text-white transition duration-150" href="/apartment">Apartments</Link></li>
              <li><Link className="hover:text-white transition duration-150" href="/houses">Houses</Link></li>
              <li><Link className="hover:text-white transition duration-150" href="/farmland">Farmland</Link></li>
              <li><Link className="hover:text-white transition duration-150" href="/warehouses">Warehouses</Link></li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link className="hover:text-white transition duration-150" href="/#about">About</Link></li>
              <li><Link className="hover:text-white transition duration-150" href="#">Instagram</Link></li>
              <li><Link className="hover:text-white transition duration-150" href="#">X (Twitter)</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact us */}
          <div className="footer-column">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Hotline: 0788233434</li>
              <li>Whatsapp: 0794234554</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm py-4 bg-gray-950">
          &copy; {new Date().getFullYear()} Lakers Group Ltd. All rights reserved.
        </div>
      </footer>
      <script src="/slider.js" defer></script>
    </div>
  );
}