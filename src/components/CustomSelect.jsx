import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CustomSelect = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const handleOptionClick = (value, label) => {
    setSelectedOption(label);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Dropdown Trigger */}
      <div
        className="w-full px-4 py-3 rounded-md border border-gray-300 flex items-center justify-between cursor-pointer hover:border-[#8B4513] transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selectedOption === placeholder ? "text-gray-400" : "text-[#8B4513]"}>
          {selectedOption}
        </span>
        <ChevronDown size={20} className="text-[#8B4513]" />
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg border border-gray-200">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-4 py-3 hover:bg-[#8B4513] hover:text-[#FFE4C4] cursor-pointer transition-all"
              onClick={() => handleOptionClick(option.value, option.label)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;