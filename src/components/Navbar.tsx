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

  return (
    <nav className="nav">
      <div className={i18n.language === "ar" ? "pr-[30px] " : "pl-[30px]"}>
        {/* Logo */}
        <a href="/">
          <img src={Logo} alt="ENS Logo" width={60} height={60} />
        </a>
      </div>
      <ul className="flex gap-4  ">
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
      <div className={i18n.language === "ar" ? "pl-[30px] " : "pr-[30px]"}>
        {/* Language Switcher */}
        <button className="lang-toggle" onClick={toggleLanguage}>
          {i18n.language === "en" ? "AR" : "EN"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
