import { Star, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AffiliateDisclosure() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="glassmorphism py-4 px-6 flex items-center gap-4 sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2">
          <Star className="w-7 h-7 text-vegas-gold fill-vegas-gold" />
          <span className="font-display text-lg font-bold text-white">Vegas<span className="text-vegas-gold">Strip</span>Guide</span>
        </Link>
        <Link to="/" className="ml-auto flex items-center gap-1 text-sm text-vegas-gold hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl font-bold text-white mb-2">Affiliate Disclosure</h1>
        <p className="text-vegas-text-gray text-sm mb-10">Last updated: March 2025</p>
        <div className="space-y-8 text-vegas-text-gray leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">Our Commitment to Transparency</h2>
            <p>VegasStripGuide.com is committed to transparency about how we earn revenue. In accordance with FTC guidelines, this page discloses our use of affiliate links and sponsored content.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">What Are Affiliate Links?</h2>
            <p>Some links on this site are affiliate links. This means that if you click on a link and make a purchase or booking, we may receive a small commission from the company — at no additional cost to you. The price you pay is exactly the same whether or not you use our affiliate links.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">Our Affiliate Partners</h2>
            <p>We currently work with the following affiliate programs:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-white">Viator</strong> — Tours, tickets, and experiences in Las Vegas</li>
              <li><strong className="text-white">GetYourGuide</strong> — Las Vegas experiences including The Sphere</li>
              <li><strong className="text-white">Stay22</strong> — Hotel booking widget and comparison tool</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">Our Editorial Independence</h2>
            <p>Affiliate relationships do not influence our editorial content or recommendations. We only recommend attractions and experiences we genuinely believe provide value to our readers. Our guides and reviews are written to help you make the best decisions for your Vegas trip — not to maximize affiliate commissions.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">Questions?</h2>
            <p>If you have any questions about our affiliate relationships or how we earn revenue, please contact us at: <a href="mailto:hello@vegasstripguide.site" className="text-vegas-gold hover:underline">hello@vegasstripguide.site</a></p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-vegas-text-gray text-sm">
        © {new Date().getFullYear()} VegasStripGuide.com · <Link to="/privacy" className="hover:text-vegas-gold">Privacy</Link> · <Link to="/terms" className="hover:text-vegas-gold">Terms</Link> · <Link to="/affiliate-disclosure" className="hover:text-vegas-gold">Affiliate Disclosure</Link>
      </footer>
    </div>
  )
}
