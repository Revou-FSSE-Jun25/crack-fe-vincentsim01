import React from 'react'

import { faqs } from "./data/faq";
import Banner2 from '@/app/component/banner/banner2'

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions",
};

export const revalidate = 0; 

const page = () => {
  return (
    <>
      <Banner2></Banner2>
 <main className="max-w-3xl mx-auto py-12">

      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="space-y-6">
        {faqs.map((item, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold">{item.question}</h2>
            <p className="text-gray-700 mt-1">{item.answer}</p>
          </div>
        ))}
      </div>
    </main>
    </>
  )
}

export default page
