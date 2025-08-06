"use client";
import { useEffect } from "react";
import Logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const handleHotlineClick = () => {
    window.location.href = "tel:+966501234567";
  };

  return (
    <nav className="nav">
      <div className={i18n.language === "ar" ? "pr-[30px] " : "pl-[30px]"}>
        {/* Logo */}
        <a href="/">
          <img src={Logo} alt="ENS Logo" width={60} height={60} />
        </a>
      </div>
      <ul className="md:flex gap-4  hidden ">
        <li>
          <a
            href="/"
            className="font-[200] text-[10pt]  px-2 py-3 hover:text-[#ee6c2b] transition"
          >
            {i18n.language === "ar" ? "الرئيسية " : "Home"}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-[200] text-[10pt] px-2 py-3 hover:text-[#ee6c2b] transition "
          >
            {i18n.language === "ar" ? "الشكاوي " : "Complaints"}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-[200] text-[10pt]  px-2 py-3 hover:text-[#ee6c2b] transition"
          >
            {i18n.language === "ar" ? "الاتصال " : "content"}
          </a>
        </li>
      </ul>

      <div
        className={`flex gap-3  ${
          i18n.language === "ar" ? "pl-[30px] " : "pr-[30px]"
        }`}
      >
        {/* Hotline Button */}
        <div className="hotline-container">
          <button
            onClick={handleHotlineClick}
            className="hotline-button"
            aria-label={
              i18n.language === "ar" ? "اتصل بنا الآن" : "Call us now"
            }
          >
            <div className="hotline-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="hotline-text">
              <span className="hotline-label">
                {i18n.language === "ar" ? "خط ساخن" : "Hotline"}
              </span>
              <span className="hotline-number">+17533</span>
            </div>
          </button>
        </div>
        {/* Language Switcher */}
        <button className="lang-toggle" onClick={toggleLanguage}>
          {i18n.language === "en" ? "AR" : "EN"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
