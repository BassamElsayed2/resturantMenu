import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";
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
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setScale((prev) => {
      const newScale = Math.min(prev * 1.2, 3);
      // إعادة تعيين الموقع عند التكبير لتجنب المشاكل
      if (newScale !== prev) {
        setPosition({ x: 0, y: 0 });
      }
      return newScale;
    });
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const newScale = Math.max(prev / 1.2, 0.5);
      // إعادة تعيين الموقع عند التصغير
      if (newScale !== prev) {
        setPosition({ x: 0, y: 0 });
      }
      return newScale;
    });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      e.preventDefault();
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      setPosition({
        x: newX,
        y: newY,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale > 1 && e.touches.length === 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && scale > 1 && e.touches.length === 1) {
      e.preventDefault();
      const newX = e.touches[0].clientX - dragStart.x;
      const newY = e.touches[0].clientY - dragStart.y;

      setPosition({
        x: newX,
        y: newY,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  // إضافة معالج للـ double click للتكبير السريع
  const handleDoubleClick = () => {
    if (scale === 1) {
      setScale(2);
    } else {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md backdrop-saturate-150"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative rounded-2xl w-full max-w-5xl max-h-[95vh]  shadow-2xl z-10 flex flex-col backdrop-blur-xl border border-white/30 bg-white/10 px-8 py-4 text-white">
        {/* Header */}
        <div className="hidden  md:flex flex-row gap-4 items-center justify-center p-2 border-b border-gray-200">
          <img
            src={logo}
            alt={` logo`}
            className="w-[60px] h-[60px] object-contain "
          />
          <h2
            className="text-2xl font-bold text-white"
            style={{ textShadow: "0 1px 4px rgba(0, 0, 0, 0.5)" }}
          >
            {restaurantName}
          </h2>
        </div>

        {/* Image Navigation */}
        <div className="relative flex-1 flex items-center justify-center p-4 overflow-hidden">
          <div
            className="relative w-full h-full flex items-center justify-center"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
            style={{
              cursor: isDragging ? "grabbing" : scale > 1 ? "grab" : "default",
            }}
          >
            <img
              src={images[currentIndex]}
              alt={`${restaurantName} menu page ${currentIndex + 1}`}
              className="max-h-[75vh] max-w-full object-contain transition-all duration-300 ease-in-out select-none"
              style={{
                transform: `scale(${scale}) translate(${
                  position.x / scale
                }px, ${position.y / scale}px)`,
                transformOrigin: "center",
              }}
              onDoubleClick={handleDoubleClick}
            />
          </div>

          {/* Zoom Controls */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={handleZoomIn}
              className="bg-white/80 hover:bg-gray-100 p-2 rounded-full shadow-md transition"
              title="تكبير"
            >
              <ZoomIn className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={handleZoomOut}
              className="bg-white/80 hover:bg-gray-100 p-2 rounded-full shadow-md transition"
              title="تصغير"
            >
              <ZoomOut className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={handleReset}
              className="bg-white/80 hover:bg-gray-100 p-2 rounded-full shadow-md transition"
              title="إعادة تعيين"
            >
              <RotateCcw className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Page Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-600 bg-white/70 px-3 py-1 rounded-full shadow">
            Page {currentIndex + 1} of {images.length}
          </div>

          {/* Prev Button */}
          {images.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-gray-100 p-2 rounded-full shadow-md transition z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-gray-100 p-2 rounded-full shadow-md transition z-10"
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
