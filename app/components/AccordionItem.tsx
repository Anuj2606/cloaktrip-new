import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface AccordionItemProps {
  question: string;

  answer: string | React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 rounded-lg p-6 mb-4 shadow-sm">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-lg text-gray-800"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <FaMinus className="text-gray-500 cursor-pointer" />
        ) : (
          <FaPlus className="text-gray-500 cursor-pointer" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="text-gray-600 pr-8">{answer}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
