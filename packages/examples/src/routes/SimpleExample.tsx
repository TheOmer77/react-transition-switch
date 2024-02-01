import { forwardRef, type ComponentPropsWithoutRef, useState } from 'react';

import { TransitionSwitchItem } from '@theomer77/react-transition-switch';
import { Card } from '@/components/ui/Card';
import { TabsTrigger, TabsList, Tabs } from '@/components/ui/Tabs';
import {
  AccountTab,
  NotificationsTab,
  PrivacyTab,
} from '@/components/ExampleSettings';
import Fade from '@/components/Fade';

const SimpleExample = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>((props, ref) => {
  const [activeTab, setActiveTab] = useState('account');

  return (
    <div {...props} ref={ref} className='flex items-center justify-center'>
      <Tabs
        className='w-[calc(100dvw-2rem)] max-w-sm space-y-2'
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className='grid w-full grid-cols-3'>
          <TabsTrigger value='account'>Account</TabsTrigger>
          <TabsTrigger value='notifications'>Notifications</TabsTrigger>
          <TabsTrigger value='privacy'>Privacy</TabsTrigger>
        </TabsList>
        <Fade
          asChild
          value={activeTab}
          className='w-inherit max-w-inherit overflow-hidden transition-[height]
duration-300 [&>*]:w-full'
          autoAdjustWidth={false}
        >
          <Card>
            <TransitionSwitchItem value='account'>
              <AccountTab />
            </TransitionSwitchItem>
            <TransitionSwitchItem value='notifications'>
              <NotificationsTab />
            </TransitionSwitchItem>
            <TransitionSwitchItem value='privacy'>
              <PrivacyTab />
            </TransitionSwitchItem>
          </Card>
        </Fade>
      </Tabs>
    </div>
  );
});
SimpleExample.displayName = 'SimpleExample';

export default SimpleExample;
