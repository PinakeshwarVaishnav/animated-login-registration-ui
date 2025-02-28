"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const LoginForm = () => {
  return (
    <motion.div
      className="w-full max-w-md mx-auto mt-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <form className="text-white rounded-2xl px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold"
          >
            Welcome Back
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 mt-2 mb-4"
          >
            Sign in to your account
          </motion.p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Email
          </label>
          <motion.input
            type="email"
            id="email"
            placeholder="name@example.com"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:text-gray-300 leading-tight focus:outline-none"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-white text-sm font-bold mb-2"
          >
            Password
          </label>
          <motion.input
            type="password"
            id="password"
            placeholder="********"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:text-gray-300 leading-tight focus:outline-none"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
          />
        </div>
        <motion.button
          type="submit"
          className="bg-white hover:bg-gray-600 hover:text-white text-black font-bold py-2 px-4 rounded w-full cursor-pointer"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Sign In
        </motion.button>
        <div className="flex flex-col justify-center items-center">
          <p className="mt-4 text-center text-l">Don&apos;t have an account?</p>
          <Link href="/register" className="hover:underline">
            Register
          </Link>
        </div>
      </form>
    </motion.div>
  );
};

export default LoginForm;
