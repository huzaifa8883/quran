import React, { useState } from 'react';
import {
  Phone, Mail, Clock, MessageCircle, ArrowRight, CheckCircle,
  Facebook, Twitter, Instagram, Youtube
} from 'lucide-react';
import Footer from "./Footer";

const ContactPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", contactForm);
    setFormSubmitted(true);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-800 to-emerald-950 h-[45rem] overflow-hidden">
        <div className="absolute inset-0">
          {/* Decorative Islamic Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('/api/placeholder/100/100')] bg-repeat" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/80 to-emerald-950/90" />
        </div>
        
        <div className="relative max-w-7xl mx-auto pt-32 pb-40 px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-8xl font-extrabold text-white mb-6 font-serif tracking-wider animate-fade-in">
              تواصل معنا
            </h1>
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-100 mb-8">
              Connect With Us
            </h2>
            <p className="mt-8 text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed font-light">
              We're here to guide you on your spiritual journey. Let us help you discover the beauty 
              and wisdom of the Holy Quran through our dedicated support and guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Phone className="h-8 w-8 text-white" />,
              title: "Call Us",
              lines: ["+1 (234) 567-8900", "Available 24/7"],
              gradient: "from-emerald-500 to-emerald-600",
              bgGradient: "from-emerald-50 to-white",
            },
            {
              icon: <Mail className="h-8 w-8 text-white" />,
              title: "Email Us",
              lines: ["support@quran.com", "info@quran.com"],
              gradient: "from-emerald-600 to-emerald-700",
              bgGradient: "from-emerald-50 to-white",
            },
            {
              icon: <Clock className="h-8 w-8 text-white" />,
              title: "Open Hours",
              lines: ["Monday - Friday", "9:00 AM - 10:00 PM"],
              gradient: "from-emerald-700 to-emerald-800",
              bgGradient: "from-emerald-50 to-white",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b ${card.bgGradient} rounded-3xl shadow-xl p-8 border border-emerald-100 hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">{card.title}</h3>
                {card.lines.map((line, i) => (
                  <p key={i} className="text-emerald-700 font-medium">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-emerald-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Enhanced Image Section */}
            <div className="relative h-[600px] lg:h-auto bg-emerald-900 overflow-hidden">
              <img
                src="/api/placeholder/800/600"
                alt="Online Learning"
                className="w-full h-full object-cover opacity-30 scale-110 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/90 to-emerald-950/95" />
              <div className="absolute inset-0 flex items-center justify-center text-center p-12">
                <div className="space-y-8">
                  <h3 className="text-5xl font-bold text-white mb-6">Online Learning</h3>
                  <p className="text-emerald-100 max-w-md mx-auto text-lg font-light leading-relaxed">
                    Join our vibrant online community to deepen your understanding of the Holy Quran. 
                    Experience the convenience of learning from anywhere, guided by expert teachers.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="px-12 py-16 lg:px-16 bg-gradient-to-br from-white to-emerald-50">
              <div className="max-w-lg">
                <h2 className="text-4xl font-bold text-emerald-950 mb-3 flex items-center gap-4">
                  <MessageCircle className="w-10 h-10 text-emerald-600" />
                  Send Your Message
                </h2>
                <p className="text-xl text-emerald-700 mb-10 font-light">
                  We'll get back to you as soon as possible, In Sha Allah.
                </p>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-900 mb-4">Message Sent!</h3>
                    <p className="text-emerald-700 text-lg">
                      Thank you for reaching out. We will respond to your message soon, In Sha Allah.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-8">
                    {[
                      { name: 'name', type: 'text', label: 'Your Name', placeholder: 'Enter your name' },
                      { name: 'email', type: 'email', label: 'Your Email', placeholder: 'Enter your email' },
                    ].map((field) => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="block text-sm font-medium text-emerald-700 mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          id={field.name}
                          value={contactForm[field.name]}
                          onChange={handleContactChange}
                          required
                          className="w-full px-6 py-4 rounded-xl border border-emerald-200 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 text-lg bg-white/50 backdrop-blur-sm"
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-emerald-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows="6"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border border-emerald-200 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 text-lg bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your message"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-5 px-8 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-medium shadow-lg text-lg flex items-center justify-center gap-3 hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 hover:shadow-xl"
                    >
                      Send Message
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;