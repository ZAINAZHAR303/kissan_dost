export const FarmerCommunity = () => {
    return (
      <section id="community" className="p-8 bg-white">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Farmer Community Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-green-800">Featured Videos</h3>
            <iframe
              className="w-full h-64 mt-4"
              src="https://www.youtube.com/embed/exampleVideoID"
              title="Farming Tips"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-800">Share Your Experience</h3>
            <form className="mt-4">
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2"
                rows="5"
                placeholder="Share your agricultural experience..."
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  