import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-12 dark:bg-gray-800 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Side */}
        <div className="md:col-span-1">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-6">
              Contact <span className="text-green-600">Details</span>
            </h2>
            <div className="space-y-1 shadow-md p-5 rounded-lg border-2 border-green-100">
              <p className="mb-2 dark:text-gray-3">
                <strong>Address:</strong> 123 Main Street, City, Country
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +60 11-5111 0711
              </p>
              <p className="mb-6">
                <strong>Email:</strong> raihanuddin.dev@gmail.com
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">
            Working <span className="text-green-600">Hours</span>
          </h3>
          <ul className="space-y-1 shadow-md p-5 rounded-lg border-2 border-green-100">
            <li>
              Monday <span className="text-gray-600 ">9:30 am – 6.00 pm</span>
            </li>
            <li>
              Tuesday <span className="text-gray-600 ">9:30 am – 6.00 pm</span>
            </li>
            <li>
              Wednesday <span className="text-gray-600 ">9:30 am – 6.00 pm</span>
            </li>
            <li>
              Thursday <span className="text-gray-600 ">9:30 am – 6.00 pm</span>
            </li>
            <li>
              Friday <span className="text-gray-600 ">9:30 am – 6.00 pm</span>
            </li>
            <li>
              Saturday <span className="text-gray-600 ">9:30 am – 6.00 pm</span>
            </li>
            <li>
              Sunday <span className="text-red-500 font-semibold">Closed</span>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Send Us a <span className="text-green-600">Message</span></h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            We recently helped from small to large scale landscaping services.
            If you need any landscaping service or suggestions, please ask our
            experts — they will guide you as soon as possible.
          </p>
          <form className="space-y-4 dark:text-gray-300">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-1 gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border mb-4 border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border mb-4 border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
