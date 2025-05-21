
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DocumentEditor from '@/components/DocumentEditor';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto mb-8 text-center rtl">
            <h1 className="font-kufi text-3xl font-bold text-heading-primary mb-4">منسق المستندات العربية</h1>
            <p className="font-arabic text-lg">أداة سهلة الاستخدام لتنسيق المستندات العربية حسب قواعد محددة</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <DocumentEditor />
          </div>
          
          <div className="max-w-3xl mx-auto mt-10 p-4 bg-blue-50 rounded-lg border border-blue-100 rtl">
            <h3 className="font-kufi text-lg font-semibold text-heading-primary mb-2">كيفية الاستخدام:</h3>
            <ol className="font-arabic list-decimal list-inside space-y-2 text-gray-700">
              <li>أدخل أو الصق النص في المحرر.</li>
              <li>انتقل إلى تبويب "معاينة" لرؤية النص المنسق.</li>
              <li>يمكنك تصدير المستند المنسق كملف HTML.</li>
            </ol>
            
            <h3 className="font-kufi text-lg font-semibold text-heading-primary mt-4 mb-2">قواعد التنسيق:</h3>
            <ul className="font-arabic list-disc list-inside space-y-2 text-gray-700">
              <li>العناوين الرئيسية: خط كوفي أزرق داكن، وسط الصفحة</li>
              <li>العناوين الفرعية: خط كوفي أحمر غامق، محاذاة لليمين</li>
              <li>العناوين الفرعية الثانوية: خط كوفي أخضر، محاذاة لليمين</li>
              <li>النص العادي: محاذاة لليمين، تباعد سطر ونصف</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
