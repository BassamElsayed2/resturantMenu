import i18n from "@/i18n";

interface RestaurantCardProps {
  id: string;
  name: string;
  logo: string;
  desc_ar: string;
  desc_en: string;
  // cuisine: string;

  onClick: (id: string) => void;
}

const RestaurantCard = ({
  id,
  name,
  logo,
  desc_ar,
  desc_en,
  onClick,
}: RestaurantCardProps) => {
  const currentLocale = i18n.language;

  return (
    <div
      className="group cursor-pointer bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 border border-border"
      style={{
        background: "var(--gradient-card)",
        boxShadow: "var(--shadow-card)",
        transition: "var(--transition-smooth)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-card)";
      }}
      onClick={() => onClick(id)}
    >
      {/* Logo Container */}
      <div className="flex justify-center pt-8 pb-4">
        <div className="w-50 h-50 rounded-full bg-white p-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 text-center">
        <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-warm-orange transition-colors duration-300">
          {name}
        </h3>
        <p className="text-muted-foreground mb-3 text-sm uppercase tracking-wide">
          <div
            dangerouslySetInnerHTML={{
              __html: currentLocale === "ar" ? desc_ar : desc_en,
            }}
          ></div>
        </p>

        {/* Rating */}
        {/* <div className="flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) 
                    ? 'text-golden-yellow' 
                    : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            {rating.toFixed(1)}
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
