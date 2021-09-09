import React, { useState } from "react";
import repositoryFactory from "../repository/repositoryFactory";
import {notification } from "antd";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message,
      description,
    });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginService = repositoryFactory.get("login");

  const onLogin = async () => {
    let data = {
      email,
      password,
    };
    try {
      // let res = await loginService.login(data);
      // if (res.status === 200) {
      //   localStorage.setItem("my-token", res.data.accessToken);
      //   openNotificationWithIcon(
      //     "success",
      //     "Thành công",
      //     "Đăng nhập thành công!"
      //   );
      
      // } 

      localStorage.setItem("isLogin", true);
      history.push("/");
    } catch (error) {
      openNotificationWithIcon("error", "Thất bại", "Đăng nhập thất bại!");
    }
  };


 
  return (
    <div className="form-container flex items-center w-full h-full bg-white">
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-xs">
          <div className="text-5xl font-extrabold text-center mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Hello world!
            </span>
          </div>

          <div className="bg-white shadow-xl border border-gray-100 rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                value={email}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="***********"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => onLogin()}
              >
                Login
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-600"
                href="#"
              >
                Register account
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs">
            &copy;2021 N4mSama. All rights reserved.
          </p>
        </div>
      </div>
      {/* <div className="w-2/3 h-full ">
        <img
          src="/images/bg-login.jpg"
          className="object-cover w-full h-full"
          alt="image"
        />
      </div> */}
    </div>
  );
}
