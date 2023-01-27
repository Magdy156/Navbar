import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLInks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHight = linksRef.current.getBoundingClientRect().height;
    if (showLInks) {
      linksContainerRef.current.style.height = `${linksHight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLInks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo"></img>
          <button
            className="nav-toggle"
            onClick={() => {
              setShowLinks(!showLInks);
            }}
          >
            <FaBars />
          </button>
        </div>

        <div
          className={`${
            showLInks ? "links-container show-container" : "links-container"
          }`}
          ref={linksContainerRef}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
