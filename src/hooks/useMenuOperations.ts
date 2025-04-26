import { useEffect, useState } from 'react';

export const useMenuOperations = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {
    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuActivation = (menuId: string) => {
      setActiveMenu(menuId);
    };

    // Add event listeners for menu toggles
    const menuToggles = document.querySelectorAll('[data-toggle="menu"]');
    menuToggles.forEach(toggle => {
      toggle.addEventListener('click', handleMenuToggle);
    });

    // Add event listeners for menu activation
    const menuItems = document.querySelectorAll('[data-menu]');
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        const menuId = item.getAttribute('data-menu');
        if (menuId) {
          handleMenuActivation(menuId);
        }
      });
    });

    return () => {
      menuToggles.forEach(toggle => {
        toggle.removeEventListener('click', handleMenuToggle);
      });
      menuItems.forEach(item => {
        item.removeEventListener('click', () => {});
      });
    };
  }, [isMenuOpen]);

  return {
    isMenuOpen,
    activeMenu,
    setIsMenuOpen,
    setActiveMenu
  };
}; 