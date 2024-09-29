import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionVerification = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <button className="bg-gray-200 py-2 px-4 rounded-l-lg focus:outline-none"><Link to="/">Admission Form</Link></button>
          <button className="bg-gray-300 py-2 px-4 rounded-r-lg focus:outline-none"><Link to="AdmissionVerify">AdmissionVerify</Link></button>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Admission Verification</h1>

        {/* CNIC Input */}
        <div className="flex flex-col mb-8">
          <label className="mb-1 text-gray-600" htmlFor="cnic">
            CNIC (Which you provided during form submission)
          </label>
          <input
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="CNIC"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionVerification