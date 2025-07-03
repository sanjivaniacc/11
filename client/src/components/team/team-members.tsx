export default function TeamMembers() {
  const teamMembers = [
    {
      name: "John Anderson",
      position: "Chief Executive Officer",
      bio: "Visionary leader with 20+ years of experience in driving organizational growth and innovation.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Sarah Mitchell",
      position: "Chief Technology Officer",
      bio: "Technology enthusiast leading digital transformation initiatives and innovative solutions.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c0763d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Michael Thompson",
      position: "Marketing Director",
      bio: "Creative strategist specializing in brand development and customer engagement initiatives.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Manager",
      bio: "Operational excellence expert ensuring smooth processes and efficient project delivery.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "David Chen",
      position: "Finance Director",
      bio: "Financial strategist with expertise in investment planning and risk management.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Lisa Wang",
      position: "HR Director",
      bio: "People-focused leader dedicated to building strong teams and fostering company culture.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
  ];

  return (
    <section id="team-members" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-black/80 to-red-600/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Leadership Team</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the visionaries who guide our company towards excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1"
            >
              <img 
                src={member.avatar} 
                alt={`${member.name} Portrait`} 
                className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-red-500/50 group-hover:border-red-500 transition-all duration-300 object-cover" 
              />
              <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>
              <p className="text-red-500 text-center mb-4 font-semibold">{member.position}</p>
              <p className="text-gray-300 text-sm text-center mb-6">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
