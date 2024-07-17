import React from "react";
import logo from "../../asset/images/logo1.png";
import { useTranslation } from "react-i18next";
const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary font-poppins text-base md:text-xl text-white pt-8">
      <div className="container mx-auto px-4 md:px-8 border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-description mr-0 md:mr-32 mb-10">
            <div className="text-lg font-bold mb-6">
              <img src={logo} alt="CRAFTERS Logo" className="h-12" />
            </div>
            <p className="font-outfit font-[300]">{t("abouts")}</p>
          </div>
          <div className="footer-links max-w-full md:max-w-md pl-6">
            <p className="mb-4 md:mb-10 font-bold">Links</p>
            <ul className="grid grid-cols-2 gap-2 font-light">
              <li>
                <a href="/" className="text-white hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-white hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#AboutCrafters" className="text-white hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#ContactSection"
                  className="text-white hover:underline"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact md:pl-6">
            <p className="mb-4 md:mb-10 font-bold">Contact</p>
            <p>Tel: 07******10</p>
            <p>
              Email:{" "}
              <a
                href="mailto:team.crafters@gmail.com"
                className="text-white hover:underline"
              >
                team.crafters@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary text-center font-medium py-4 md:py-8">
        <p>&copy; 2024 Upscale Crafters, all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
