// pages/register.js
import Head from "next/head";

export default function Register() {
  return (
    <div className="flex min-h-screen bg-blue-50 justify-center items-center">
      <Head>
        <title>Monopoly Game Registration</title>
      </Head>

      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullname"
            >
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Full Name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="profile-image"
            >
              Profile Image
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              id="profile-image"
              type="file"
              accept="image/*"
            />
          </div>

          <div className="flex items-center justify-center">
            {" "}
            {/* Center the button */}
            <button
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="button"
            >
              {" "}
              {/* Make the button full width */}
              Register
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 Monopoly Game. All rights reserved.
        </p>
      </div>
    </div>
  );
}
