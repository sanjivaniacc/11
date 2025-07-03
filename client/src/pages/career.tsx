export default function Career() {
  return (
    <div className="pt-16">
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-600/10 to-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-red-500/30">
              <i className="fas fa-rocket text-red-500"></i>
              <span className="text-white text-sm font-medium">Join Our Team</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Opportunities</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Build your career with us and be part of an innovative team that's shaping the future of business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-red-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-300">Join a culture of innovation, growth, and excellence</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-chart-line text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Growth Opportunities</h3>
                <p className="text-gray-300 leading-relaxed">
                  We invest in our people with continuous learning programs, mentorship, and clear career advancement paths.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-heart text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Work-Life Balance</h3>
                <p className="text-gray-300 leading-relaxed">
                  Flexible working arrangements, comprehensive benefits, and a supportive environment that values your well-being.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-lightbulb text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation Culture</h3>
                <p className="text-gray-300 leading-relaxed">
                  Work with cutting-edge technology and contribute to innovative solutions that make a real impact.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-users text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Collaborative Team</h3>
                <p className="text-gray-300 leading-relaxed">
                  Join a diverse, talented team that values collaboration, creativity, and mutual respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
