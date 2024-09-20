import React from "react";

const Footer = () => {
  return (
    <footer>
      <a href="" className="back-option">
        Back to top
      </a>
      <div className="footer-links">
        <ul>
          <p>Get to Know Us</p>
          <a>Careers</a>
          <a>Blog</a>
          <a>About DBS</a>
          <a>Investor Relations</a>
          <a>DBS Devices</a>
          <a>DBS Science</a>
        </ul>
        <ul className=" lg:block hidden">
          <p>Make Money with Us</p>
          <a>Sell products on DBS</a>
          <a>Sell on DBS Business</a>
          <a>Sell apps on DBS</a>
          <a>Become an Affiliate</a>
          <a>Self-Publish with Us</a>
          <a>Host an DBS Hub</a>
          <a>›See More Make Money with Us</a>
        </ul>
        <ul>
          <p>DBS Payment Products</p>
          <a>DBS Business Card</a>
          <a>Shop with Points</a>
          <a>Reload Your Balance</a>
          <a>DBS Currency Converter</a>
        </ul>
        <ul className=" lg:block hidden">
          <p>Let Us Help You</p>
          <a>DBS and COVID-19</a>
          <a>Your Account</a>
          <a>Your Orders</a>
          <a>Shipping Rates &amp; Policies</a>
          <a>Returns &amp; Replacements</a>
          <a>Manage Your Content and Devices</a>
          <a>DBS Assistant</a>
          <a>Help</a>
        </ul>
      </div>
      <div className="country-info">
        <div className="logo">
          <img src="/delhiBookStore-logo.png" />
        </div>
        <div className="options">
          <select>
            <option value="En">English</option>
          </select>
          <select>
            <option value={1}>$ USD - U.S. Dollar</option>
          </select>
          <select>
            <option value={4}>United states</option>
          </select>
        </div>
      </div>
      <div className="policies">
        <div className="pages">
          <a href="">Conditions of Use</a>
          <a href="">Privacy Notice</a>
          <a href="">Your Ads Privacy Choices</a>
        </div>
        © 1996-2023, DBS.com, Inc. or its affiliates
      </div>
    </footer>
  );
};

export default Footer;
