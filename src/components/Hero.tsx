export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Build Your Dream Landing Page
          <span className="block text-primary-600">With Next.js 14</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          A fully responsive, production-ready landing page template with TypeScript, Tailwind CSS, and SQLite database integration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
          >
            Start Free Trial
          </a>
          <a 
            href="#features" 
            className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    </section>
  )
}