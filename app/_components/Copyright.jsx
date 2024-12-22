import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p>© {currentYear} McWoyage. All rights reserved.</p>
  );
};

export default Copyright;