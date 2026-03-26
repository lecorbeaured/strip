import { Star, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
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
        <h1 className="font-display text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-vegas-text-gray text-sm mb-10">Last updated: March 2025</p>
        <div className="space-y-8 text-vegas-text-gray leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">1. Information We Collect</h2>
            <p>VegasStripGuide.com ("we," "us," or "our") collects information you provide directly, such as when you subscribe to our newsletter or contact us. This may include your name and email address. We also collect non-personal data automatically, including browser type, device type, pages visited, and time spent on site via analytics tools like Google Analytics 4 (GA4).</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To send you our newsletter and travel tips (only if you subscribed)</li>
              <li>To improve site content and user experience</li>
              <li>To understand site traffic via aggregated analytics</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">3. Affiliate Links &amp; Third Parties</h2>
            <p>This site contains affiliate links to third-party services including Viator, GetYourGuide, and Stay22. When you click these links and make a purchase, we may earn a commission at no additional cost to you. These third parties have their own privacy policies which govern their data collection practices.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">4. Cookies</h2>
            <p>We use cookies and similar tracking technologies to improve site functionality and analytics. You may disable cookies in your browser settings; however, some features may not function properly.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">5. Data Retention</h2>
            <p>We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy. Newsletter subscribers may unsubscribe at any time by clicking the unsubscribe link in any email we send.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. To make a request, contact us at the email address below.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">7. Contact</h2>
            <p>For privacy-related inquiries, email us at: <a href="mailto:hello@vegasstripguide.site" className="text-vegas-gold hover:underline">hello@vegasstripguide.site</a></p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-vegas-text-gray text-sm">
        © {new Date().getFullYear()} VegasStripGuide.com · <Link to="/privacy" className="hover:text-vegas-gold">Privacy</Link> · <Link to="/terms" className="hover:text-vegas-gold">Terms</Link> · <Link to="/affiliate-disclosure" className="hover:text-vegas-gold">Affiliate Disclosure</Link>
      </footer>
    </div>
  )
}
