import { forwardRef, type ComponentPropsWithoutRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { TransitionSwitchItem } from 'react-transition-switch';
import { Button } from '@/components/ui/Button';
import Slide from '@/components/Slide';

const images = [
  {
    description:
      'aerial photography of green mountain beside body of water under white sky',
    author: 'Braden Jarvis',
    unsplashId: 'prSogOoFmkw',
    url: '/braden-jarvis-prSogOoFmkw-unsplash.jpg',
  },
  {
    description: 'brown and white mountain under blue sky during daytime',
    author: 'eberhard 🖐 grossgasteiger',
    unsplashId: 'HXJkqHexaak',
    url: '/eberhard-grossgasteiger-HXJkqHexaak-unsplash.jpg',
  },
  {
    description: 'sunset',
    author: 'Jason Blackeye',
    unsplashId: 'GPPAjJicemU',
    url: '/jason-blackeye-GPPAjJicemU-unsplash.jpg',
  },
  {
    description: 'a group of sand dunes with a blue sky in the background',
    author: 'Mohamed Nohassi',
    unsplashId: 'Di-DmLD6cW8',
    url: '/mohamed-nohassi-Di-DmLD6cW8-unsplash.jpg',
  },
  {
    description: 'brown mountain',
    author: 'Nicolai Krämer',
    unsplashId: 'reZbvcVASPI',
    url: '/nicolai-kramer-reZbvcVASPI-unsplash.jpg',
  },
  {
    description: 'silhouette photo of mountain during night time',
    author: 'Vincentiu Solomon',
    unsplashId: 'ln5drpv_ImI',
    url: '/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg',
  },
] satisfies {
  description: string;
  author: string;
  unsplashId: string;
  url: string;
}[];

const PhotosExample = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div {...props} ref={ref} className='flex items-center justify-center'>
      <Slide
        value={activeIndex.toString()}
        className='h-dvh w-dvw overflow-hidden duration-300 [&>*]:w-full'
      >
        {images.map(({ description, author, unsplashId, url }, index) => (
          <TransitionSwitchItem key={unsplashId} value={index.toString()}>
            <div className='h-inherit w-inherit'>
              <img
                src={url}
                alt={description}
                className='h-full w-full object-cover'
              />
              <a
                href={`https://unsplash.com/photos/${unsplashId}`}
                className='absolute bottom-8 end-8 start-8 flex flex-col items-center rounded-lg bg-background/60 p-4 text-center'
              >
                <span className='font-medium'>{description}</span>
                <span className='text-sm text-muted-foreground'>{`Photo by ${author} on Unsplash`}</span>
              </a>
            </div>
          </TransitionSwitchItem>
        ))}
      </Slide>

      <Button
        size='icon-lg'
        onClick={() => setActiveIndex(prev => prev - 1)}
        disabled={activeIndex <= 0}
        className='fixed start-4 top-1/2 -translate-y-1/2'
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        size='icon-lg'
        onClick={() => setActiveIndex(prev => prev + 1)}
        disabled={activeIndex >= images.length - 1}
        className='fixed end-4 top-1/2 -translate-y-1/2'
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
});
PhotosExample.displayName = 'SimpleExample';

export default PhotosExample;
