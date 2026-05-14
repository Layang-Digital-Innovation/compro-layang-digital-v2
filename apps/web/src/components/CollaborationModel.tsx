import React from "react";
import { Check } from "lucide-react";

const dedicatedTeam = "/assets/dedication.png";
const projectBased = "/assets/project.png";
const onDemand = "/assets/demand.png";

const CollaborationCard = ({ icon, title, description, items, bgColor }: {
  icon: string;
  title: string;
  description: string;
  items: string[];
  bgColor: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <div className={`mb-4 w-12 p-2 rounded-lg ${bgColor}`}>
      <img src={icon} alt={`${title} icon`} />
    </div>
    <h2 className="text-sub-title1 font-semibold mb-2">{title}</h2>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <ul className="text-sm text-gray-600 mb-6 space-y-1">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-2">
          <Check className="text-blue-500 w-4" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const CollaborationModel = () => {
  const models = [
    {
      icon: dedicatedTeam,
      title: "Dedicated Team",
      description:
        "Ideal for long-term partnerships. Our team becomes an extension of yours — fully dedicated to your product with continuous collaboration.",
      items: [
        "Seamless integration with your in-house team",
        "High scalability and flexibility",
        "Full control over project direction",
        "Efficient communication and alignment",
      ],
      bgColor: "bg-green-100",
    },
    {
      icon: projectBased,
      title: "Project Based",
      description:
        "Best suited for clearly defined goals and timelines. You get a fixed budget, a focused scope, and a guaranteed delivery date.",
      items: [
        "Clear milestones and deliverables",
        "Low risk with defined costs",
        "Ideal for MVPs or redesigns",
        "Fast and efficient delivery",
      ],
      bgColor: "bg-blue-100",
    },
    {
      icon: onDemand,
      title: "On Demand",
      description:
        "Flexible access to our expertise as needed. Great for short-term needs, urgent tasks, or augmenting your existing team temporarily.",
      items: [
        "Pay only for what you need",
        "Quick response to urgent requirements",
        "Access to multi-disciplinary expertise",
        "No long-term commitment required",
      ],
      bgColor: "bg-red-100",
    },
  ];

  return (
    <section id="about">
      <div className="container px-5 md:px-10 lg:px-16 mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="text-header4 font-aileron font-semibold">
            Collaboration Model
          </h1>
          <p>Flexible Ways to Work Together</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <CollaborationCard key={index} {...model} />
          ))}
        </div>
      </div>
    </section>
  );
};
