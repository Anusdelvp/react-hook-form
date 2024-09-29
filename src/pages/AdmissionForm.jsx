import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AdmissionForm = () => {
const {register,handleSubmit,formState: { errors } } = useForm();

function dataFunction(data){
console.log(data);
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <button className="bg-gray-200 py-2 px-4 rounded-l-lg focus:outline-none"><Link to="/">Admission Form</Link></button>
          <button className="bg-gray-300 py-2 px-4 rounded-r-lg focus:outline-none"><Link to="AdmissionVerify">AdmissionVerify</Link></button>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Admission Form</h1>

        <form onSubmit={handleSubmit(dataFunction)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600" htmlFor="fullName">Full Name</label>
            <input 
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 "
              type="text"
              placeholder="Full Name"
              {...register('fullname',{required:true})}
            />
        {errors.fullname && <span className='text-red-500'>This field is required.</span>}
          </div>

          {/* Father Name */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600" htmlFor="fatherName">Father Name</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="Father Name"
              {...register('fathername',{required:true})}
            />
            {errors.fathername && <span className='text-red-500'>This field is required.</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600" htmlFor="email">Email</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              placeholder="Email"
              {...register('email',{required:true})}
            />
            {errors.email && <span className='text-red-500'>Email is required.</span>}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600" htmlFor="phone">Phone Number</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="Phone Number"
              {...register('Phone Number',{required:true})}
            />
            {errors.phoneNumber && <span className='text-red-500'>phone Number is required.</span>};
          </div>

          {/* National ID */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600" htmlFor="cnic">National ID (CNIC)</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="CNIC"
              {...register('CNIC',{required:true})}
              />
              {errors.CNIC && <span className='text-red-500'>CNIC is required.</span>};
            </div>
  
            
          
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600" htmlFor="dob">Date of Birth</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="date"
              placeholder="Date of Birth"
              {...register('Date of Birth',{required:true})}
              />
              {errors.DateofBirth && <span className='text-red-500'>Date of Birth is required.</span>};
            
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600" htmlFor="gender">Gender</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="Male"
              {...register('Gender',{required:true})}
              />
              {errors.Gender && <span className='text-red-500'>Gender is required.</span>};
            
            
          </div>

          {/* Laptop */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600" htmlFor="laptop">Do you have a Laptop?</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="Yes"
              {...register('Yes',{required:true})}
              />
              {errors.Yes && <span className='text-red-500'>Yes is required.</span>};
            
              
            
          </div>

          {/* Address */}
          <div className="flex flex-col col-span-2">
            <label className="mb-1 text-gray-600" htmlFor="address">Address</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="Address"
              {...register('Address',{required:true})}
              />
              {errors.Address && <span className='text-red-500'>Address is required.</span>};
            
            
          </div>

          {/* Last Qualification */}
          <div className="flex flex-col col-span-2">
            <label className="mb-1 text-gray-600" htmlFor="qualification">Last Qualification</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="Matric"
              
              {...register('Matric',{required:true})}
              />
              {errors.Matric && <span className='text-red-500'>Matric is required.</span>};
            
            
          </div>

          {/* Profile Image */}
          <div className="flex flex-col col-span-2">
            <label className="mb-1 text-gray-600" htmlFor="profileImage">Profile Image</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="file"
              id="profileImage"

            />
          </div>

          <div className="col-span-2">
            <ul className="list-disc ml-5 text-gray-600">
              <li>With white or blue background</li>
              <li>File type: jpg, jpeg, png</li>
              <li>Upload your recent passport-size picture</li>
              <li>Your face should be clearly visible without any glasses</li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
              Submit
            </button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;