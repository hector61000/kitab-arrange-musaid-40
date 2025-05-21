import React from 'react';

interface FormattedPreviewProps {
  text: string;
}

const FormattedPreview: React.FC<FormattedPreviewProps> = ({ text }) => {
  if (!text.trim()) {
    return (
      <div className="text-center text-gray-400 py-10">
        لا يوجد نص للعرض. الرجاء إدخال نص في المحرر.
      </div>
    );
  }

  // Split the text by lines
  const lines = text.split('\n');
  
  // Function to determine the type of line based on simple heuristics
  const determineLineType = (line: string, index: number, allLines: string[]) => {
    if (!line.trim()) return 'empty';
    
    // Main title detection (first non-empty line or very short paragraph)
    if (index === 0 || (line.length < 50 && !allLines.slice(0, index).some(l => l.trim()))) {
      return 'main-title';
    }
    
    // Section title detection (shorter lines that may end with ":" or are all caps)
    if (line.length < 100 && (line.includes(':') || line.trim().endsWith(':') || /^[أ-يa-zA-Z\s\d]+$/.test(line.trim()))) {
      return 'section-title';
    }
    
    // Subsection title (shorter than sections but longer than main titles)
    if (line.length < 80 && !line.endsWith('.')) {
      return 'subsection-title';
    }
    
    // Otherwise consider it a regular paragraph
    return 'paragraph';
  };

  // Process the lines and convert to HTML elements
  const processedContent = lines.map((line, index) => {
    const type = determineLineType(line, index, lines);
    
    switch (type) {
      case 'main-title':
        return <h1 key={index} className="main-title">{line}</h1>;
      case 'section-title':
        return <h2 key={index} className="section-title">{line}</h2>;
      case 'subsection-title':
        return <h3 key={index} className="subsection-title">{line}</h3>;
      case 'paragraph':
        return <p key={index} className="regular-paragraph">{line}</p>;
      case 'empty':
        return <div key={index} className="h-4"></div>; // Empty space
      default:
        return null;
    }
  });

  return <div className="formatted-document rtl">{processedContent}</div>;
};

export default FormattedPreview;
