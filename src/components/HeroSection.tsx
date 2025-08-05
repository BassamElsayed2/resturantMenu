"use client";

import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-food.jpg";
import Navbar from "@/components/Navbar";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-overlay)" }}
      />

      {/*NAV */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {t("discover")}
          <span className="block bg-gradient-to-r from-warm-orange to-golden-yellow bg-clip-text text-transparent">
            {t("restaurants")}
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menus"
            className="px-8 py-4 bg-warm-orange hover:bg-primary-glow text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ transition: "var(--transition-bounce)" }}
          >
            {t("explore")}
          </a>
          {/*       <button 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full text-lg backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105"
            style={{ transition: 'var(--transition-bounce)' }}
          >
            View Menu
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
