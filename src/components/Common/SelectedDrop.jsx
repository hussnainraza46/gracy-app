import React, { useState, useRef, useEffect } from "react";

export default function SelectedDropdown({
  options = [],
  defaultValue,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange && onChange(option);
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* Selected Value */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center border border-[#00000024] rounded-lg px-4 py-4 text-sm font-medium block"
      >
        <span>{selected}</span>
        <span className="text-gray-500">▼</span>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border-gray-100 rounded-lg shadow-lg z-20">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`w-full text-left px-4 py-4 text-[17px] hover:bg-gray-100
                ${selected === opt ? "bg-gray-100 font-semibold" : ""}
              `}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
