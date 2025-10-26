import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ children }) => {
  return (
    <div className="font-montserrat text-xs font-semibold tracking-[4px] uppercase text-[#d86626] mb-6">
      {children}
    </div>
  );
};

export default SectionLabel;
