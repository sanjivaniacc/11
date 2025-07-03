export default function Company() {
  return (
    <div className="pt-16">
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-600/10 to-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-red-500/30">
              <i className="fas fa-building text-red-500"></i>
              <span className="text-white text-sm font-medium">About arcu</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Company</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover our mission, vision, and the values that drive us to deliver exceptional business solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-red-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-eye text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the world's leading provider of innovative business solutions, empowering organizations to achieve their full potential through cutting-edge technology and exceptional service.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-target text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  We deliver transformative business solutions that drive growth, efficiency, and success for our clients through innovation, expertise, and unwavering commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
