
import React from "react";

interface MailIconProps {
  color?: string;
}

const MailIcon: React.FC<MailIconProps> = ({ color = "currentColor" }) => (
    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 4.20001L9 7.00001L13 4.20001" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 10.6V2.6C1 1.71634 1.71634 1 2.6 1H15.4C16.2837 1 17 1.71634 17 2.6V10.6C17 11.4837 16.2837 12.2 15.4 12.2H2.6C1.71634 12.2 1 11.4837 1 10.6Z" stroke={color} strokeWidth="1.2"/>
    </svg>
  );
export default MailIcon