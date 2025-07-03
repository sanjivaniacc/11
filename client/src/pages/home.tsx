import { Link } from "wouter";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-600/10 to-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-red-500/30">
              <i className="fas fa-rocket text-red-500"></i>
              <span className="text-white text-sm font-medium">Welcome to arcu</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Leading Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We drive innovation and deliver exceptional results with our world-class team of professionals and cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/team"
                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                <i className="fas fa-users mr-2"></i>
                Meet Our Team
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center"
              >
                <i className="fas fa-envelope mr-2"></i>
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-600/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-500/30 rounded-full animate-float-delayed-4"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-red-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose arcu?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">We deliver excellence through innovation, expertise, and commitment to our clients' success.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-star text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                Our commitment to excellence drives everything we do, ensuring the highest quality results for our clients.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-lightbulb text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                We leverage cutting-edge technology and innovative approaches to solve complex business challenges.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-users text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team of seasoned professionals brings decades of experience and specialized knowledge to every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
