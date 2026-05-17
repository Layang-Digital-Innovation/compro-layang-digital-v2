import { Trophy, Star, Award, type LucideIcon } from "lucide-react";

type Achievement = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function OurAchievement() {
  const achievements: Achievement[] = [
    {
      icon: Trophy,
      title: "Industry Leader 2024",
      description: "Recognized as the top digital transformation agency by Tech Review.",
    },
    {
      icon: Star,
      title: "5-Star Client Satisfaction",
      description: "Maintained a perfect satisfaction score across 100+ enterprise projects.",
    },
    {
      icon: Award,
      title: "Innovation Excellence",
      description: "Awarded for breakthrough solutions in cloud architecture and AI integration.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container px-5 md:px-10 lg:px-16 mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-aileron text-header3 font-bold text-[#0A2540]">Our Achievement</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, i) => {
            const Icon = achievement.icon;
            return (
              <div key={i} className="aspect-square bg-gray-50 rounded-3xl border border-gray-200 shadow-sm flex flex-col items-center justify-center p-8 text-center space-y-4 hover:shadow-md transition">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                     {/* @ts-expect-error React 19 type mismatch with Lucide */}
                     <Icon className="w-8 h-8 text-[#0A2540]" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0A2540]">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
