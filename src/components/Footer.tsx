
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-4 px-6 border-t rtl">
      <div className="container mx-auto text-center">
        <p className="text-sm font-arabic">منسق المستندات العربية © {new Date().getFullYear()}</p>
        <p className="text-xs mt-1">أداة مجانية لتنسيق النصوص العربية وفقًا لقواعد التصميم المحددة</p>
      </div>
    </footer>
  );
};

export default Footer;
