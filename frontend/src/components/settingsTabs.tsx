import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import React from 'react';

const SettingsTabs = () => {
  return (
    <Tabs defaultValue="General" className="flex ">
      <TabsList className="flex flex-col items-start h-fit w-20 bg-blank p-0 mr-9 m-0 ">
        <TabsTrigger className="p-0 py-2 " value="General">
          General
        </TabsTrigger>
        <TabsTrigger className="p-0 py-2" value="password">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent className="m-auto my-0 text-sm" value="General">
        Make changes to your account here.
      </TabsContent>
      <TabsContent className="m-auto my-0 text-sm" value="password">
        Change your password here.
      </TabsContent>
    </Tabs>
  );
};

export default SettingsTabs;
