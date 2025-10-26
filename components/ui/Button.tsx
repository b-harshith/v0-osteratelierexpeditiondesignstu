import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'inline-block px-10 py-4 font-montserrat text-xs font-semibold tracking-[3px] uppercase rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-[#d86626] text-white shadow-lg shadow-orange-900/20 hover:bg-[#c55a1f] hover:shadow-xl hover:shadow-orange-900/30 hover:-translate-y-0.5 focus:ring-[#d86626]',
    secondary: 'bg-transparent text-[#1a1a1a] border border-[#d86626] hover:bg-orange-500/10 hover:-translate-y-0.5 focus:ring-[#d86626]'
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
