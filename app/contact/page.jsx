'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [showOrderFields, setShowOrderFields] = useState(false);

  const handleIssueChange = (e) => {
    const issue = e.target.value;
    setSelectedIssue(issue);
    setShowOrderFields(issue === 'Payment Issue');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="mt-6">
      <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-md rounded-md font-sans">
        {/* Left Section */}
        <div>
          <h1 className="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
          <p className="text-sm text-gray-500 mt-4">
            Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.
          </p>

          {/* Contact Information */}
          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-blue-500" />
                </div>
                <a href="mailto:info@example.com" className="text-blue-500 text-sm ml-4">
                  <small className="block">Mail</small>
                  <strong>syedfaizan443@example.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Socials</h2>
            <ul className="flex mt-4 space-x-4">
              {/* Social Icons */}
              {/* Add your social icons as needed */}
            </ul>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form className="space-y-4 w-full" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
              required
            />
          </div>

          {/* Dropdown for issue type */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="issue">What do you need help with?</label>
            <select
              id="issue"
              onChange={handleIssueChange}
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
              required
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="Create Project">Create a Project</option>
              <option value="Payment Issue">Payment Issue</option>
            </select>
          </div>

          {/* Conditionally display Order ID and Transaction ID */}
          {showOrderFields && (
            <>
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="orderId">Order ID</label>
                <input
                  id="orderId"
                  type="text"
                  placeholder="Order ID"
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="transactionId">Transaction ID</label>
                <input
                  id="transactionId"
                  type="text"
                  placeholder="Transaction ID"
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                  required
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="For payment issues, please provide the date and upload a screenshot."
              rows="6"
              className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
              required
            ></textarea>
          </div>
          <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Upload Your file</label>
          <input className='bg-white text-red-500 border-none'  type="file" id="file" name="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"  /> 
          </div>

          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full mt-6"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
