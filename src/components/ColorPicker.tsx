
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const PRESET_COLORS = {
  blue: [
    { name: "أزرق داكن", value: "#1A365D" },
    { name: "أزرق فاتح", value: "#3182CE" },
    { name: "أزرق سماوي", value: "#4299E1" },
  ],
  red: [
    { name: "أحمر داكن", value: "#9B2C2C" },
    { name: "أحمر", value: "#E53E3E" },
    { name: "أحمر فاتح", value: "#FC8181" },
  ],
  green: [
    { name: "أخضر داكن", value: "#276749" },
    { name: "أخضر", value: "#38A169" },
    { name: "أخضر فاتح", value: "#68D391" },
  ],
  purple: [
    { name: "بنفسجي داكن", value: "#553C9A" },
    { name: "بنفسجي", value: "#805AD5" },
    { name: "بنفسجي فاتح", value: "#B794F4" },
  ],
  orange: [
    { name: "برتقالي داكن", value: "#C05621" },
    { name: "برتقالي", value: "#ED8936" },
    { name: "برتقالي فاتح", value: "#FBD38D" },
  ],
};

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex items-center gap-3 mb-2 p-2 rounded-md hover:bg-gray-50">
      <div className="flex-1">
        <Label className="font-kufi">{label}</Label>
      </div>
      
      <div className="flex items-center gap-2">
        <div 
          className="w-6 h-6 border border-gray-300 rounded-md" 
          style={{ backgroundColor: value }}
        />
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              اختيار اللون
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-3">
            <div className="space-y-3">
              <div>
                <Label>مجموعات الألوان</Label>
                <Select 
                  onValueChange={(category) => {
                    // اختيار أول لون من المجموعة
                    onChange(PRESET_COLORS[category as keyof typeof PRESET_COLORS][0].value);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر مجموعة ألوان" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blue">الأزرق</SelectItem>
                    <SelectItem value="red">الأحمر</SelectItem>
                    <SelectItem value="green">الأخضر</SelectItem>
                    <SelectItem value="purple">البنفسجي</SelectItem>
                    <SelectItem value="orange">البرتقالي</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {Object.values(PRESET_COLORS).flat().map((color) => (
                  <button
                    key={color.value}
                    className="w-full h-8 rounded-md border border-gray-300 hover:border-gray-400 transition-colors"
                    style={{ backgroundColor: color.value }}
                    onClick={() => onChange(color.value)}
                    title={color.name}
                  />
                ))}
              </div>
              
              <div>
                <Label>اللون المخصص</Label>
                <div className="flex mt-2">
                  <input
                    type="color"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ColorPicker;
