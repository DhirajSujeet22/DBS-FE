import React from "react";

const Footer = () => {
  return (
    <footer>
      <a href="" className="back-option text-lg ">
        Back to top
      </a>
      <div className="footer-links pb-4 !h-full ">
        <ul className="  ">
          <p>Get to Know Us</p>
          <a className=" font-medium !text-xl">Careers</a>
          <a className=" font-medium !text-xl">Blog</a>
          <a className=" font-medium !text-xl">About DBS</a>
          <a className=" font-medium !text-xl">Investor Relations</a>
        </ul>
        <ul className=" lg:block hidden">
          <p>Make Money with Us</p>
          <a className=" font-medium !text-xl">Sell products on DBS</a>
          <a className=" font-medium !text-xl">Sell on DBS Business</a>
          <a className=" font-medium !text-xl">Sell apps on DBS</a>
          <a className=" font-medium !text-xl">Become an Affiliate</a>
          <a className=" font-medium !text-xl">Self-Publish with Us</a>
          <a className=" font-medium !text-xl">Host an DBS Hub</a>
          <a className=" font-medium !text-xl">›See More Make Money with Us</a>
        </ul>
        <ul>
          <p>DBS Payment Products</p>
          <a className=" font-medium !text-xl">DBS Business Card</a>
          <a className=" font-medium !text-xl">Shop with Points</a>
          <a className=" font-medium !text-xl">Reload Your Balance</a>
          <a className=" font-medium !text-xl">DBS Currency Converter</a>
        </ul>
        <ul className=" lg:block hidden">
          <p>Let Us Help You</p>
          <a className=" font-medium !text-xl">DBS and COVID-19</a>
          <a className=" font-medium !text-xl">Your Account</a>
          <a className=" font-medium !text-xl">Your Orders</a>
          <a className=" font-medium !text-xl">Shipping Rates &amp; Policies</a>
          <a className=" font-medium !text-xl">Returns &amp; Replacements</a>
          <a className=" font-medium !text-xl">
            Manage Your Content and Devices
          </a>
          <a className=" font-medium !text-xl">DBS Assistant</a>
          <a className=" font-medium !text-xl">Help</a>
        </ul>
      </div>
      <div className="country-info h-full py-4 flex justify-around items-center mx-auto ">
        <div className="logo">
          <img className="!w-36 " src="/delhiBookStore-logo.png" />
        </div>
        <div className="options h-full lg:!flex  !hidden ">
          <select className=" h-full ">
            <option value="En">English</option>
          </select>
          <select className=" h-full ">
            <option value={1}>$ USD - U.S. Dollar</option>
          </select>
          <select className=" h-full ">
            <option value={4}>United states</option>
          </select>
        </div>
      </div>
      <div className="policies text-xl h-full py-4">
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
