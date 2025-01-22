import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$49/month",
      description: "Perfect for small schools taking their first steps towards digital management.",
      features: [
        "Attendance tracking",
        "Basic reporting",
        "Gradebook management",
        "Parent communication tools",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "$99/month",
      description: "Ideal for growing schools that need comprehensive management tools.",
      features: [
        "Advanced analytics",
        "Customizable timetables",
        "Real-time notifications",
        "Parent-Teacher messaging",
        "Priority email support",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Custom solutions tailored to meet the needs of large institutions.",
      features: [
        "Multi-campus support",
        "Dedicated account manager",
        "Full API access",
        "Onboarding assistance",
        "24/7 priority support",
      ],
    },
  ]

  return (
    <section className="w-full py-12 px-5 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Plans That Fit Your School's Needs</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose a plan that suits your institution, from basic management to advanced features for larger schools. Tailored to grow with you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className={index === 1 ? "border-[#37D1AA] border-2" : ""}>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <div className="text-2xl font-semibold">{plan.price}<span className="text-lg font-sm">/month</span></div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-[#37D1AA] mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={index === 1 ? "w-full bg-[#37D1AA] hover:bg-[#2bb090] text-white" : "w-full"}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}