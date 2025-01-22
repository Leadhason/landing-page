import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Home, MessageSquare, Building2, Zap } from 'lucide-react'

export default function BusinessTypesSection() {
  const businessTypes = [
    { icon: Briefcase, title: "School Administrators", description: "Oversee operations, manage attendance, and simplify reporting in one platform." },
    { icon: Users, title: "Teachers", description: "Track student performance, manage grades, and stay connected with parents effortlessly." },
    { icon: Home, title: "Parents", description: "Stay informed with real-time updates on your child’s attendance, grades, and school events." },
    { icon: MessageSquare, title: "Students", description: "Access timetables, grades, and resources to stay on top of your learning journey." },
  ]

  return (
    <section className="w-full py-8 md:py-12 lg:py-18 text-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for School Administrators</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Streamline operations, enhance communication, and manage everything from attendance to grade tracking—simplify your school’s management with EduSync's powerful tools.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessTypes.map((type, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow rounded-2xl p-3 bg-white hover:scale-105 duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <type.icon className="h-6 w-6" />
                  <span>{type.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}