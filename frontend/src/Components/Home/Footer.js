import React from "react";
import "../../CSS/Home.css";

const Footer = () => {
  return (
    <div>
      <footer className="fixed-bottom bg-white p-2">
        <p>© 2023. All Rights Reserved.</p>
        <ul className="footerlist">
          <li>privacy</li>
          <li>terms</li>
          <li>sitemap</li>
          <li>Company details</li>
        </ul>

        <p> English (IN) ₹ INR</p>
      </footer>
    </div>
  );
};

export default Footer;
