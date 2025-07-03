export default function Clubs() {
  return (
    <div className="pt-16">
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-600/10 to-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-red-500/30">
              <i className="fas fa-users text-red-500"></i>
              <span className="text-white text-sm font-medium">Community & Recreation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Clubs</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our exclusive clubs and recreational activities designed to foster community and professional networking.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-red-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Available Clubs</h2>
              <p className="text-xl text-gray-300">Explore our diverse range of professional and recreational clubs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-dumbbell text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Fitness Club</h3>
                <p className="text-gray-300 leading-relaxed">
                  State-of-the-art fitness facilities with personal training, group classes, and wellness programs to keep you healthy and energized.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-book text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional Development</h3>
                <p className="text-gray-300 leading-relaxed">
                  Networking events, workshops, and seminars designed to enhance your professional skills and expand your industry connections.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-gamepad text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Recreation Club</h3>
                <p className="text-gray-300 leading-relaxed">
                  Gaming tournaments, outdoor activities, and social events that provide fun ways to connect with colleagues and unwind.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-paint-brush text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Creative Arts</h3>
                <p className="text-gray-300 leading-relaxed">
                  Art workshops, creative writing groups, and design sessions that encourage artistic expression and innovative thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
