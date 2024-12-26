const Explore = () => {
  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center">
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">See Enjoy Experience</h2>
        <div className="flex space-x-4">
          <a href="#" className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src="../src/assets/ethiopia-travel.jpg" alt="Adventure" className="w-full h-32 object-cover rounded-md mb-2" />
            <span className="text-lg font-semibold">Adventure</span>
          </a>
          <a href="#" className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src="../src/assets/Meskel.jpg" alt="Holiday" className="w-full h-32 object-cover rounded-md mb-2" />
            <span className="text-lg font-semibold">Holiday</span>
          </a>
          <a href="#" className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src="../src/assets/simien7.jpg" alt="Nature" className="w-full h-32 object-cover rounded-md mb-2" />
            <span className="text-lg font-semibold">Nature</span>
          </a>
          <a href="#" className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src="../src/assets/EtFood.jpg" alt="Food" className="w-full h-32 object-cover rounded-md mb-2" />
            <span className="text-lg font-semibold">Food</span>
          </a>
        </div>
      </section>
            
      {/* Featured Explore */}
      <section className="mb-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600 underline">Featured Explore</h2>
        <div className="space-y-4">
          <a href="#" className="p-4 bg-white rounded-lg shadow-md flex items-center">
            <img src="/path/to/mountains-icon.png" alt="Mountains" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Explore the Mountains</h3>
              <p className="text-gray-700">Discover the beauty of the mountains with our guided tours.</p>
            </div>
          </a>
          <a href="#" className="p-4 bg-white rounded-lg shadow-md flex items-center">
            <img src="/path/to/city-icon.png" alt="City" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">City Tours</h3>
              <p className="text-gray-700">Experience the vibrant life of the city with our exclusive city tours.</p>
            </div>
          </a>
        </div>
      </section>
      
      {/* Blogs */}
      <section className="mb-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600 underline">Blogs</h2>
        <div className="space-y-4">
          <a href="#" className="p-4 bg-white rounded-lg shadow-md flex items-center">
            <img src="/path/to/travel-tips-icon.png" alt="Travel Tips" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Top 10 Travel Tips</h3>
              <p className="text-gray-700">Get the best travel tips from our experts to make your journey smooth and enjoyable.</p>
            </div>
          </a>
          <a href="#" className="p-4 bg-white rounded-lg shadow-md flex items-center">
            <img src="/path/to/places-icon.png" alt="Places" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Best Places to Visit in 2023</h3>
              <p className="text-gray-700">Check out our list of must-visit places for the year 2023.</p>
            </div>
          </a>
        </div>
      </section>
      
      {/* Places to visit */}
      <section className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600 underline">Places to Visit</h2>
        <div className="space-y-4">
          <a href="#" className="p-4 bg-white rounded-lg shadow-md flex items-center">
            <img src="/path/to/paris-icon.png" alt="Paris" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Bahir Dar</h3>
              <p className="text-gray-700">The city of Tana awaits you with its stunning view and rich history.</p>
            </div>
          </a>
          <a href="#" className="p-4 bg-white rounded-lg shadow-md flex items-center">
            <img src="/path/to/bali-icon.png" alt="Bali" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Tis Abay</h3>
              <p className="text-gray-700">Explore the beautiful Waterfall and vibrant culture of the society.</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Explore;