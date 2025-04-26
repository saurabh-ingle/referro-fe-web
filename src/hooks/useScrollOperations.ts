import { useEffect } from 'react';

export const useScrollOperations = () => {
  useEffect(() => {
    // Back to top functionality
    const mybutton = document.getElementById("back-to-top");
    
    const scrollFunction = () => {
      if (mybutton) {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
    };

    const topFunction = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    window.addEventListener('scroll', scrollFunction);
    if (mybutton) {
      mybutton.addEventListener('click', topFunction);
    }

    return () => {
      window.removeEventListener('scroll', scrollFunction);
      if (mybutton) {
        mybutton.removeEventListener('click', topFunction);
      }
    };
  }, []);
}; 