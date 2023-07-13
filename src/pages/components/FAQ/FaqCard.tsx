import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import type { FC } from "react";

type IProps = {
  question: string;
  answer: string;
};

const FaqCard: FC<IProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="w-full p-5">
      <div className="flex flex-row items-center space-x-3" onClick={toggle}>
        <span className="hover:cursor-pointer">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
        <h3 className="font-bold text-xl">{question}</h3>
      </div>
      <div>
        {isOpen && <p className="mt-2 text-start text-gray-500">{answer}</p>}
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default FaqCard;
