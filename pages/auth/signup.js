import React, {useState} from 'react'
import PhoneInput from 'react-phone-input-2'

function Signup() {
    const [value, setValue] = useState();
  return (
    <div className="flex items-center min-h-screen bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img className="object-cover w-full h-full" src="https://source.unsplash.com/user/erondu/1600x900"
              alt="img" />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-green-500" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                Sign up
              </h1>
              <div>
                <label className="block text-m">
                  Name
                </label>
                <input type="text"
                  className="placeholder-gray-500 w-full px-2.5 py-1.5 text-m border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Name" />
              </div>
              <div className="mt-4">
                <label className="block text-m">
                  Email
                </label>
                <input type="email"
                  className="placeholder-gray-500 w-full px-2.5 py-1.5 text-m border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Email Address" />
              </div>
              <div className="mt-4">
                <PhoneInput
                    placeholder="Phone number"
                    value={value}
                    onChange={setValue}
                    />
              </div>
              <div>
                <label className="block mt-4 text-m">
                  Password
                </label>
                <input
                  className="placeholder-gray-500 w-full px-2.5 py-1.5 text-m border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Password" type="password" />
              </div>
              <button
                className="block w-full px-4 py-2 mt-4 text-m font-medium leading-5 text-center text-white transition-colors duration-150 bg-green-500 border border-transparent rounded-lg active:bg-green-500 hover:bg-green-600 focus:outline-none focus:shadow-outline-blue"
                href="#">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup