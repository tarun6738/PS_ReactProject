import React, { useState } from 'react';


const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto w-full max-w-md">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img className="mb-4" alt="Swiggy Logo" width="150"/>
          <h1 className="text-lg font-medium mb-2 text-center">
            {isLogin ? 'Login' : 'Signup'}
          </h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email or Mobile Number
              </label>
              <input
                className="border border-gray-400 p-2 rounded-lg w-full"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                className="border border-gray-400 p-2 rounded-lg w-full"
                type="password"
              />
            </div>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  className="border border-gray-400 p-2 rounded-lg w-full"
                  type="password"
                />
              </div>
            )}
            <button className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 w-full">
              {isLogin ? 'Login' : 'Signup'}
            </button>
            <div className="my-4 text-center">
              <div className="text-gray-600">
                {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
              </div>
              <button
                className="text-orange-500 ml-2 hover:underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Signup' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
