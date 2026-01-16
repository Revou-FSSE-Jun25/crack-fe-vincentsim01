import React from 'react'
import PrivacyBanner from '../component/banner/privacybanner';

export const metadata = {
  title: "Privacy Policy - Unik Loh!",
  description: "Privacy policy and data protection information",
};

export const revalidate = 0; 

const page = () => {
  const sections = [
    {
      icon: "📋",
      title: "Information We Collect",
      content: [
        "Personal details (such as name, email address, phone number)",
        "Booking and rental information",
        "Payment and transaction details (processed securely by third-party providers)",
        "Photos taken during photoshoot sessions (with your consent)",
        "Website usage data (cookies, IP address, browser type)"
      ]
    },
    {
      icon: "🎯",
      title: "How We Use Your Information",
      content: [
        "Processing costume rentals, purchases, and photoshoot bookings",
        "Communicating booking confirmations, updates, or promotions",
        "Improving our services and customer experience",
        "Fulfilling legal or regulatory obligations",
        "Managing internal operations and customer support"
      ],
      note: "We will never sell or trade your personal data."
    },
    {
      icon: "📸",
      title: "Photoshoot & Image Usage",
      content: [
        "Photos taken during our photoshoot sessions remain your personal memories",
        "We will only use photos for marketing, social media, or promotional purposes with your explicit consent",
        "You may request removal of any published images at any time"
      ]
    },
    {
      icon: "🔒",
      title: "Data Protection & Security",
      content: [
        "Secure data storage systems",
        "Limited access to authorized personnel only",
        "Trusted third-party services with industry-standard security practices"
      ],
      note: "While no system is 100% secure, we strive to protect your information to the best of our ability."
    },
    {
      icon: "🤝",
      title: "Third-Party Services",
      content: [
        "We may use trusted third-party services (such as payment processors, booking platforms, or website analytics tools)",
        "These providers are only given access to data necessary to perform their services and are required to protect your information"
      ]
    },
    {
      icon: "🍪",
      title: "Cookies & Website Tracking",
      content: [
        "Improve website functionality",
        "Analyze traffic and usage patterns",
        "Enhance user experience"
      ],
      note: "You can disable cookies through your browser settings at any time."
    },
    {
      icon: "✅",
      title: "Your Rights",
      content: [
        "Access your personal data",
        "Request corrections or updates",
        "Request deletion of your data (subject to legal requirements)",
        "Withdraw consent for marketing communications"
      ],
      note: "To exercise your rights, please contact us using the details below."
    }
  ];

  return (
    <>
      <PrivacyBanner />
      
      <main className="w-full min-h-screen"
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-16">
          
          {/* Introduction */}
          <div className="mb-12 text-center animate-fade-in">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-100 to-red-100 dark:from-purple-900/30 dark:to-red-900/30 rounded-full mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent">
                Last updated: January 2026
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <div className="max-w-3xl mx-auto text-lg leading-relaxed opacity-80">
              <p className="mb-4">
                At <span className="font-bold text-purple-600">Unik Loh!</span>, we value your trust. As a cosplay costume shop, rental, and photoshoot studio created to help everyday people escape mundaneness and enter a magical world of fantasy, we are committed to protecting your personal data and respecting your privacy.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, and protect your information.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8 mb-16">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  borderColor: "var(--foreground)",
                  background: "var(--background)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {section.title}
                    </h2>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="opacity-80 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {section.note && (
                      <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                        <p className="text-sm italic opacity-90">
                          <span className="font-semibold">Note:</span> {section.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Policy Updates */}
          <div className="border rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up"
            style={{
              borderColor: "var(--foreground)",
              background: "var(--background)",
            }}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="text-3xl">🔄</span>
              Policy Updates
            </h2>
            <p className="opacity-80 leading-relaxed">
              Unik Loh! may update this Privacy Policy from time to time. Any changes will be posted on our website with an updated effective date.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-purple-600 to-red-600 rounded-2xl p-10 text-center text-white shadow-2xl animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <span className="text-4xl">📧</span>
              Contact Us
            </h2>
            <p className="text-lg mb-6 opacity-90">
              If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact us at:
            </p>
            <div className="space-y-3 text-lg">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">Email: contact@unikloh.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default page
