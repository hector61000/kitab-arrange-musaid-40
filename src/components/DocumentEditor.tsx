
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import FormattedPreview from './FormattedPreview';

const DocumentEditor: React.FC = () => {
  const [text, setText] = useState('');
  const { toast } = useToast();
  
  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
      toast({
        title: "تم اللصق بنجاح",
        description: "تم لصق النص من الحافظة",
      });
    } catch (err) {
      toast({
        title: "خطأ أثناء اللصق",
        description: "الرجاء منح الإذن للوصول إلى الحافظة",
        variant: "destructive",
      });
    }
  };

  const handleClear = () => {
    setText('');
    toast({
      title: "تم مسح النص",
      description: "تم مسح محتوى المحرر",
    });
  };

  const handleExport = () => {
    // Create a Blob with the formatted HTML
    const formattedContent = document.querySelector('.formatted-document')?.innerHTML;
    if (!formattedContent) return;
    
    const blob = new Blob([`
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <title>المستند المنسق</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;700&family=Amiri:wght@400;700&display=swap">
        <style>
          body { font-family: 'Amiri', serif; line-height: 1.5; }
          .main-title { font-family: 'Noto Kufi Arabic', sans-serif; color: #1A365D; font-size: 26px; font-weight: bold; text-align: center; margin: 20px 0; }
          .section-title { font-family: 'Noto Kufi Arabic', sans-serif; color: #9B2C2C; font-size: 22px; font-weight: bold; text-align: right; margin: 16px 0; }
          .subsection-title { font-family: 'Noto Kufi Arabic', sans-serif; color: #276749; font-size: 18px; font-weight: bold; text-align: right; margin: 12px 0; }
          .regular-paragraph { text-align: right; line-height: 1.5; font-size: 14px; margin: 10px 0; }
        </style>
      </head>
      <body>
        ${formattedContent}
      </body>
      </html>
    `], { type: 'text/html' });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'المستند_المنسق.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "تم التصدير بنجاح",
      description: "تم تصدير المستند المنسق بصيغة HTML",
    });
  };

  return (
    <div className="rtl w-full max-w-5xl mx-auto p-4">
      <Tabs defaultValue="edit" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="edit">المحرر</TabsTrigger>
          <TabsTrigger value="preview">معاينة</TabsTrigger>
        </TabsList>
        
        <TabsContent value="edit" className="space-y-4">
          <Card className="p-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <Button onClick={handlePaste} variant="outline">لصق من الحافظة</Button>
              <Button onClick={handleClear} variant="outline">مسح</Button>
            </div>
            
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="أدخل نص المستند هنا..."
              className="min-h-[400px] font-arabic"
              dir="rtl"
            />
          </Card>
        </TabsContent>
        
        <TabsContent value="preview">
          <Card className="p-4">
            <div className="flex justify-between mb-4">
              <Button onClick={handleExport} variant="outline">تصدير كملف HTML</Button>
            </div>
            <div className="border p-6 bg-white min-h-[500px]">
              <FormattedPreview text={text} />
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentEditor;
