"use client";
import React from 'react'
import BannerContact from '../component/banner/bannerContact'

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('https://revoubackend6-production.up.railway.app/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.text();
        console.error('Contact API error:', res.status, body);
        alert('Failed to send message. Please try again later.');
        return;
      }

      alert('Your message has been sent!');
      form.reset();
    } catch (err) {
      console.error('Error submitting contact form:', err);
      alert('Network error. Please try again later.');
    }
  };
  return (
    <>
    <BannerContact></BannerContact>
<div className="w-full max-w-lg mx-auto p-6 rounded-xl shadow-lg flex flex-col gap-6 mt-8 mb-8"
    style={{
      background: "var(--foreground)",
      color: "var(--background)",
    }}


>
  {/* Contact Info */}
  <div className="text-center space-y-2">
    <p className="text-lg font-medium">  📞 Call Us:{" "}
          <a
            href="tel:+6281211112222"
            className="font-bold text-red-600 hover:underline"
          >
            +62 812 1111 2222
          </a>
    </p>
    <p className="text-lg font-medium">📍 Location: <span className="font-bold">Unik Street, 292</span></p>
    <p className="text-lg font-medium">  ✉️ Email:{" "}
          <a
            href="mailto:contact@unikloh.com"
            className="font-bold text-red-600 hover:underline"
          >
            contact@unikloh.com
          </a>
    </p>
  </div>

  {/* Contact Form */}
  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    <div className="flex flex-col">
      <label htmlFor="name" className="mb-1 font-semibold ">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Arthur"
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="email" className="mb-1 font-semibold ">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="arthur@gmail.com"
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="mobile" className="mb-1 font-semibold ">Mobile</label>
      <input
        type="tel"
        id="mobile"
        name="mobile"
        placeholder="11112222"
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="message" className="mb-1 font-semibold ">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Hey, I want to send an enquiry"
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none h-24"
      />
    </div>

    <button
      type="submit"
      className=" py-2 rounded-md font-semibold hover:bg-red-700 transition-colors"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
    }}
    >
      Send Message
    </button>
  </form>
</div>
</>
  )
}

export default Contact
