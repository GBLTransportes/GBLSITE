'use client'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-secondary animate-fade-in">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-700">
            <span className="text-secondary mr-2 font-bold">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
