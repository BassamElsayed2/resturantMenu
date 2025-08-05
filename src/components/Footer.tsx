import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <section className="footer">
      <p className="text-[12px]  ">{t("footer")}</p>
      <p className="text-[12px]  ">
        {i18n.language === "en" ? "Design and develop by " : "تصميم وبرمجة"}
        <a href="ens.egy" target="_blank">
          {" "}
          Ens
        </a>
      </p>
    </section>
  );
}

export default Footer;
