import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-600/10 to-black/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-red-500/30">
            <i className="fas fa-users text-red-500"></i>
            <span className="text-white text-sm font-medium">Meet Our Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover the passionate professionals who drive innovation and deliver exceptional results for our clients worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                const teamSection = document.getElementById('team-members');
                if (teamSection) {
                  teamSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <i className="fas fa-arrow-down mr-2"></i>
              Meet The Team
            </button>
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
  );
}
