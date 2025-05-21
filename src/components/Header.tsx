
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-l from-blue-900 to-blue-700 text-white py-4 px-6 shadow-md rtl">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-kufi font-bold">Green of Light</h1>
        <div className="text-sm">أداة تنسيق ذكية للنصوص العربية</div>
      </div>
    </header>
  );
};

export default Header;
