import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
  {
    title: "Login",
    path: "/login",
  },
];

const Navigation = ({ user }) => {
  const [menuActive, setMenuActive] = useState(false);

  const handleDocumentClick = (event) => {
    if (
      !event.target.closest(".menu-content-container") &
      !event.target.closest("i", ".ion-ios-menu")
    ) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <nav className="site-navigation" role="navigation">
      <span className="menu-title">My Blog</span>
      <div
        className={`menu-content-container ${
          menuActive ? "active" : "inactive"
        }`}
      >
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <span className="menu-avatar-container">
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
            size={35}
          />
          <span className="menu-avatar-name">{`Hello, ${user.firstName}`}</span>
        </span>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => {
          setMenuActive(!menuActive);
        }}
      />
    </nav>
  );
};

export default Navigation;
