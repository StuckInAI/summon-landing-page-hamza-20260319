export default function Features() {
  const features = [
    {
      title: 'TypeScript Safety',
      description: 'Full type safety across the entire stack with TypeScript and Next.js 14.',
      icon: '🔒',
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development with custom design.',
      icon: '🎨',
    },
    {
      title: 'SQLite Database',
      description: 'Lightweight, serverless database for storing contact submissions and more.',
      icon: '💾',
    },
    {
      title: 'Responsive Design',
      description: 'Fully responsive layout that works on all devices from mobile to desktop.',
      icon: '📱',
    },
    {
      title: 'API Routes',
      description: 'Built-in API endpoints for handling form submissions and data operations.',
      icon: '⚡',
    },
    {
      title: 'Production Ready',
      description: 'Optimized for production with Docker support and environment configuration.',
      icon: '🚀',
    },
  ]

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to launch a high-converting landing page with modern web technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}