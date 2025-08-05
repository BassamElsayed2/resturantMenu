import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantName: string;
  images: string[];
  logo: string;
}

const MenuModal = ({
  isOpen,
  onClose,
  restaurantName,
  images,
  logo,
}: MenuModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md backdrop-saturate-150"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden shadow-2xl z-10 flex flex-col backdrop-blur-xl border border-white/30 bg-white/10 px-8 py-4 text-white">
        {/* Header */}
        <div className="flex flex-col items-center justify-center p-6 border-b border-gray-200">
          <img
            src={logo}
            alt={` logo`}
            className="w-[60px] h-[60px] object-contain mb-5"
          />
          <h2
            className="text-2xl font-bold text-white"
            style={{ textShadow: "0 1px 4px rgba(0, 0, 0, 0.5)" }}
          >
            {restaurantName}
          </h2>
        </div>

        {/* Image Navigation */}
        <div className="relative flex-1 flex items-center justify-center p-4">
          <img
            src={images[currentIndex]}
            alt={`${restaurantName} menu page ${currentIndex + 1}`}
            className="max-h-[85vh] w-full object-contain transition-opacity duration-300 ease-in-out"
          />

          {/* Page Indicator */}
          <div className="absolute bottom-4 text-sm text-gray-600 bg-white/70 px-3 py-1 rounded-full shadow">
            Page {currentIndex + 1} of {images.length}
          </div>

          {/* Prev Button */}
          {images.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-gray-100 p-2 rounded-full shadow-md transition"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-gray-100 p-2 rounded-full shadow-md transition"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
