"use client";
import { useEffect  } from "react";
import Logo from "@/assets/ENS.png";
import { useTranslation } from 'react-i18next';

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
      {/* Logo */}
      <a href="/">
        <img src={Logo} alt="ENS Logo" width={100} height={100} />
      </a>

      {/* Language Switcher */}
      <button className="lang-toggle" onClick={toggleLanguage}>
      {i18n.language === "en" ? "AR" : "EN"}
      </button>
    </nav>
  );
};

export default Navbar;
