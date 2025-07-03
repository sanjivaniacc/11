export default function About() {
  return (
    <div className="pt-16">
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-600/10 to-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-red-500/30">
              <i className="fas fa-info-circle text-red-500"></i>
              <span className="text-white text-sm font-medium">Learn More</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">arcu</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover our story, values, and commitment to delivering exceptional business solutions worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-red-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-xl text-gray-300">From humble beginnings to global leadership</p>
            </div>

            <div className="grid gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Founded on Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  arcu was founded with a vision to transform how businesses operate through innovative technology solutions and exceptional service. Since our inception, we have been dedicated to pushing the boundaries of what's possible in business automation and digital transformation.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Global Impact</h3>
                <p className="text-gray-300 leading-relaxed">
                  Today, we serve clients across 25+ countries, helping businesses of all sizes achieve their goals through our comprehensive suite of services. Our global reach combined with local expertise ensures that we deliver solutions that are both innovative and culturally relevant.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Future Forward</h3>
                <p className="text-gray-300 leading-relaxed">
                  As we continue to grow, our commitment to innovation, quality, and customer satisfaction remains unwavering. We invest heavily in research and development, ensuring that our clients always have access to the latest technological advances and best practices in their industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
