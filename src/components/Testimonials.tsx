export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Marketing Director',
      content: 'This landing page template helped us increase conversions by 40%. The TypeScript integration saved us countless hours.',
      avatar: 'AJ',
    },
    {
      name: 'Maria Garcia',
      role: 'Startup Founder',
      content: 'Deploying with Docker and Coolify was seamless. Our team could focus on content instead of infrastructure.',
      avatar: 'MG',
    },
    {
      name: 'David Chen',
      role: 'Fullstack Developer',
      content: 'The code quality is excellent. I easily customized the design and added new features with Tailwind CSS.',
      avatar: 'DC',
    },
  ]

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from teams and developers who have successfully launched with our template.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">“{testimonial.content}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}