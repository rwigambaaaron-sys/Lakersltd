/**export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-red/[.03] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.js
            </code>
            .
          </li>
          <li className="text-blue-400 tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}**/

/**import Image from 'next/image';
export default function home() {
  return (
    <>
      <header className="site-header">
        <h1>
          <strong>
            <em>Lakers Group</em>
          </strong>
        </h1>
        <nav className="site-nav">
          <ul>
            <li><a href="apartment.html">Apartments🏢</a></li>
            <li><a href="farmland.html">Farm🌲</a></li>
            <li><a href="warehouses.html">Warehouses🏬</a></li>
            <li><a href="houses.html">Houses🏡</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Find Your Dream Property in Rwanda</h2>
        <p>We specialize in residential, commercial, and farmland properties.</p>
      </section>

      <section className="about">
        <h2><strong>About us:</strong></h2>
        <p>
          Welcome to Laker Group Ltd., established in 2023, and proudly serving
          as your dedicated partner in the real estate market. We founded Laker
          Group with a clear vision: to offer a comprehensive and accessible
          platform for individuals and businesses seeking diverse property
          solutions.
        </p>
        <ul>
          <li><strong>Residential houses:</strong> Perfect for families and individuals seeking a new home.</li>
          <li><strong>Productive farmland:</strong> Ideal for agricultural ventures or rural living.</li>
          <li><strong>Undeveloped land plots:</strong> Offering opportunities for custom development or investment.</li>
          <li><strong>Modern apartments:</strong> Catering to urban living and rental investments.</li>
          <li><strong>Versatile warehouses:</strong> Suited for commercial, industrial, or storage requirements.</li>
        </ul>
      </section>

      <section>
        <div className="main-container">
          
          <div className="item-group">
            <div className="label">Warehouse - Rwamagana</div>
            <div className="slider">
              <Image className="slide" src="cd.webp" alt="Warehouse 1" />
              <Image className="slide" src="bc.webp" alt="Warehouse 2" />
              <Image className="slide" src="ab.webp" alt="Warehouse 3" />
              <button className="prev">❮</button>
              <button className="next">❯</button>
              <div className="counter"></div>
            </div>
            <div className="details">
              <p>13 acres and 25 units</p>
              <p>3,000,000 RWF</p>
              <p>KG 235, Rwamagana</p>
              <a href="warehouses.html"><em>View all warehouses</em></a>
            </div>
          </div>

          
          <div className="item-group">
            <div className="label">Apartments - Rwamagana</div>
            <div className="slider">
              <Image className="slide" src="sc.webp" alt="Apartment 1" />
              <Image className="slide" src="bc.webp" alt="Apartment 2" />
              <Image className="slide" src="cd.webp" alt="Apartment 3" />
              <button className="prev">❮</button>
              <button className="next">❯</button>
              <div className="counter"></div>
            </div>
            <div className="details">
              <p>13 acres and 25 units</p>
              <p>3,000,000 RWF</p>
              <p>KG 235, Rwamagana</p>
              <a href="apartment.html"><em>View all apartments</em></a>
            </div>
          </div>

          
          <div className="item-group">
            <div className="label">Farmland - Rwamagana</div>
            <div className="slider">
              <Image className="slide" src="bc.webp" alt="Farmland 1" />
              <Image className="slide" src="sc.webp" alt="Farmland 2" />
              <Image className="slide" src="cd.webp" alt="Farmland 3" />
              <button className="prev">❮</button>
              <button className="next">❯</button>
              <div className="counter"></div>
            </div>
            <div className="details">
              <p>13 acres and 25 units</p>
              <p>3,000,000 RWF</p>
              <p>KG 235, Rwamagana</p>
              <a href="farmland.html"><em>View all farmland</em></a>
            </div>
          </div>

          
          <div className="item-group">
            <div className="label">Land - Rwamagana</div>
            <div className="slider">
              <Image className="slide" src="aa.webp" alt="Land 1" />
              <Image className="slide" src="sc.webp" alt="Land 2" />
              <Image className="slide" src="ab.webp" alt="Land 3" />
              <button className="prev">❮</button>
              <button className="next">❯</button>
              <div className="counter"></div>
            </div>
            <div className="details">
              <p>13 acres and 25 units</p>
              <p>3,000,000 RWF</p>
              <p>KG 235, Rwamagana</p>
              <a href="farmland.html"><em>View all land</em></a>
            </div>
          </div>

          
          <div className="item-group">
            <div className="label">Houses - Kigali</div>
            <div className="slider">
              <Image className="slide" src="re.webp" alt="House 1" />
              <Image className="slide" src="sc.webp" alt="House 2" />
              <Image className="slide" src="cd.webp" alt="House 3" />
              <button className="prev">❮</button>
              <button className="next">❯</button>
              <div className="counter"></div>
            </div>
            <div className="details">
              <p>3 bedrooms and 2 bathrooms</p>
              <p>3,000,000 RWF</p>
              <p>KG 7 Ave, Kigali</p>
              <a href="houses.html"><em>View all houses</em></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-container footer">
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="apartment.html">Apartments</a></li>
              <li><a href="houses.html">Houses</a></li>
              <li><a href="farmland.html">Farmland</a></li>
              <li><a href="warehouses.html">Warehouses</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="index.html">About</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">X (Twitter)</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact us</h3>
            <ul>
              <li>Hotline: 0788233434</li>
              <li>Whatsapp: 0794234554</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}**/

/**document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.inquiry-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Inquiry submitted! We will contact you soon.');
      form.reset();
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.property-slider');
  if (!slider) return;

  const slides = slider.querySelector('.property-slides-wrapper');
  const images = slides.querySelectorAll('img');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  let index = 0;

  function showSlide(i) {
    if (i < 0) index = images.length - 1;
    else if (i >= images.length) index = 0;
    else index = i;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  prev.addEventListener('click', () => showSlide(index - 1));
  next.addEventListener('click', () => showSlide(index + 1));

});



document.querySelectorAll(".slider").forEach((slider) => {
  const slides = slider.querySelectorAll("img");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");
  const counter = slider.querySelector(".counter");

  let index = 0;
  const total = slides.length;

  function updateSlide() {
    slides.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
    counter.textContent = `${index + 1} / ${total}`;
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    updateSlide();
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    updateSlide();
  });

  updateSlide();
});
 */

import Image from 'next/image'; // Import the Image component

export default function Home() {
  return (
    // Use Tailwind for a clean, full-width container
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      
      {/* HEADER: Use flex for layout and apply spacing/coloring */}
      <header className="site-header flex flex-col sm:flex-row justify-between items-center px-4 py-4 h-32 bg-white shadow-md">
        <h1 className="text-5xl font-extrabold font-serif text-blue-700">
          Lakers Group
        </h1>
        <nav className="site-nav mt-3 sm:mt-0">
          <ul className="flex space-x-6 text-md font-medium gap-x-8 gap-y-3">
            <li><a className="hover:text-blue-600 transition duration-150" href="/apartment"><strong>Apartments🏢</strong></a></li>
            <li><a className="hover:text-blue-600 transition duration-150" href="/farmland"><strong>Farm🌲</strong></a></li>
            <li><a className="hover:text-blue-600 transition duration-150" href="/warehouses"><strong>Warehouses🏬</strong></a></li>
            <li><a className="hover:text-blue-600 transition duration-150" href="/houses"><strong>Houses🏡</strong></a></li>
          </ul>
        </nav>
      </header>
      
      {/* MAIN CONTENT AREA */}
      <main className="container mx-auto px-4 py-10">

        {/* HERO SECTION */}
        <section className="hero bg-blue-700 hover:bg-gradient-to-r from-blue-700 to-blue-400 text-white p-12 text-center rounded-lg shadow-xl mb-12">
          <h2 className="text-4xl font-bold mb-3">Find Your Dream Property in Rwanda</h2>
          <p className="text-xl">We specialize in residential, commercial, and farmland properties.</p>
        </section>

        {/* ABOUT SECTION */}
        <section className="about mb-12 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 border-b pb-2 text-blue-700">About us:</h2>
          <p className="mb-4 text-gray-600">
            Welcome to Laker Group Ltd., established in 2023, and proudly serving
            as your dedicated partner in the real estate market. We founded Lakers
            Group with a clear vision: to offer a comprehensive and accessible
            platform for individuals and businesses seeking diverse property
            solutions.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Residential houses:</strong> Perfect for families and individuals seeking a new home.</li>
            <li><strong>Productive farmland:</strong> Ideal for agricultural ventures or rural living.</li>
            <li><strong>Undeveloped land plots:</strong> Offering opportunities for custom development or investment.</li>
            <li><strong>Modern apartments:</strong> Catering to urban living and rental investments.</li>
            <li><strong>Versatile warehouses:</strong> Suited for commercial, industrial, or storage requirements.</li>
          </ul>
        </section>

        {/* PROPERTY LISTINGS SECTION */}
        <section className="py-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-700">Featured Properties</h2>
          <div className="main-container grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* ITEM GROUP TEMPLATE */}
            {/* The slider, prev, next, and counter elements require custom JS, 
                so here is the Tailwind layout for a single item group. */}
            
            {/* Warehouse Section */}
            <div className="item-group bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
              <div className="label bg-blue-600 text-white text-center py-2 font-semibold">Warehouse - Rwamagana</div>
              <div className="slider relative h-48 overflow-hidden">
                {/* NOTE: You must place your image files (cd.webp, etc.) in the public/ folder */}
                {/* For the slider functionality, you'll need external JavaScript */}
                <Image className="slide w-full h-full object-cover" src="/cd.webp" alt="Warehouse 1" width={500} height={300} priority />
                {/* <button className="prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">❮</button>
                <button className="next absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">❯</button> */}
              </div>
              <div className="details p-4 space-y-1 text-sm">
                <p className="font-semibold text-lg">3,000,000 RWF</p>
                <p className="text-gray-600">13 acres and 25 units</p>
                <p className="text-gray-600">KG 235, Rwamagana</p>
                <a className="mt-3 block text-blue-500 font-medium hover:underline" href="/warehouses">View all warehouses</a>
              </div>
            </div>

            {/* Apartments (Repeated structure) */}
            <div className="item-group bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
              <div className="label bg-blue-600 text-white text-center py-2 font-semibold">Apartments - Rwamagana</div>
              <div className="slider relative h-48 overflow-hidden">
                <Image className="slide w-full h-full object-cover" src="/sc.webp" alt="Apartment 1" width={500} height={300} />
              </div>
              <div className="details p-4 space-y-1 text-sm">
                <p className="font-semibold text-lg">3,000,000 RWF</p>
                <p className="text-gray-600">13 acres and 25 units</p>
                <p className="text-gray-600">KG 235, Rwamagana</p>
                <a className="mt-3 block text-blue-500 font-medium hover:underline" href="/apartment">View all apartments</a>
              </div>
            </div>
            
            {/* Farmland (Repeated structure) */}
            <div className="item-group bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
              <div className="label bg-blue-600 text-white text-center py-2 font-semibold">Farmland - Rwamagana</div>
              <div className="slider relative h-48 overflow-hidden">
                <Image className="slide w-full h-full object-cover" src="/bc.webp" alt="Farmland 1" width={500} height={300} />
              </div>
              <div className="details p-4 space-y-1 text-sm">
                <p className="font-semibold text-lg">3,000,000 RWF</p>
                <p className="text-gray-600">13 acres and 25 units</p>
                <p className="text-gray-600">KG 235, Rwamagana</p>
                <a className="mt-3 block text-blue-500 font-medium hover:underline" href="/farmland">View all farmland</a>
              </div>
            </div>

            {/* Land (Repeated structure) */}
            <div className="item-group bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
              <div className="label bg-blue-600 text-white text-center py-2 font-semibold">Land - Rwamagana</div>
              <div className="slider relative h-48 overflow-hidden">
                <Image className="slide w-full h-full object-cover" src="/aa.webp" alt="Land 1" width={500} height={300} />
              </div>
              <div className="details p-4 space-y-1 text-sm">
                <p className="font-semibold text-lg">3,000,000 RWF</p>
                <p className="text-gray-600">13 acres and 25 units</p>
                <p className="text-gray-600">KG 235, Rwamagana</p>
                <a className="mt-3 block text-blue-500 font-medium hover:underline" href="/farmland">View all land</a>
              </div>
            </div>

            {/* Houses (Repeated structure) */}
            <div className="item-group bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
              <div className="label bg-blue-600 text-white text-center py-2 font-semibold">Houses - Kigali</div>
              <div className="slider relative h-48 overflow-hidden">
                <Image className="slide w-full h-full object-cover" src="/re.webp" alt="House 1" width={500} height={300} />
              </div>
              <div className="details p-4 space-y-1 text-sm">
                <p className="font-semibold text-lg">3,000,000 RWF</p>
                <p className="text-gray-600">3 bedrooms and 2 bathrooms</p>
                <p className="text-gray-600">KG 7 Ave, Kigali</p>
                <a className="mt-3 block text-blue-500 font-medium hover:underline" href="/houses">View all houses</a>
              </div>
            </div>
            
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer bg-gray-900 text-white mt-12">
        <div className="footer-container container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Explore */}
          <div className="footer-column">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Explore</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition duration-150" href="#">Home</a></li>
              <li><a className="hover:text-white transition duration-150" href="/apartment">Apartments</a></li>
              <li><a className="hover:text-white transition duration-150" href="/houses">Houses</a></li>
              <li><a className="hover:text-white transition duration-150" href="/farmland">Farmland</a></li>
              <li><a className="hover:text-white transition duration-150" href="/warehouses">Warehouses</a></li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition duration-150" href="/about">About</a></li>
              <li><a className="hover:text-white transition duration-150" href="#">Instagram</a></li>
              <li><a className="hover:text-white transition duration-150" href="#">X (Twitter)</a></li>
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
    </div>
  );
}