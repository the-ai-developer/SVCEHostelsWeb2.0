import React, {useEffect, useState } from 'react';
import { 
  Home, 
  Shield, 
  Zap, 
  Palette, 
  Rocket, 
  Headphones, 
  ShieldCheck, 
  Download, 
  Clock, 
  Lock, 
  CheckCircle, 
  QrCode, 
  ScanLine, 
  Coffee, 
  Timer, 
  BadgeCheck,
  ChevronRight,
  Send,
  User,
  Mail,
  MessageSquare,
  Plus,
  Smartphone
} from 'lucide-react';

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, { threshold: 0.2 });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      if (section.id) {
        observer.observe(section);
      }
    });

    // Set up testimonial rotation
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(testimonialInterval);
      observer.disconnect();
    };
  }, []);

  const handleDownload = () => {
    if (isDownloading || isDownloaded) return;
    
    setIsDownloading(true);
    window.location.href = "/assets/SVCE-Hostels.apk";
    
    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
      alert("Download Started! Check your downloads folder.");
      
      setTimeout(() => {
        setIsDownloaded(false);
      }, 3000);
    }, 1500);
  };

  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download-section');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: <Lock className="w-12 h-12 text-yellow-400" />,
      title: "Secure Digital Entry",
      description: "Experience seamless and secure access with our digital pass system. No more fumbling with physical cards!"
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: "Real-time Verification",
      description: "Enjoy instant authentication with real-time scanning. Say goodbye to waiting in queues!"
    },
    {
      icon: <Palette className="w-12 h-12 text-yellow-400" />,
      title: "Sleek Modern UI",
      description: "Our intuitive and user-friendly interface ensures a hassle-free and enjoyable experience."
    },
    {
      icon: <Rocket className="w-12 h-12 text-yellow-400" />,
      title: "Instant Access",
      description: "Gain immediate entry with just a scan of your QR code. No more delays or complications!"
    },
    {
      icon: <Headphones className="w-12 h-12 text-yellow-400" />,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions or issues."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-yellow-400" />,
      title: "Data Privacy",
      description: "Your data is safe and secure with us. We adhere to strict privacy policies to protect your information."
    }
  ];

  const steps = [
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-400" />,
      title: "Apply for Pass",
      description: "Apply for your hostel pass from anywhere, anytime using the app."
    },
    {
      icon: <BadgeCheck className="w-12 h-12 text-blue-400" />,
      title: "Get Approval",
      description: "Your Resident Tutor will review and approve your pass request."
    },
    {
      icon: <QrCode className="w-12 h-12 text-blue-400" />,
      title: "Get Your QR Code",
      description: "Receive your unique QR code for secure and fast entry."
    },
    {
      icon: <ScanLine className="w-12 h-12 text-blue-400" />,
      title: "Scan & Enter",
      description: "Scan your QR code at the gate and enjoy seamless hostel entry."
    }
  ];

  const benefits = [
    {
      icon: <Coffee className="w-12 h-12 text-pink-400" />,
      title: "Convenience",
      description: "Apply from anywhere, anytime."
    },
    {
      icon: <Timer className="w-12 h-12 text-pink-400" />,
      title: "Speed",
      description: "Instant approval, skip the lines."
    },
    {
      icon: <Shield className="w-12 h-12 text-pink-400" />,
      title: "Security",
      description: "Secure QR codes, no more lost passes."
    }
  ];

  const testimonials = [
    {
      image: "/assets/Stud2.jpg",
      quote: "This app is a lifesaver! Hostel entry is so much easier now.",
      author: "Anjali, CSE"
    },
    {
      image: "/assets/Stud1.jpg",
      quote: "As an RT, this app has streamlined the pass approval process significantly.",
      author: "Mr. Kumar, Resident Tutor"
    },
    {
      image: "/assets/Stud1.jpg",
      quote: "The QR code system has made gate security much more efficient and reliable.",
      author: "Mr. Ravi, Security Officer"
    },
    {
      image: "/assets/Stud2.jpg",
      quote: "I love how I can apply for passes from my phone. No more running around!",
      author: "Priya, IT"
    },
    {
      image: "/assets/Stud2.jpg",
      quote: "The digital pass has greatly reduced paperwork and improved communication with parents.",
      author: "Mrs. Devi, Resident Tutor"
    },
    {
      image: "/assets/Stud1.jpg",
      quote: "It's much easier to verify passes now, and the records are all digital.",
      author: "Mr. Gopal, Security Officer"
    }
  ];

  const faqs = [
    {
      question: "How do I apply for a pass?",
      answer: "Download the SVCE Hostels app from the links provided on the website. Once installed, open the app and follow the instructions to apply for a pass."
    },
    {
      question: "How long is my QR code valid?",
      answer: "Your QR code is valid from half an hour before your pass start time until half an hour after your pass end time."
    },
    {
      question: "Can I apply for a pass in advance?",
      answer: "Yes, you can apply for a pass in advance. We recommend applying at least a day before you need the pass to ensure timely approval."
    },
    {
      question: "Who do I contact if I have trouble with the app?",
      answer: "You can contact the Hostel App Team for support. Their contact information is available on the website's footer."
    },
    {
      question: "What if I need to change my pass details after it's been approved?",
      answer: "Contact your Resident Tutor immediately. Delete the existing pass so you can apply for a new one."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, your data is secure. We use industry-standard encryption and security measures to protect your information."
    },
    {
      question: "Do I need an internet connection to use the app?",
      answer: "You will need an internet connection to apply for a pass and receive approval. However, once you have your QR code, you do not need an internet connection to scan it at the gate."
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden font-sans">
      {/* Background with animated gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800 z-[-2] animate-gradient-shift"></div>
      
      {/* Animated floating elements */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div 
          key={i}
          className={`fixed w-16 h-16 rounded-full backdrop-blur-lg flex items-center justify-center z-[-1] opacity-70 animate-float-${i % 5 + 1}`}
          style={{
            top: `${10 + (i * 8)}%`,
            left: i % 2 === 0 ? `${5 + (i * 7)}%` : 'auto',
            right: i % 2 !== 0 ? `${5 + (i * 5)}%` : 'auto',
            backgroundColor: `rgba(${i % 3 === 0 ? '255, 105, 180' : i % 3 === 1 ? '0, 172, 238' : '76, 175, 80'}, 0.2)`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${8 + i}s`
          }}
        >
          {i % 5 === 0 ? <Shield size={24} /> : 
           i % 5 === 1 ? <Zap size={24} /> : 
           i % 5 === 2 ? <QrCode size={24} /> : 
           i % 5 === 3 ? <Lock size={24} /> : 
           <Clock size={24} />}
        </div>
      ))}
      
      <div className="container max-w-6xl mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <header className="py-16 animate-fadeIn">
          <h1 className="text-6xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 animate-glow text-center md:text-7xl">
            SVCE Hostels
          </h1>
          <p className="tagline text-2xl mt-4 opacity-90 text-center font-light">Hostel Life Just Got Easier!</p>
        </header>
        
        {/* About section */}
        <section 
          id="about" 
          className={`rounded-xl backdrop-blur-md bg-white/5 p-8 md:p-12 transition-all duration-1000 transform ${
            visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">About the App</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Tired of the traditional paper pass system? We were too! That's why we created the SVCE Hostels App. 
              We understand the frustrations of manual verification, long queues, and the hassle of physical passes. 
              Our goal is to simplify and secure hostel entry for all SVCE students. Haven’t registered yet? Don’t wait—secure your SPOT with the link below!
            </p>
            
            {/* Button Container */}
            <div className="mb-10 flex flex-col md:flex-row justify-center items-center gap-4">
              <button 
                onClick={scrollToDownload}
                className="px-8 py-4 text-xl font-bold rounded-lg shadow-lg transform transition-all duration-300 bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 hover:-translate-y-1 hover:shadow-xl"
              >
              Click Here to Download
            </button>

            <button 
              onClick={() => window.location.href = 'http://forms.svcehostels.surge.sh'}
          className="px-8 py-4 text-xl font-bold rounded-lg shadow-lg transform transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-400 hover:from-purple-600 hover:to-blue-500 hover:-translate-y-1 hover:shadow-xl"
            >
              Click Here to Register
            </button>
            </div>

            <div className="overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="/assets/AppHome.jpg" 
                alt="SVCE Hostels App" 
                className="w-full h-auto transform transition-transform duration-700"
              />
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <h2 className="text-3xl font-bold mt-20 mb-10 text-yellow-400 text-center">Features</h2>
        <section 
          id="features" 
          className={`transition-all duration-1000 ${
            visibleSections.has('features') ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-md p-8 rounded-xl transition-all duration-500 hover:transform hover:-translate-y-2 hover:bg-white/10 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-300 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* How it works section */}
        <h2 className="text-3xl font-bold mt-20 mb-10 text-yellow-400 text-center">How It Works</h2>
        <section 
          id="how-it-works" 
          className={`transition-all duration-1000 ${
            visibleSections.has('how-it-works') ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl transition-all duration-500 hover:transform hover:-translate-y-2 hover:bg-white/10 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                <p className="text-gray-300 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Benefits section */}
        <h2 className="text-3xl font-bold mt-20 mb-10 text-yellow-400 text-center">Benefits</h2>
        <section 
          id="benefits" 
          className={`transition-all duration-1000 ${
            visibleSections.has('benefits') ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-md p-8 rounded-xl transition-all duration-500 hover:transform hover:-translate-y-2 hover:bg-white/10 group w-full md:w-64"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{benefit.title}</h3>
                <p className="text-gray-300 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Testimonials section */}
        <h2 className="text-3xl font-bold mt-20 mb-10 text-yellow-400 text-center">Testimonials</h2>
        <section 
          id="testimonials" 
          className={`transition-all duration-1000 ${
            visibleSections.has('testimonials') ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-96 md:h-80 overflow-hidden rounded-xl bg-white/5 backdrop-blur-md">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-700 transform ${
                  index === activeTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : index === (activeTestimonial + 1) % testimonials.length
                    ? 'opacity-0 translate-x-full'
                    : 'opacity-0 -translate-x-full'
                }`}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-yellow-400">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.author} avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl italic mb-4 text-center max-w-2xl">"{testimonial.quote}"</p>
                <p className="font-bold">- {testimonial.author}</p>
              </div>
            ))}
            
            {/* Navigation dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? 'bg-yellow-400 scale-125' : 'bg-white/30'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Download section */}
        <section 
          id="download-section" 
          className={`mt-20 p-8 md:p-12 rounded-xl backdrop-blur-md bg-yellow-400/10 transition-all duration-1000 transform ${
            visibleSections.has('download-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">📲 Download Now</h2>
          <p className="text-center text-lg mb-8">Get the app for your device and enjoy seamless hostel entry.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`flex items-center gap-2 px-6 py-4 rounded-lg font-bold text-lg transition-all ${
                isDownloading 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : isDownloaded 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-green-600 hover:bg-green-700 hover:-translate-y-1 hover:shadow-lg'
              }`}
            >
              {isDownloading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Downloading...</span>
                </>
              ) : isDownloaded ? (
                <>
                  <Download size={20} />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Smartphone size={20} />
                  <span>Download for Android</span>
                </>
              )}
            </button>
            
            <button
              disabled
              className="flex items-center gap-2 px-6 py-4 rounded-lg font-bold text-lg bg-gray-600 cursor-not-allowed"
            >
              <Smartphone size={20} />
              <span>iOS (Coming Soon)</span>
            </button>
          </div>
        </section>
        
        {/* FAQ section */}
        <h2 className="text-3xl font-bold mt-20 mb-10 text-yellow-400 text-center">Frequently Asked Questions</h2>
        <section 
          id="faq" 
          className={`transition-all duration-1000 ${
            visibleSections.has('faq') ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between font-semibold"
                >
                  <span>{faq.question}</span>
                  <ChevronRight 
                    size={20} 
                    className={`transition-transform duration-300 ${openFaq === index ? 'rotate-90' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`px-6 transition-all duration-300 overflow-hidden ${
                    openFaq === index ? 'max-h-40 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Contact section */}
        <h2 className="text-3xl font-bold mt-20 mb-10 text-yellow-400 text-center">Connect With Us</h2>
        <section 
          id="contact" 
          className={`transition-all duration-1000 ${
            visibleSections.has('contact') ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6 text-center">Let us know how we can assist you</h3>
              
              <form 
  action="https://formsubmit.co/svcehostel@svce.ac.in" 
  method="POST" 
  className="space-y-4"
>
  <div>
    <label htmlFor="name" className="block mb-2 text-sm">Your Name</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <User size={18} className="text-gray-400" />
      </div>
      <input 
        type="text" 
        id="name" 
        name="name" // Added name attribute
        className="w-full pl-10 pr-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white" 
        placeholder="John Doe"
        required
      />
    </div>
  </div>
  
  <div>
    <label htmlFor="email" className="block mb-2 text-sm">Email Address</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Mail size={18} className="text-gray-400" />
      </div>
      <input 
        type="email" 
        id="email" 
        name="email" // Added name attribute
        className="w-full pl-10 pr-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white" 
        placeholder="john@example.com"
        required
      />
    </div>
  </div>
  
  <div>
    <label htmlFor="message" className="block mb-2 text-sm">Your Query</label>
    <div className="relative">
      <div className="absolute top-3 left-3 pointer-events-none">
        <MessageSquare size={18} className="text-gray-400" />
      </div>
      <textarea 
        id="message" 
        name="message" // Added name attribute
        rows={4}
        className="w-full pl-10 pr-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white" 
        placeholder="How can we help you?"
        required
      ></textarea>
    </div>
  </div>
  
  <button 
    type="submit"
    className="w-full py-3 px-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-2"
  >
    <Send size={18} />
    <span>SUBMIT</span>
  </button>
</form>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl flex flex-col items-center justify-center">
              <div className="mb-8">
                <img 
                  src="/assets/Contact.jpg" 
                  alt="Contact us" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="mb-2">Email: svcehostel@svce.ac.in</p>
                <p className="mb-2">Phone: +91 1234567890</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <div className="mt-20 bg-white/5 backdrop-blur-md relative z-10">
        <footer className="py-8 text-center">
          <p className="text-white/90">© 2025 SVCE Hostels. All Rights Reserved.</p>
          <p className="mt-2 text-white/90">Dev Credits: @TheHostelAppTeam</p>
        </footer>
        </div>
      </div>
      </div>
  );
}

export default App;