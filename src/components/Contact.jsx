
export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#EFECE8] pb-8">
      <div className="max-w-[1450px] mx-auto ">
        <div className="grid lg:grid-cols-2 overflow-hidden ">
          {/* Left Contact Info */}
          <div
            
            className=" p-8 md:p-12 lg:p-16 flex flex-col"
          >
            

            <h2 className="text-2xl lg:text-5xl font-regular text-[#222]  mb-8">
              Reach out &
Connect with Us
            </h2>

            <p className="text-gray-800 text-md mb-10 max-w-md">
              Visit our showroom to explore premium tiles, luxury sanitary ware,
              and modern kitchen solutions crafted to elevate every space.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#222]">
  <div>
    <h3 className="text-lg font-regular mb-2">Address</h3>
    <p className="text-gray-800">
      Main GT Road,
      <br />
      Gujranwala, Pakistan
    </p>
  </div>

  <div>
    <h3 className="text-lg font-regular mb-2">Phone</h3>
    <a
      href="tel:+923001234567"
      className="text-gray-800 hover:text-[#000] transition"
    >
      +92 300 1234567
    </a>
  </div>

 
</div>

            <div className="mt-auto pt-10">
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=Main%20GT%20Road%20Gujranwala%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[300px] rounded-2xl border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>

              <a
                href="https://www.google.com/maps?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnGjcr9kbStGlywp6MOOehCuHcY2CP9P8toylqe9KJcXDQUnJaUEvaxAA6_qQ_aem_mEaTXWcA9LD6xnEKD0DRgg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#000] font-regular hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          <div
             
            className="p-8 md:p-12 lg:p-16"
          > 

            <h2 className="text-2xl lg:text-5xl font-regular text-[#222] leading-tight mb-10">
              Contact Us
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-6 py-4 outline-none focus:border-[#000] transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-6 py-4 outline-none focus:border-[#000] transition"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-6 py-4 outline-none focus:border-[#000] transition"
              />

              <select className="w-full border border-gray-300 rounded-lg px-6 py-4 outline-none focus:border-[#000] transition">
                <option>Select Service</option>
                <option>Wall Tiles</option>
                <option>Floor Tiles</option>
                <option>Sanitary Ware</option>
                <option>Kitchen Solutions</option>
              </select>

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-lg px-6 py-5 outline-none resize-none focus:border-black transition"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-lg font-semibold cursor-pointer transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}