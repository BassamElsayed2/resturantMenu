import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { XCircle } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      `%c⚠️ 404 Error: Route not found → ${location.pathname}`,
      "color: red; font-weight: bold;"
    );
  }, [location.pathname]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-white px-6">
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

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto p-6 backdrop-blur-xl bg-black/30 rounded-2xl border border-white/30 shadow-2xl">
        <XCircle className="mx-auto w-14 h-14 text-red-400 mb-4" />
        <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-200 mb-6 leading-relaxed">
          {t("notFoundMessage")}
        </p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-warm-orange hover:bg-primary-glow text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          style={{ transition: "var(--transition-bounce)" }}
        >
          {t("goHome")}
        </a>
      </div>
    </section>
  );
};

export default NotFound;
