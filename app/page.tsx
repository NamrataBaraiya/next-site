import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <><div className="pt-32 pb-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Fast & Reliable Delivery Service</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Get your packages delivered in record time with seamless tracking and top-rated service.
        </p>
        <a href="#cta" className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow hover:bg-gray-100">
          Start Now
        </a>
      </div>
    </div><div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-black text-3xl font-bold text-center mb-12">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-xl shadow text-center">
              <div className="text-indigo-600 text-4xl mb-4">⚡</div>
              <h4 className="text-indigo-600 font-semibold text-xl mb-2">Super Fast</h4>
              <p className="text-black" >Deliveries that beat industry standards with cutting-edge logistics.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow text-center">
              <div className="text-indigo-600 text-4xl mb-4">📦</div>
              <h4 className="text-indigo-600 font-semibold text-xl mb-2">Safe Handling</h4>
              <p className="text-black">Your packages are handled with care, tracked every step of the way.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow text-center">
              <div className="text-indigo-600 text-4xl mb-4">🌍</div>
              <h4 className="text-indigo-600 font-semibold text-xl mb-2">Wide Reach</h4>
              <p className="text-black">We cover multiple regions so you can send packages anywhere, anytime.</p>
            </div>
          </div>
        </div>
      </div><div className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            
            </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">About Our Service</h3>
            <p className="text-gray-600 mb-4">
              We combine smart logistics with modern tech to make sure your deliveries arrive faster and safer.
            </p>
            <p className="text-gray-600">
              Whether you’re a small business or a large enterprise, our solutions scale with your needs.
            </p>
          </div>
        </div>
      </div><div className="py-20 bg-indigo-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to get started?</h3>
        <p className="mb-8">Sign up today and experience a new level of delivery service.</p>
        <a href="#contact" className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow hover:bg-gray-100">
          Contact Us
        </a>
      </div><div className="py-10 bg-gray-900 text-gray-400 text-center">
        <p>&copy; 2025 YourBrand. All rights reserved.</p>
      </div></>
  );
}
