import { useEffect, useState, useRef } from 'react'
import './App.css'
import { 
  ChevronRight, 
  MapPin, 
  Clock, 
  DollarSign, 
  Ticket,
  Star,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  ArrowRight,
  Check,
  Plus,
  Minus
} from 'lucide-react'

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Attractions', href: '#featured' },
    { name: 'Guides', href: '#guides' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#footer' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <Star className="w-8 h-8 text-vegas-gold fill-vegas-gold group-hover:animate-glow-pulse transition-all" />
            <span className="font-display text-xl font-bold text-white">
              Vegas<span className="text-vegas-gold">Strip</span>Guide
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-vegas-gold transition-colors duration-200 gold-underline text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#featured" 
              className="btn-gold text-sm animate-glow-pulse"
            >
              Plan Your Trip
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-vegas-gold transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#featured" className="btn-gold text-center mt-2">
                Plan Your Trip
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-las-vegas-strip.jpg"
          alt="Las Vegas Strip at Night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Best Things To Do
            <br />
            <span className="text-vegas-gold vegas-glow-text">On The Las Vegas</span>
            <br />
            <span className="text-6xl md:text-8xl lg:text-9xl text-vegas-gold vegas-glow-text">STRIP</span>
          </h1>
        </div>

        <div 
          className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Discover the top attractions, experiences, and tours on the most famous street in Las Vegas.
          </p>
        </div>

        <div 
          className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          <a 
            href="#featured" 
            className="inline-flex items-center gap-2 btn-gold text-lg px-8 py-4 animate-glow-pulse"
          >
            Explore Attractions
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* Floating Stats */}
        <div 
          className={`mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold text-vegas-gold">50+</div>
            <div className="text-sm text-white/60 mt-1">Attractions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold text-vegas-gold">4M+</div>
            <div className="text-sm text-white/60 mt-1">Visitors Yearly</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold text-vegas-gold">24/7</div>
            <div className="text-sm text-white/60 mt-1">Entertainment</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-vegas-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

// Featured Experiences Section
function FeaturedExperiences() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      title: 'High Roller Observation Wheel',
      description: 'Soar 550 feet above the Strip in the world\'s tallest observation wheel.',
      image: '/high-roller.jpg',
      price: 'From $29',
    },
    {
      title: 'Eiffel Tower Viewing Deck',
      description: 'Romantic views from 46 stories up at Paris Las Vegas.',
      image: '/eiffel-tower.jpg',
      price: 'From $25',
    },
    {
      title: 'FlyOver Las Vegas',
      description: 'Immersive flight experience over iconic landscapes.',
      image: '/flyover.jpg',
      price: 'From $32',
    },
    {
      title: 'Helicopter Night Flight',
      description: 'See Vegas from the sky with breathtaking aerial views.',
      image: '/helicopter-night.jpg',
      price: 'From $89',
    },
    {
      title: 'Big Apple Coaster',
      description: 'Thrill ride through the NYC skyline at New York-New York.',
      image: '/big-apple-coaster.jpg',
      price: 'From $19',
    },
  ]

  return (
    <section id="featured" ref={sectionRef} className="py-20 md:py-32 bg-vegas-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">
            Featured <span className="text-vegas-gold">Experiences</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Must-see attractions that define the Las Vegas Strip experience
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`group relative bg-vegas-charcoal rounded-xl overflow-hidden card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vegas-charcoal via-transparent to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-vegas-gold text-black px-3 py-1 rounded-full text-sm font-bold">
                  {exp.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-vegas-gold transition-colors">
                  {exp.title}
                </h3>
                <p className="text-vegas-text-gray text-sm mb-4">
                  {exp.description}
                </p>
                <button className="btn-outline w-full text-sm flex items-center justify-center gap-2 group/btn">
                  View Tickets
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Strip Attractions Guide Section
function AttractionsGuide() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const attractions = [
    {
      name: 'Bellagio Fountains',
      description: 'World-famous choreographed water show set to music and lights. Free to watch!',
      image: '/bellagio-fountains.jpg',
      price: 'Free',
      location: 'Bellagio Hotel',
    },
    {
      name: 'High Roller',
      description: '550-foot tall observation wheel with stunning 360° views of the Strip.',
      image: '/high-roller.jpg',
      price: 'From $29',
      location: 'The LINQ',
    },
    {
      name: 'Eiffel Tower Viewing Deck',
      description: 'Half-scale replica with romantic views from 46 stories high.',
      image: '/eiffel-tower.jpg',
      price: 'From $25',
      location: 'Paris Las Vegas',
    },
    {
      name: 'FlyOver Las Vegas',
      description: 'Immersive flying theater experience with wind, mist, and scents.',
      image: '/flyover.jpg',
      price: 'From $32',
      location: 'Strip Center',
    },
    {
      name: 'Big Apple Coaster',
      description: 'High-speed roller coaster with loops and drops around NYC skyline.',
      image: '/big-apple-coaster.jpg',
      price: 'From $19',
      location: 'New York-New York',
    },
    {
      name: 'STRAT Tower',
      description: 'Observation tower with thrill rides and panoramic city views.',
      image: '/strat-tower.jpg',
      price: 'From $20',
      location: 'The STRAT',
    },
    {
      name: 'Madame Tussauds',
      description: 'Get up close with lifelike wax figures of celebrities and icons.',
      image: '/madame-tussauds.jpg',
      price: 'From $37',
      location: 'The Venetian',
    },
    {
      name: 'Shark Reef Aquarium',
      description: 'Underwater adventure with sharks, rays, and exotic sea creatures.',
      image: '/shark-reef.jpg',
      price: 'From $29',
      location: 'Mandalay Bay',
    },
    {
      name: 'The Sphere',
      description: 'Revolutionary entertainment venue with immersive experiences.',
      image: '/the-sphere.jpg',
      price: 'From $79',
      location: 'The Sphere',
    },
  ]

  return (
    <section id="attractions" ref={sectionRef} className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">
            Strip <span className="text-vegas-gold">Attractions</span> Guide
          </h2>
          <p className="section-subtitle max-w-2xl">
            Your complete guide to the best experiences on the Las Vegas Strip
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <div
              key={attraction.name}
              className={`group relative bg-vegas-charcoal rounded-xl overflow-hidden transition-all duration-700 hover:shadow-gold-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Price Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold ${
                  attraction.price === 'Free' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-vegas-gold text-black'
                }`}>
                  {attraction.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-vegas-gold text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{attraction.location}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-vegas-gold transition-colors">
                  {attraction.name}
                </h3>
                <p className="text-vegas-text-gray text-sm mb-4">
                  {attraction.description}
                </p>
                <button className="w-full py-2.5 border border-vegas-gold/50 text-vegas-gold rounded hover:bg-vegas-gold hover:text-black transition-all duration-200 text-sm font-medium flex items-center justify-center gap-2">
                  <Ticket className="w-4 h-4" />
                  View Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Comparison Table Section
function ComparisonTable() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const comparisons = [
    { name: 'Bellagio Fountains', duration: '5 min', location: 'Bellagio', price: 'Free' },
    { name: 'High Roller', duration: '30 min', location: 'The LINQ', price: '$29-$61' },
    { name: 'Eiffel Tower', duration: 'Flexible', location: 'Paris', price: '$25-$35' },
    { name: 'FlyOver Vegas', duration: '30 min', location: 'Strip Center', price: '$32-$64' },
    { name: 'Big Apple Coaster', duration: '5 min', location: 'NYNY', price: '$19-$30' },
    { name: 'STRAT Tower', duration: 'Flexible', location: 'The STRAT', price: '$20-$130' },
    { name: 'Madame Tussauds', duration: '1-2 hrs', location: 'Venetian', price: '$37-$51' },
    { name: 'Shark Reef', duration: '1-2 hrs', location: 'Mandalay Bay', price: '$29-$35' },
    { name: 'The Sphere', duration: '2+ hrs', location: 'The Sphere', price: '$79-$250' },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-vegas-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">
            Compare <span className="text-vegas-gold">Experiences</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Find the perfect attraction for your Vegas adventure
          </p>
        </div>

        {/* Table */}
        <div className={`overflow-x-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-vegas-gold">
                <th className="text-left py-4 px-4 font-display text-lg text-vegas-gold">Attraction</th>
                <th className="text-left py-4 px-4 font-display text-lg text-vegas-gold">Duration</th>
                <th className="text-left py-4 px-4 font-display text-lg text-vegas-gold">Location</th>
                <th className="text-left py-4 px-4 font-display text-lg text-vegas-gold">Price Range</th>
                <th className="text-left py-4 px-4 font-display text-lg text-vegas-gold">Action</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr 
                  key={item.name}
                  className="border-b border-white/10 hover:bg-white/5 transition-colors group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="py-4 px-4 font-medium text-white group-hover:text-vegas-gold transition-colors">
                    {item.name}
                  </td>
                  <td className="py-4 px-4 text-vegas-text-gray">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-vegas-gold" />
                      {item.duration}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-vegas-text-gray">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-vegas-gold" />
                      {item.location}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-vegas-gold" />
                      <span className={item.price === 'Free' ? 'text-green-400 font-medium' : 'text-white'}>
                        {item.price}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-sm px-4 py-2 bg-vegas-gold/10 text-vegas-gold rounded hover:bg-vegas-gold hover:text-black transition-all duration-200">
                      View Tickets
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

// Travel Guides Section
function TravelGuides() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const guides = [
    {
      title: 'Best Night Attractions on the Strip',
      description: 'Discover the most spectacular nighttime experiences Vegas has to offer.',
      image: '/guide-night-attractions.jpg',
      featured: true,
    },
    {
      title: 'Best Free Things To Do',
      description: 'Enjoy world-class entertainment without spending a dime.',
      image: '/guide-free-things.jpg',
      featured: false,
    },
    {
      title: 'Best Romantic Attractions',
      description: 'Perfect spots for couples looking for a magical Vegas experience.',
      image: '/guide-romantic.jpg',
      featured: false,
    },
    {
      title: 'Top Thrill Rides in Las Vegas',
      description: 'Get your adrenaline pumping with these exciting attractions.',
      image: '/guide-thrill-rides.jpg',
      featured: false,
    },
    {
      title: 'Best Views of the Strip',
      description: 'The most breathtaking vantage points to see Vegas from above.',
      image: '/guide-best-views.jpg',
      featured: false,
    },
  ]

  return (
    <section id="guides" ref={sectionRef} className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">
            Travel <span className="text-vegas-gold">Guides</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Insider tips and recommendations for your Las Vegas adventure
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <div
              key={guide.title}
              className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ${
                guide.featured ? 'md:col-span-2 md:row-span-2' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${guide.featured ? 'h-80 md:h-full' : 'h-56'}`}>
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className={`font-display font-bold text-white mb-2 group-hover:text-vegas-gold transition-colors ${
                  guide.featured ? 'text-2xl md:text-3xl' : 'text-lg'
                }`}>
                  {guide.title}
                </h3>
                <p className={`text-white/70 mb-4 ${guide.featured ? 'text-base max-w-lg' : 'text-sm'}`}>
                  {guide.description}
                </p>
                <div className="flex items-center gap-2 text-vegas-gold text-sm font-medium">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Featured Badge */}
              {guide.featured && (
                <div className="absolute top-4 left-4 bg-vegas-gold text-black px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const faqs = [
    {
      question: 'What are the best attractions on the Las Vegas Strip?',
      answer: 'The top attractions include the Bellagio Fountains (free), High Roller observation wheel, Eiffel Tower Viewing Deck at Paris Las Vegas, FlyOver Las Vegas, and The Sphere. Each offers a unique experience from breathtaking views to immersive entertainment.',
    },
    {
      question: 'What is the number one attraction in Vegas?',
      answer: 'The Bellagio Fountains is widely considered the #1 attraction in Las Vegas. This free spectacular water show features choreographed fountains shooting up to 460 feet high, set to music and lights. Shows run every 15-30 minutes daily.',
    },
    {
      question: 'How long does it take to walk the Strip?',
      answer: 'The Las Vegas Strip is approximately 4.2 miles long. Walking the entire Strip at a leisurely pace takes about 90 minutes to 2 hours without stops. However, with all the attractions, shops, and casinos to explore, most visitors spend an entire day or more.',
    },
    {
      question: 'Which attractions require tickets?',
      answer: 'Most major attractions require tickets, including the High Roller ($29+), Eiffel Tower Viewing Deck ($25+), FlyOver Las Vegas ($32+), Madame Tussauds ($37+), Shark Reef Aquarium ($29+), and The Sphere ($79+). The Bellagio Fountains and many hotel attractions are free.',
    },
    {
      question: 'What are the best views of the Strip?',
      answer: 'The best views are from the High Roller observation wheel, Eiffel Tower Viewing Deck, STRAT Tower observation deck, and helicopter night flights. Many restaurants and bars in hotels like the Cosmopolitan\'s Chandelier Bar also offer stunning Strip views.',
    },
  ]

  return (
    <section id="faq" ref={sectionRef} className="py-20 md:py-32 bg-vegas-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">
            Frequently Asked <span className="text-vegas-gold">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about Las Vegas Strip attractions
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-white/10 rounded-lg overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-display text-lg text-white pr-4">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-vegas-gold flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-vegas-gold rotate-180' : ''
                }`}>
                  {openIndex === index ? (
                    <Minus className={`w-4 h-4 ${openIndex === index ? 'text-black' : 'text-vegas-gold'}`} />
                  ) : (
                    <Plus className="w-4 h-4 text-vegas-gold" />
                  )}
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-5 pt-0 text-vegas-text-gray leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer Section
function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Attractions', href: '#featured' },
    { name: 'Travel Guides', href: '#guides' },
    { name: 'FAQ', href: '#faq' },
  ]

  const attractions = [
    { name: 'High Roller', href: '#' },
    { name: 'Bellagio Fountains', href: '#' },
    { name: 'Eiffel Tower', href: '#' },
    { name: 'The Sphere', href: '#' },
  ]

  const support = [
    { name: 'Contact Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Affiliate Disclosure', href: '#' },
  ]

  return (
    <footer id="footer" ref={sectionRef} className="bg-black border-t border-white/10">
      {/* Newsletter Section */}
      <div className={`py-16 border-b border-white/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Get the Latest Vegas <span className="text-vegas-gold">Travel Tips</span>
          </h3>
          <p className="text-vegas-text-gray mb-8">
            Subscribe to our newsletter for exclusive deals and insider recommendations.
          </p>
          
          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-green-400">
              <Check className="w-5 h-5" />
              <span>Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-vegas-charcoal border border-white/20 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-vegas-gold transition-colors"
                required
              />
              <button type="submit" className="btn-gold flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#hero" className="flex items-center gap-2 mb-4">
                <Star className="w-8 h-8 text-vegas-gold fill-vegas-gold" />
                <span className="font-display text-xl font-bold text-white">
                  Vegas<span className="text-vegas-gold">Strip</span>Guide
                </span>
              </a>
              <p className="text-vegas-text-gray mb-6 max-w-sm">
                Your ultimate guide to Las Vegas Strip attractions. Discover the best experiences, tours, and hidden gems.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-vegas-gold hover:text-black hover:border-vegas-gold transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-vegas-text-gray hover:text-vegas-gold transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Attractions */}
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-4">Attractions</h4>
              <ul className="space-y-3">
                {attractions.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-vegas-text-gray hover:text-vegas-gold transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-vegas-text-gray hover:text-vegas-gold transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-vegas-text-gray text-sm">
            © 2025 VegasStripGuide.com. All rights reserved.
          </p>
          <p className="text-vegas-text-gray text-sm">
            This site contains affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedExperiences />
        <AttractionsGuide />
        <ComparisonTable />
        <TravelGuides />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
