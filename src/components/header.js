import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
export default function Header() {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    history.push("/login");
  };

  return (
    <div
      style={{ background: "#242526" }}
      className="main-header flex items-center justify-between px-16 py-4 z-10 border-b-1 border-gray-600"
    >
      <div className="text-4xl font-extrabold text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Hello, world!
        </span>
      </div>

      <ul className="flex items-center my-0 uppercase text-white">
        <li>
          {" "}
          <Link to="/">Home </Link>
        </li>
        <li className="mx-12">
          {" "}
          <Link to="/me"> my collection </Link>
        </li>
        <li className="cursor-pointer" onClick={() => handleLogout()}>
          Logout
        </li>
      </ul>
    </div>
  );
}
