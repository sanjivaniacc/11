export default function TeamDescription() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-red-900/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">15+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">25+</div>
              <div className="text-gray-300 text-sm">Countries Served</div>
            </div>
          </div>

          {/* Description Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-star text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Industry Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team comprises of the best in the industry. Recruited for their proficiency in this domain, our marketing professionals are sought after for energetic endeavors and timely completion of the projects. Harnessing the other attributes of our team, we afford them assistance and encourage their inner engineering in other areas of expertise.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-graduation-cap text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                Additionally, we at arcu hold regular training programs to ensure that our team is updated with the latest in this field. Yet, if there is one learning that we have taken from over the years of experience is that technology cannot replace a human being. Therefore, we strive hard to accomplish customer satisfaction through regular connect underpinned in the philosophy "Your business is our business".
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
