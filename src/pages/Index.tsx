"use client";
import { useTranslation } from "react-i18next";
import { Link } from "lucide-react";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import RestaurantCard from "@/components/RestaurantCard";
import MenuModal from "@/components/MenuModal";

import { useQuery } from "@tanstack/react-query";
import { getMenus } from "@/Services/apiMenus";
import Footer from "@/components/Footer";

const Index = () => {
  const { t } = useTranslation();

  const { data: restaurants } = useQuery({
    queryKey: ["menus"],
    queryFn: getMenus,
  });

  const [selectedRestaurant, setSelectedRestaurant] = useState<{
    name: string;
    images: string[];
    logo: string;
  } | null>(null);

  const [search, setSearch] = useState("");

  const handleRestaurantClick = (id: string) => {
    const restaurant = restaurants.find((r) => r.id === id);
    if (restaurant) {
      setSelectedRestaurant({
        name: restaurant.name,
        images: restaurant.images, // images should be an array
        logo: restaurant.logo,
      });
    }
  };

  const closeModal = () => {
    setSelectedRestaurant(null);
  };

  const filteredRestaurants =
    restaurants?.filter((r) =>
      r.name.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="mainz">
        {" "}
        <HeroSection />
        {/* Restaurants Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              {/* <h2 className="text-[35pt]  font-bold text-foreground mb-4">
                {t("featured")}
              </h2> */}
              <p className="text-[17px] text-muted-foreground max-w-2xl mx-auto">
                {t("discover_flavors")}
              </p>
              {/* Search Bar */}
              <div className="flex justify-center mt-8">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={
                    t("search_restaurant") || "Search restaurants..."
                  }
                  className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg shadow-sm bg-white"
                />
              </div>
            </div>
            {/* Restaurant Grid */}
            <div
              id="menus"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  id={restaurant.id}
                  name={restaurant.name}
                  logo={restaurant.logo}
                  desc_ar={restaurant.desc_ar}
                  desc_en={restaurant.desc_en}
                  // cuisine={restaurant.cuisine}
                  // rating={restaurant.rating}
                  onClick={handleRestaurantClick}
                />
              ))}
            </div>
          </div>
        </section>
        <Footer />
        {/* Menu Modal */}
        <MenuModal
          isOpen={!!selectedRestaurant}
          onClose={closeModal}
          restaurantName={selectedRestaurant?.name || ""}
          images={selectedRestaurant?.images || []}
          logo={selectedRestaurant?.logo || ""}
        />
      </div>
    </div>
  );
};

export default Index;
