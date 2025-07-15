import { IconProps } from '../types';

export const Search = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="11"
      cy="11"
      r="8"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="m21 21-4.35-4.35"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);