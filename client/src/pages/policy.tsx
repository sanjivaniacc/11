export default function Policy() {
  return (
    <div className="pt-16">
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-600/10 to-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-red-500/30">
              <i className="fas fa-shield-alt text-red-500"></i>
              <span className="text-white text-sm font-medium">Company Guidelines</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Understanding our commitment to excellence, integrity, and responsible business practices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-red-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-handshake text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Code of Conduct</h3>
                <p className="text-gray-300 leading-relaxed">
                  We maintain the highest standards of professional conduct, ethical behavior, and integrity in all our business dealings. Our team members are expected to act with honesty, respect, and accountability in every interaction.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-lock text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Privacy & Security</h3>
                <p className="text-gray-300 leading-relaxed">
                  We are committed to protecting the privacy and security of our clients' information. Our comprehensive security measures ensure that all data is handled with the utmost care and in compliance with industry standards and regulations.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-leaf text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Environmental Responsibility</h3>
                <p className="text-gray-300 leading-relaxed">
                  We are dedicated to sustainable business practices and environmental stewardship. Our operations are designed to minimize environmental impact while maximizing positive contributions to the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
