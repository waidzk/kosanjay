import React from "react";
import { useLocation } from "react-router-dom";

import Button from "elements/Button";
import BrandIcon from "parts/iconText";

export default function Header({ isCentered }) {
  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path ? " active" : "";
  };

  if (isCentered) {
    return (
      <nav className="flex justify-center items-center mx-28 p-4">
        <BrandIcon />
      </nav>
    );
  }

  return (
    <nav className="flex justify-between items-center mx-28 p-4">
      <div className="brand-icon">
        <BrandIcon />
      </div>
      <div className="menu-link">
        <ul className="flex items-center text-accent">
          <li className={`link-item${getNavLinkClass("/")}`}>
            <Button
              className="nav-link mx-4 hover:underline duration-75"
              type="link"
              href="/"
            >
              Home
            </Button>
          </li>
          <li className={`link-item${getNavLinkClass("/browse-by")}`}>
            <Button
              className="nav-link mx-4 hover:underline duration-75"
              type="link"
              href="/browse-by"
            >
              Browse by
            </Button>
          </li>
          <li className={`link-item${getNavLinkClass("/stories")}`}>
            <Button
              className="nav-link mx-4 hover:underline duration-75"
              type="link"
              href="/stories"
            >
              Stories
            </Button>
          </li>
          <li className={`link-item${getNavLinkClass("/agents")}`}>
            <Button
              className="nav-link mx-4 hover:underline duration-75"
              type="link"
              href="/agents"
            >
              Agents
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
