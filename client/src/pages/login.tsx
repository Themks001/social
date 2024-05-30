import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const create = () => {
    const [_, setCookie] = useCookies(["access-token"]);
    const navigate = useNavigate();
    const [loginData, setloginData] = useState({
        username: "",
        password: ""
    });
    const handleChange = e => {
        const { value, name } = e.target;

        console.log(loginData.username);
        setloginData(p => {
            return {
                ...p,
                [name]: value
            };
        });
    };
    const handleSubmit = async e => {
        try {
            e.preventDefault();
            const { username, password } = loginData;
            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });
            const responseAfterLogin = await response.json();
            console.log(responseAfterLogin.userId)
            window.localStorage.setItem("userID", responseAfterLogin.userId);
            setCookie("access_token", responseAfterLogin.token);
            console.log(document.cookie);
            navigate("/");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className=" rounded-xl text-white p-5 h-full w-full my-4"
        >
            <div className="rounded-xl flex lg:gap-11 gap-0 justify-around sm:p-8 my-5">
                <div className="p-4 my-1 flex flex-col rounded-3xl w-full md:w-auto items-stretch">
                    <br />
                    <h2 className="text-2xl text-center"> Welcome Back!</h2>
                    <br />
                    <div className="my-3">
                        <label htmlFor="Username" className="text-xl">
                            Username
                        </label>
                        <br />
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={loginData.username}
                            onChange={handleChange}
                            required
                            className="bg-gray-100 text-black w-full outline-0 rounded-sm p-2 text-xl"
                        />
                    </div>

                    <div className="block py-6">
                        <label htmlFor="password" className="text-xl">
                            password
                        </label>
                        <br />
                        <input
                            type="text"
                            id="password"
                            onChange={handleChange}
                            name="password"
                            value={loginData.password}
                            className="w-full outline-0 bg-gray-100 text-black rounded-sm p-2 resize-none text-xl"
                        />
                    </div>
                    <div className="flex justify-around flex-col">
                        <div className="">
                            <a href="" className="text-blue-300">
                                forget password ?
                            </a>
                        </div>
                        <div className="flex w-full py-2 justify-between">
                            <span>don't have an account?</span>
                            <a href="/auth/register" className="text-blue-300">
                                Register
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
                            className="bg-neutral-200 text-gray-700 hover:bg-green-400 outline-0 rounded-sm p-2 text-xl"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default create;
