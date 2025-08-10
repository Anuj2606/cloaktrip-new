'use client';
import React from 'react';
import { Poppins as PoppinsFont } from 'next/font/google';

const poppins = PoppinsFont({
  weight: ['400'],
  subsets: ['latin'],
});

interface InputBoxProps {
  icon?: React.ReactNode;
  label: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({
  icon,
  label,
  value,
  onChange,
  placeholder,
  className = poppins.className,
  readOnly = false,
}) => {
  return (
    <div className={`${className} bg-[#FFFFFF] rounded-2xl p-4 shadow-sm flex items-start gap-3 hover:scale-90 transition-all delay-150 duration-300 ease-in-out`}>
      <div className="pt-3">{icon}</div>

      <div className='pt-3'>
        <svg width="2" height="32" viewBox="0 0 2 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.944336 0.47583L0.944337 31.1543" stroke="#808080" strokeWidth="0.639135" strokeLinecap="round"/>
      </svg>
      </div>

      <div className="flex flex-col w-full">
        <label className="text-[16px] text-[#808080]">{label}</label>
        {readOnly || !onChange ? (
          <p>{value || 'Not provided'}</p>
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full text-[22px] placeholder:text-[#3C3C3C]"
          />
        )}
      </div>
    </div>
  );
};

export default InputBox;
