"use client";
import { useTranslation } from "react-i18next";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import RestaurantCard from "@/components/RestaurantCard";
import MenuModal from "@/components/MenuModal";

// Import restaurant logos and menus
import bellaVistaLogo from "@/assets/bella-vista-logo.png";
import grillHouseLogo from "@/assets/grill-house-logo.png";
import sakuraSushiLogo from "@/assets/sakura-sushi-logo.png";
import casaMayaLogo from "@/assets/casa-maya-logo.png";

import bellaVistaMenu from "@/assets/bella-vista-menu.jpg";
import grillHouseMenu from "@/assets/grill-house-menu.jpg";
import sakuraSushiMenu from "@/assets/sakura-sushi-menu.jpg";
import casaMayaMenu from "@/assets/casa-maya-menu.jpg";

// Restaurant data
const restaurants = [
  {
    id: "bella-vista",
    name: "Bella Vista",
    logo: bellaVistaLogo,
    cuisine: "Italian",
    rating: 4.8,
    menuImage: bellaVistaMenu,
  },
  {
    id: "grill-house",
    name: "Grill House",
    logo: grillHouseLogo,
    cuisine: "American",
    rating: 4.6,
    menuImage: grillHouseMenu,
  },
  {
    id: "sakura-sushi",
    name: "Sakura Sushi",
    logo: sakuraSushiLogo,
    cuisine: "Japanese",
    rating: 4.9,
    menuImage: sakuraSushiMenu,
  },
  {
    id: "casa-maya",
    name: "Casa Maya",
    logo: casaMayaLogo,
    cuisine: "Mexican",
    rating: 4.7,
    menuImage: casaMayaMenu,
  },
];

const Index = () => {
  const { t } = useTranslation();

  const [selectedRestaurant, setSelectedRestaurant] = useState<{
    name: string;
    menuImage: string;
  } | null>(null);

  const handleRestaurantClick = (id: string) => {
    const restaurant = restaurants.find(r => r.id === id);
    if (restaurant) {
      setSelectedRestaurant({
        name: restaurant.name,
        menuImage: restaurant.menuImage,
      });
    }
  };

  const closeModal = () => {
    setSelectedRestaurant(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Restaurants Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
               {t("featured")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("discover_flavors")}
                        </p>
          </div>
          
          {/* Restaurant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                logo={restaurant.logo}
                cuisine={restaurant.cuisine}
                rating={restaurant.rating}
                onClick={handleRestaurantClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Menu Modal */}
      <MenuModal
        isOpen={!!selectedRestaurant}
        onClose={closeModal}
        restaurantName={selectedRestaurant?.name || ""}
        menuImage={selectedRestaurant?.menuImage || ""}
      />
    </div>
  );
};

export default Index;
