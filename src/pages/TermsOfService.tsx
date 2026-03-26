import { Star, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TermsOfService() {
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
        <h1 className="font-display text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-vegas-text-gray text-sm mb-10">Last updated: March 2025</p>
        <div className="space-y-8 text-vegas-text-gray leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using VegasStripGuide.com, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this site.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">2. Use of Content</h2>
            <p>All content on this site — including text, images, guides, and descriptions — is provided for informational purposes only. You may not reproduce, distribute, or create derivative works without our express written consent. Personal, non-commercial use is permitted.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">3. Accuracy of Information</h2>
            <p>We strive to provide accurate and up-to-date information about Las Vegas attractions, prices, and experiences. However, prices, hours, and availability are subject to change. We recommend confirming details directly with the attraction or booking provider before your visit.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">4. Affiliate Links</h2>
            <p>This site contains affiliate links. We may earn a commission when you book or purchase through these links at no additional cost to you. See our <Link to="/affiliate-disclosure" className="text-vegas-gold hover:underline">Affiliate Disclosure</Link> for full details.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">5. Third-Party Sites</h2>
            <p>Links to third-party websites (such as Viator, GetYourGuide, or hotel booking platforms) are provided as a convenience. We are not responsible for the content, policies, or practices of any third-party sites.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">6. Limitation of Liability</h2>
            <p>VegasStripGuide.com shall not be liable for any indirect, incidental, or consequential damages arising from your use of this site or any linked third-party services.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">7. Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time. Continued use of the site after changes constitutes acceptance of the revised terms.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">8. Contact</h2>
            <p>Questions about these terms? Email us at: <a href="mailto:hello@vegasstripguide.site" className="text-vegas-gold hover:underline">hello@vegasstripguide.site</a></p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-vegas-text-gray text-sm">
        © 2025 VegasStripGuide.com · <Link to="/privacy" className="hover:text-vegas-gold">Privacy</Link> · <Link to="/terms" className="hover:text-vegas-gold">Terms</Link> · <Link to="/affiliate-disclosure" className="hover:text-vegas-gold">Affiliate Disclosure</Link>
      </footer>
    </div>
  )
}
