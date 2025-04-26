import React from 'react';
import feather from 'feather-icons';

// Get all available icon names from feather-icons
type FeatherIconName = keyof typeof feather.icons;

interface FeatherIconProps {
  icon: FeatherIconName;
  className?: string;
}

export const FeatherIcon: React.FC<FeatherIconProps> = ({ icon, className = '' }) => {
  const iconHtml = feather.icons[icon]?.toSvg({ class: className }) || '';
  
  return (
    <span 
      className={className}
      dangerouslySetInnerHTML={{ __html: iconHtml }}
    />
  );
}; 