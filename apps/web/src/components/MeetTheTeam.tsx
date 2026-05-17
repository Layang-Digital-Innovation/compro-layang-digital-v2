export default function MeetTheTeam() {
  const team = [
    { name: "John Doe", role: "Executive Officer", image: "/assets/team_member_1_1778747414863.png" },
    { name: "Jane Smith", role: "Chief Technology Officer", image: "/assets/team_member_2_1778747623061.png" },
    { name: "Alex Chen", role: "Design Director", image: "/assets/team_member_3_1778747649401.png" },
  ];

  return (
    <section id="teams" className="py-24 bg-white">
      <div className="container px-5 md:px-10 lg:px-16 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-aileron text-header3 font-bold text-[#0A2540]">Meet The Team</h2>
          <p className="text-sub-title2 text-gray-600 max-w-2xl mx-auto">
            A team of passionate professionals dedicated to driving your success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-full aspect-[4/5] bg-gray-200 rounded-2xl mb-6 shadow-sm border border-gray-100 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg text-[#0A2540]">{member.name}</h3>
              <p className="text-gray-500 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
