import React from "react";
import "../header/header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/photo">Photo</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
