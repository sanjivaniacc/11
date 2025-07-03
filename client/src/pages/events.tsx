export default function Events() {
  return (
    <div className="pt-16">
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-600/10 to-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-red-500/30">
              <i className="fas fa-calendar text-red-500"></i>
              <span className="text-white text-sm font-medium">Event Management</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Details</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover our comprehensive event management services and upcoming corporate events.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-red-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Event Services</h2>
              <p className="text-xl text-gray-300">Professional event management solutions for your business needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-handshake text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Corporate Events</h3>
                <p className="text-gray-300 leading-relaxed">
                  Professional corporate event planning and management services for conferences, seminars, and business meetings.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-microphone text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Conferences</h3>
                <p className="text-gray-300 leading-relaxed">
                  Large-scale conference organization with technical support, venue management, and attendee coordination.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-users text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Team Building</h3>
                <p className="text-gray-300 leading-relaxed">
                  Custom team building activities and workshops designed to enhance collaboration and productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
