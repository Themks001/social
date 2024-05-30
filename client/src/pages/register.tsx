import React, { useState } from "react";

const create = () => {
  const [error, setError] = useState("");
  const [registerData, setregisterData] = useState({
    username: "",
    password: "",
    email: "",
    cpassword: ""
  });
  const handleChange = e => {
    const { value, name } = e.target;
    setregisterData(p => {
      return {
        ...p,
        [name]: value
      };
    });
  };
  const handleSubmit = async e => {
    try {
      alert("data sent")
      e.preventDefault();
      const { username, password, email, cpassword } = registerData;
      if (cpassword === password) {
        const response = await fetch("http://localhost:3000/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, password, email })
        });
        await response.json();
      } else {
        setError("unmatched password");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl h-full w-full text-white"
    >
      <div className="rounded-xl flex justify-around ">
        <div className="flex flex-col w-full md:w-auto items-stretch">
          <br />
          <h2 className="text-2xl text-center"> Register </h2>
          <br />
          <div>
            <label htmlFor="Username" className="text-xl">
              Username
            </label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              value={registerData.username}
              onChange={handleChange}
              className="bg-gray-100 w-full text-black outline-0 rounded-sm p-2 text-xl"
            />
          </div>
          <div className="block py-1">
            <label htmlFor="password" className="text-xl">
              email
            </label>
            <br />
            <input
              type="email"
              id="email"
              onChange={handleChange}
              name="email"
              value={registerData.email}
              className="w-full outline-0 text-black bg-gray-100 rounded-sm p-2 resize-none text-xl"
            />
          </div>

          <div className="block py-2">
            <label htmlFor="password" className="text-xl">
              password
            </label>
            <br />
            <input
              type="password"
              id="password"
              onChange={handleChange}
              name="password"
              value={registerData.password}
              className="w-full text-black outline-0 bg-gray-10 p-2 resize-none text-xl"
            />
          </div>
          <div className="block py-2">
            <label htmlFor="cpassword" className="text-xl">
              confirm password
            </label>
            <br />
            <input
              type="password"
              id="cpassword"
              onChange={handleChange}
              name="cpassword"
              value={registerData.cpassword}
              className="w-full text-black outline-0 bg-gray-100 rounded-sm p-2 resize-none text-xl"
            />
          </div>
          <span className="text-rose-600">{error}</span>
          <div className="flex justify-around flex-col">
            <div className="flex w-full py-2 justify-between">
              <span>already have an account?</span>
              <a href="/auth/login" className="text-blue-300 underline">
                Sign in
              </a>
            </div>
          </div>
          <div className="py-5 flex justify-between">
            <a href="/">
              <input
                type="button"
                value="discard"
                id="title"
                className="bg-neutral-700 hover:text-white hover:bg-rose-600 text-white rounded-sm p-2 text-xl"
              />
            </a>
            <input
              type="submit"
              value="create"
              id="title"
              className="bg-gray-100 text-gray-700 hover:bg-green-600 outline-0 rounded-sm p-2 text-xl"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default create;
