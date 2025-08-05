import { X } from "lucide-react";
import { useState } from "react";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantName: string;
  images: string[];
}

const MenuModal = ({
  isOpen,
  onClose,
  restaurantName,
  images,
}: MenuModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!isOpen) return null;

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col border border-gray-200 animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white">
          <h2 className="text-2xl font-bold text-gray-900 flex-1 text-center">
            {restaurantName}{" "}
            <span className="text-base font-normal text-gray-400">Menu</span>
          </h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        {/* Menu Image + Arrows */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-6">
          {images.length > 1 && (
            <button
              onClick={goPrev}
              className="absolute w-[45px] h-[45px] flex items-center justify-center left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg p-3 rounded-full z-10 border border-gray-200 text-gray-700 text-3xl transition-all duration-200"
              aria-label="Previous image"
            >
              &#8592;
            </button>
          )}
          <img
            src={images[currentIndex]}
            alt={`${restaurantName} menu ${currentIndex + 1}`}
            className="max-h-[65vh] w-auto mx-auto rounded-2xl shadow-2xl border border-gray-300 bg-white object-contain transition-all duration-300"
          />
          {images.length > 1 && (
            <button
              onClick={goNext}
              className="absolute w-[45px] h-[45px] flex items-center justify-center  right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg p-3 rounded-full z-10 border border-gray-200 text-gray-700 text-3xl transition-all duration-200"
              aria-label="Next image"
            >
              &#8594;
            </button>
          )}
          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1 rounded-full text-sm shadow">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
