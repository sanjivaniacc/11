export default function Dining() {
  return (
    <div className="pt-16">
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-600/10 to-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-red-500/30">
              <i className="fas fa-utensils text-red-500"></i>
              <span className="text-white text-sm font-medium">Culinary Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Dining <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Experience</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover our premium dining facilities and exceptional culinary experiences for corporate events and daily meals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-red-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Dining Services</h2>
              <p className="text-xl text-gray-300">Experience exceptional cuisine and service in our premium dining facilities</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-crown text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Executive Dining</h3>
                <p className="text-gray-300 leading-relaxed">
                  Elegant private dining rooms perfect for business meetings, client entertainment, and executive gatherings with personalized service.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-coffee text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Café & Bistro</h3>
                <p className="text-gray-300 leading-relaxed">
                  Casual dining options with gourmet coffee, fresh pastries, and healthy meal choices for daily refreshment and informal meetings.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-birthday-cake text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Event Catering</h3>
                <p className="text-gray-300 leading-relaxed">
                  Full-service catering for corporate events, conferences, and special occasions with customized menus and professional presentation.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-leaf text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Healthy Options</h3>
                <p className="text-gray-300 leading-relaxed">
                  Nutritious and delicious meal options featuring organic ingredients, dietary accommodations, and wellness-focused cuisine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
