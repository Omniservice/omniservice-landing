import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="p-5 text-center footer-wrapper">OmniService © {year}. All rights reserved. </div>
  );
}

export default Footer;