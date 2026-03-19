export default function CallToAction() {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Landing Page?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Get started today with our production-ready template. No credit card required for the free trial.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
        >
          Start Free Trial
        </a>
        <p className="mt-6 text-sm opacity-80">Full access to all features. Cancel anytime.</p>
      </div>
    </section>
  )
}