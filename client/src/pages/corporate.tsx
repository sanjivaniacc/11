export default function Corporate() {
  return (
    <div className="pt-16">
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-600/10 to-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-red-500/30">
              <i className="fas fa-briefcase text-red-500"></i>
              <span className="text-white text-sm font-medium">Business Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Booking</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional corporate booking services tailored to meet your business requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-red-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Book Your Corporate Service</h2>
              <p className="text-gray-300 text-center mb-8">
                Get in touch with our team to discuss your corporate booking requirements and customize a solution that fits your needs.
              </p>
              
              <div className="text-center">
                <div className="inline-flex items-center space-x-4 bg-red-600/20 backdrop-blur-md rounded-full px-8 py-4 border border-red-500/30 mb-8">
                  <i className="fas fa-phone text-red-500 text-xl"></i>
                  <div>
                    <div className="text-white font-semibold">Call us now</div>
                    <div className="text-gray-300 text-sm">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="inline-flex items-center space-x-4 bg-red-600/20 backdrop-blur-md rounded-full px-8 py-4 border border-red-500/30">
                  <i className="fas fa-envelope text-red-500 text-xl"></i>
                  <div>
                    <div className="text-white font-semibold">Email us</div>
                    <div className="text-gray-300 text-sm">corporate@arcu.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
