import React from 'react'
import Link from 'next/link';

const Page = () => {
  const csrActivities = [
    {
      image: '/csr1.png',
      title: 'Community Clean-Up Event in Ujung Kulon',
      date: 'June 2019',
      description: 'Partnering with local communities to create a cleaner, healthier environment.'
    },
    {
      image: '/csr2.png',
      title: 'Beach Cleanup Initiative in Tanjung Priok',
      date: 'March 2022',
      description: 'Protecting our oceans and coastlines through community action.'
    },
    {
      image: '/csr3.png',
      title: 'Tree Planting Campaign in Bandung',
      date: 'December 2016',
      description: 'Growing a greener future, one tree at a time.'
    }
  ];

  return (
    <div className='w-full min-h-screen'
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Hero Section */}
      <div className='relative w-full h-[40vh] bg-gradient-to-r from-purple-900 via-red-900 to-purple-900 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60'></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center px-4'>
          <div className='text-center space-y-4 animate-fade-in-up'>
            <h1 className='text-4xl md:text-6xl font-bold text-white drop-shadow-2xl'>
              Corporate Social Responsibility
            </h1>
            <p className='text-xl md:text-2xl text-white/90 font-semibold drop-shadow-lg'>
              Making a Positive Impact in Our Communities
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-purple-400 to-pink-400 rounded-full"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse-slow"></div>
              <div className="h-1 w-16 bg-gradient-to-l from-transparent via-pink-400 to-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 py-16'>
        {/* Introduction */}
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent'>
            Our Commitment to Society
          </h2>
          <p className='text-lg max-w-3xl mx-auto opacity-80'>
            At Unik Loh, we believe in giving back to the community and protecting our environment. 
            Through various initiatives, we strive to create a positive impact on society and our planet.
          </p>
        </div>

        {/* CSR Activities Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {csrActivities.map((activity, index) => (
            <div
              key={index}
              className='group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in'
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image Container */}
              <div className='relative h-64 overflow-hidden'>
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className='w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500'></div>
                
                {/* Date Badge */}
                <div className='absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg'>
                  {activity.date}
                </div>
              </div>

              {/* Content */}
              <div className='p-6 border border-white/10'
                style={{
                  background: "var(--background)",
                  color: "var(--foreground)",
                }}
              >
                <h3 className='text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-300'>
                  {activity.title}
                </h3>
                <p className='text-sm opacity-70 leading-relaxed'>
                  {activity.description}
                </p>
                
                {/* Learn More Link */}
                <div className='mt-4 flex items-center gap-2 text-purple-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span>Learn More</span>
                  <svg className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className='bg-gradient-to-r from-purple-600 to-red-600 rounded-2xl p-12 text-center text-white shadow-2xl animate-fade-in-up'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Join Us in Making a Difference</h2>
          <p className='text-lg mb-8 max-w-2xl mx-auto opacity-90'>
            Want to participate in our future CSR activities or learn more about our initiatives? 
            Get in touch with us and be part of the change.
          </p>
          <button className='group relative px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
            <span className='relative z-10 flex items-center gap-2'>
                <Link href='/Contact'>
              Contact Us
              </Link>
              <svg className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
