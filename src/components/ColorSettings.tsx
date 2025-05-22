
import React from 'react';
import { Card } from '@/components/ui/card';
import ColorPicker from './ColorPicker';

interface ColorSettingsProps {
  mainTitleColor: string;
  sectionTitleColor: string;
  subsectionTitleColor: string;
  onMainTitleColorChange: (color: string) => void;
  onSectionTitleColorChange: (color: string) => void;
  onSubsectionTitleColorChange: (color: string) => void;
}

const ColorSettings: React.FC<ColorSettingsProps> = ({
  mainTitleColor,
  sectionTitleColor,
  subsectionTitleColor,
  onMainTitleColorChange,
  onSectionTitleColorChange,
  onSubsectionTitleColorChange,
}) => {
  return (
    <Card className="p-4 mb-4">
      <h3 className="font-kufi text-lg mb-3">إعدادات الألوان</h3>
      
      <ColorPicker
        label="لون العنوان الرئيسي"
        value={mainTitleColor}
        onChange={onMainTitleColorChange}
      />
      
      <ColorPicker
        label="لون العنوان الفرعي"
        value={sectionTitleColor}
        onChange={onSectionTitleColorChange}
      />
      
      <ColorPicker
        label="لون العنوان الفرعي الثانوي"
        value={subsectionTitleColor}
        onChange={onSubsectionTitleColorChange}
      />
    </Card>
  );
};

export default ColorSettings;
