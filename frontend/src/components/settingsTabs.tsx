import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';

const SettingsTabs = () => {
  return (
    <Tabs defaultValue="General" className="flex ">
      <TabsList className="flex flex-col items-start h-fit w-20 bg-blank p-0 mr-9 m-0 ">
        <TabsTrigger className="p-0 py-2 " value="General">
          General
        </TabsTrigger>
        <TabsTrigger className="p-0 py-2 " value="password">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent className="grow my-0 text-sm" value="General">
        <General />
      </TabsContent>
      <TabsContent className="grow my-0 text-sm" value="password">
        Change your password here.
      </TabsContent>
    </Tabs>
  );
};

export default SettingsTabs;

const General = () => {
  const { theme, setTheme } = useTheme();
  const [selectedOption, setSelectedOption] = useState(theme);
  return (
    <div>
      <span className="flex justify-between pl-6 py-2 items-center">
        <div>Theme</div>
        <Select
          value={selectedOption}
          onValueChange={(e) => {
            setTheme(e);
            setSelectedOption(e);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </span>
      <Separator />
    </div>
  );
};
