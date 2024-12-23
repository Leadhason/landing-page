
import { Lightbulb, Target, ListTodo, MessageSquare } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Lightbulb,
      iconColor: "text-[#84cc16]",
      iconBg: "bg-[#84cc16]/10",
      title: "Smart Attendance Tracking",
      description: "Forget manual registers. Automatically capture, analyze, and report attendance with ease."
    },
    {
      icon: Target,
      iconColor: "text-[#f43f5e]",
      iconBg: "bg-[#f43f5e]/10",
      title: "Effortless Grade Management",
      description: "Save time with tools that let you track, calculate, and share grades—seamlessly and securely.",
      highlighted: true
    },
    {
      icon: ListTodo,
      iconColor: "text-[#8b5cf6]",
      iconBg: "bg-[#8b5cf6]/10",
      title: "Connected Communication",
      description: "Bring teachers, parents, and students closer together with instant notifications and real-time updates."
    },
    {
      icon: MessageSquare,
      iconColor: "text-[#eab308]",
      iconBg: "bg-[#eab308]/10",
      title: "Streamlined Scheduling",
      description: "Create and manage timetables that adapt to your unique needs—all in just a few clicks."
    }
  ]

  return (
    <section className="py-24 bg-[#F7F7F7] px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#E6E6E6] text-[#015847] mb-4">
            FEATURES
          </div>
          <h2 className="text-4xl font-bold mb-4 max-w-3xl mx-auto">
          All the Tools Your School Needs in One Place
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Streamline operations, enhance communication, and empower educators with features designed to simplify school management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 ${
                feature.highlighted ? 'bg-[#fff1f2]' : 'bg-white'
              } shadow-sm hover:shadow-md transition-shadow`}
            >
              <div
                className={`${feature.iconBg} ${feature.iconColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}