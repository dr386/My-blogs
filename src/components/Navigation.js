import { Avatar } from "antd";
import React, { useState } from "react";
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
    title: "Contact us",
    path: "/contact-us",
  },
  {
    title: "Login",
    path: "/login",
  },
];

const Navigation = (user) => {
  return (
    <nav className="site-navigation" role="navigation">
      <span className="menu-title">My Blog</span>
      <div className="menu-content-container">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <span>
          <Avatar
            src={
              "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            }
            size={38}
          />
          <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
