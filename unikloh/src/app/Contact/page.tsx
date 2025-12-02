import React from 'react'

const Contact = () => {
  return (
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
  <form className="flex flex-col gap-4" 

      >
    <div className="flex flex-col">
      <label htmlFor="name" className="mb-1 font-semibold ">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Arthur"
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="email" className="mb-1 font-semibold ">Email</label>
      <input
        type="email"
        id="email"
        placeholder="arthur@gmail.com"
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="mobile" className="mb-1 font-semibold ">Mobile</label>
      <input
        type="tel"
        id="mobile"
        placeholder="11112222"
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="message" className="mb-1 font-semibold ">Message</label>
      <textarea
        id="message"
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
  )
}

export default Contact
