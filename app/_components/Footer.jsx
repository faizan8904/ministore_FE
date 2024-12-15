import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content bg-slate-950 mt-10 p-10">
      <nav className="flex flex-col items-center space-y-4">
        {/* Centered Links */}
        <div className="grid grid-cols-3 gap-4 sm:gap-2 text-center sm:grid-cols-6">
          <a href='/about' className="link link-hover">About Us</a>
          <a href='/contact' className="link link-hover">Contact</a>
          <a href='/' className="link link-hover">Home</a>
          <a href='/privacypolicy' className="link link-hover">Privacy Policy</a>
          <a href='/disclaimer' className="link link-hover">Disclaimer</a>
          <a href='/termscondition' className="link link-hover">Terms and Conditions</a>
        </div>

        {/* Social Media Icons */}
        <div className="grid grid-flow-col gap-8">
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          <a href="https://youtube.com">
            <FontAwesomeIcon icon={faYoutube} size="1x" />
          </a>
        </div>
      </nav>

      {/* Copyright Text */}
      <aside className="mt-4 text-center">
        <p>Copyright © 2024 - All rights reserved by Free Project</p>
      </aside>
    </footer>
  );
}

export default Footer;
