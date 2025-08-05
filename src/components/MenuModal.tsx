import { X } from "lucide-react";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantName: string;
  menuImage: string;
}

const MenuModal = ({ isOpen, onClose, restaurantName, menuImage }: MenuModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {restaurantName} Menu
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        {/* Menu Image */}
        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          <img 
            src={menuImage} 
            alt={`${restaurantName} menu`}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuModal;