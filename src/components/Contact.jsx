import React, { useState } from 'react'

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const copyToClipboard = () => {
    const email = "your-email@example.com"; // Replace later
    navigator.clipboard.writeText(email)
      .then(() => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
      })
      .catch(err => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <div id='contact' className='flex min-h-[70vh] min-w-full items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-3 space-y-6 p-14'>
        <h1 className='text-center text-5xl md:text-7xl'>
          <span className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>
            Get in touch!
          </span>
        </h1>

        <p className='text-center text-lg font-semibold text-gray-300 '>
          You can send me an email here:
        </p>

        {showPopup && (
          <div className="absolute bg-indigo-500 text-white p-2 rounded-lg shadow-lg mb-4">
            Email copied to clipboard!
          </div>
        )}

        <button
          className='text-nowrap relative rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg text-white font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600'
          onClick={copyToClipboard}
        >
          Copy email
        </button>
      </div>
    </div>
  );
};

export default Contact;
