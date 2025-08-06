"use client";

import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import mostafaVideo from "@/assets/video.mp4"; // import your video
import { useQuery } from "@tanstack/react-query";
import { getTitles } from "@/Services/apiTitle";
import i18n from "@/i18n";

const HeroSection = () => {
  const currentLocale = i18n.language;

  const { t } = useTranslation();

  const { data: titles } = useQuery({
    queryKey: ["description"],
    queryFn: getTitles,
  });

  // Get the first title object from the array, or use default values
  const title = titles?.[0] || {
    header_one_ar: "",
    header_one_en: "",
    header_two_ar: "",
    header_two_en: "",
    paragraph_ar: "",
    paragraph_en: "",
  };

  console.log(title);

  return (
    <section className="heroz relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className=" absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={mostafaVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-overlay)" }}
      />

      {/*NAV */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-[35pt] font-bold mb-6 leading-tight">
          {currentLocale === "ar" ? title.header_one_ar : title.header_one_en}
          <span
            className={`block bg-gradient-to-r from-warm-orange to-golden-yellow bg-clip-text text-transparent ${
              currentLocale === "ar" ? "md:mr-[390px] " : "md:ml-[390px] "
            }`}
          >
            {currentLocale === "ar" ? title.header_two_ar : title.header_two_en}
          </span>
        </h1>
        <p className="text-[17px] mb-8 text-gray-200  mx-auto leading-relaxed">
          {currentLocale === "ar" ? title.paragraph_ar : title.paragraph_en}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menus"
            className="px-8 py-4 bg-warm-orange hover:bg-primary-glow text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ transition: "var(--transition-bounce)" }}
          >
            {t("explore")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
