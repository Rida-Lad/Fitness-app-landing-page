import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronLeft, Heart, Dumbbell, Users, Clock, Star, Instagram, Twitter, Facebook } from 'lucide-react';
import ProgramsSection from './components/ProgramsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Navbar scroll effect
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "This program completely transformed my approach to fitness. I've never felt stronger or more confident!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "The personalized workout plans and nutrition advice have helped me achieve goals I never thought possible.",
      rating: 5
    },
    {
      id: 3,
      name: "Aisha Williams",
      text: "After trying countless fitness programs, this is the only one that's given me sustainable results.",
      rating: 4
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div style={{ fontFamily: 'Sora' }}>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-opacity-90 shadow-md' : 'bg-opacity-100'} bg-[#8B4513] text-[#FFE4C4]`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Branding */}
          <div style={{ fontFamily: 'Shadows Into Light' }} className="text-2xl font-bold">FitJourney</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Programs', 'Pricing', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#FFE4C4]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#8B4513] py-4">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              {['Home', 'About', 'Programs', 'Pricing', 'Contact'].map((item, index) => (
                <div key={item} className="flex flex-col">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[#FFE4C4] hover:text-white transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                  {index < 4 && <hr className="w-full border-[#FFE4C4]/30 mt-2" />}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>







      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-[#FFE4C4] text-[#8B4513] relative overflow-hidden">
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Main Hero Text */}
            <div className="max-w-2xl mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Transform Your Body, Transform Your Life
              </h1>
              <p className="text-xl md:text-xl mb-6 md:mb-8">
                Personalized fitness programs designed for sustainable results and lasting change.
              </p>
              <button className="mt-4 bg-[#8B4513] text-[#FFE4C4] px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg md:text-xl">
                Get Started
              </button>
            </div>

            {/* Quote Block */}
            <blockquote className="max-w-xl p-6 bg-transparent rounded-xl border-2 border-[#8B4513]">
              <p className="text-xl md:text-2xl font-semibold mb-2">"Fitness is not about being better than someone else, it's about being better than you used to be."</p>
              <cite className="block text-sm">— FitJourney Philosophy</cite>
            </blockquote>
          </div>
        </div>

        {/* Rain Animation */}
        <div className="absolute inset-0 z-0">
          <div className="rain">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="rain-drop"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${Math.random() * 5 + 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </section>










      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-[#8B4513] text-[#FFE4C4] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold mb-8">About Us</h2>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl">
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-64 md:h-96 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
                  alt="FitJourney Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#8B4513]/40"></div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-6">
                {/* Philosophy */}
                <h3 className="text-2xl font-semibold">Our Philosophy</h3>
                <p className="text-lg">
                  At FitJourney, we believe fitness is a journey—not a destination. Our programs focus on sustainable habits that align with your lifestyle.
                </p>
                <p className="text-lg">
                  Founded in 2018, our team of certified trainers and nutritionists craft personalized plans for lasting results.
                </p>

                {/* Key Values */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-2 h-2 bg-[#FFE4C4] rounded-full"></span>
                    <span className="text-lg">Personalized Programs</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-2 h-2 bg-[#FFE4C4] rounded-full"></span>
                    <span className="text-lg">Expert Guidance</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-2 h-2 bg-[#FFE4C4] rounded-full"></span>
                    <span className="text-lg">Community Support</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-6 border-2 border-[#FFE4C4] text-[#FFE4C4] px-6 py-2 rounded-md hover:bg-[#FFE4C4] hover:text-[#8B4513] transition-all duration-200">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Guaranteed Wave Animation */}
        <div className="absolute inset-0 z-0">
          <div className="wave-animation"></div>
        </div>
      </section>





      {/* Programs Section */}
      <ProgramsSection />

      {/* Testimonials Section */}
      <section id="pricing" className="min-h-screen flex items-center bg-[#8B4513] relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#FFE4C4]">
            What Our Clients Say
          </h2>

          <div className="max-w-3xl mx-auto relative">
            {/* Testimonial Card */}
            <div className="bg-[#FFE4C4] bg-opacity-10 rounded-xl p-8 relative shadow-lg backdrop-blur-sm border border-[#FFE4C4]/20">
              <div className="flex justify-center mb-6">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} size={24} fill="#552f00" color="#6c3d00" />
                ))}
              </div>
              <p className="text-lg text-center mb-6 italic text-[#6c3d00] font-bold relative">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-center gap-2">
                <p className="text-center font-semibold text-[#4e2b00]">
                  {testimonials[currentTestimonial].name}
                </p>
                {testimonials[currentTestimonial].company && (
                  <span className="text-sm opacity-80 text-[#5c3300]">
                    at {testimonials[currentTestimonial].company}
                  </span>
                )}
              </div>
            </div>



            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-[#552f00] bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all border border-[#FFE4C4]/20"
              >
                <ChevronLeft size={24} className="text-[#FFE4C4]" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-[#552f00] bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all border border-[#FFE4C4]/20"
              >
                <ChevronRight size={24} className="text-[#FFE4C4]" />
              </button>
            </div>
          </div>
        </div>'


        {/* Confetti Animation */}
        <div className="absolute inset-0 z-0">
          <div className="speech-bubble-container">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="speech-bubble"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`, // Added vertical positioning
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  width: `${Math.random() * 20 + 10}px`,
                  height: `${Math.random() * 20 + 10}px`
                }}
              />
            ))}
          </div>
        </div>

      </section>











      {/* CTA Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-[#8B4513] text-[#FFE4C4] py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FitJourney</h3>
              <p className="mb-4">Transform your body, transform your life with our expert-guided fitness programs.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Programs', 'Pricing', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                {['Strength Training', 'Cardio & HIIT', 'Group Classes', 'Nutrition Planning', 'Premium Coaching'].map((item) => (
                  <li key={item}>
                    <a href="#programs" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic">
                <p className="mb-2">123 Fitness Street</p>
                <p className="mb-2">Wellness City, WC 12345</p>
                <p className="mb-2">info@fitjourney.com</p>
                <p>(123) 456-7890</p>
              </address>
            </div>
          </div>

          <div className="border-t border-[#FFE4C4] border-opacity-20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} FitJourney. All rights reserved.</p>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="rain2">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="rain-drop2"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${Math.random() * 5 + 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;