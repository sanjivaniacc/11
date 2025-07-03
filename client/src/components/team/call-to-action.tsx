import { Link } from "wouter";

export default function CallToAction() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-black to-red-900"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join our journey of excellence and innovation. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/career"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <i className="fas fa-briefcase mr-2"></i>
              Join Our Team
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center"
            >
              <i className="fas fa-rocket mr-2"></i>
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
