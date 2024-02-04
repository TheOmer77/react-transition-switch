import { forwardRef, useState, type ElementRef } from 'react';
import {
  CameraIcon,
  CookingPotIcon,
  CpuIcon,
  HeartPulseIcon,
  MusicIcon,
  type LucideIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/Button';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Checkbox } from '@/components/ui/Checkbox';
import type { StepProps } from './types';
import { StepFooter } from './StepFooter';

const interests = [
  {
    id: 'interest1',
    title: 'Photography',
    description: 'Capture and share your unique perspective of the world',
    icon: CameraIcon,
  },
  {
    id: 'interest2',
    title: 'Cooking',
    description: 'Discover new recipes and cooking techniques',
    icon: CookingPotIcon,
  },
  {
    id: 'interest3',
    title: 'Technology',
    description: 'Stay updated with the latest tech trends and news',
    icon: CpuIcon,
  },
  {
    id: 'interest4',
    title: 'Fitness',
    description: 'Get tips and advice on maintaining a healthy lifestyle',
    icon: HeartPulseIcon,
  },
  {
    id: 'interest5',
    title: 'Music',
    description:
      'Explore new genres and artists, or learn to play an instrument',
    icon: MusicIcon,
  },
] as const satisfies {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[];

export const InterestsStep = forwardRef<ElementRef<'section'>, StepProps>(
  ({ onNextClick, onPrevClick, ...props }, ref) => {
    const [selectedInterests, setSelectedInterests] = useState<
      (typeof interests)[number]['id'][]
    >([]);

    return (
      <section {...props} ref={ref}>
        <CardHeader>
          <CardTitle>Select your interests</CardTitle>
          <CardDescription>
            Please select at least one interest to help us tailor your
            experience.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex flex-col gap-px'>
            {interests.map(({ id, title, description, icon: Icon }) => (
              <Button
                key={id}
                variant='flat'
                className='-mx-2 flex h-auto justify-start space-x-4
whitespace-normal text-start [&>svg]:text-xl'
                onClick={() =>
                  setSelectedInterests(prev =>
                    prev.includes(id)
                      ? prev.filter(i => i !== id)
                      : [...prev, id]
                  )
                }
              >
                <Icon className='shrink-0' />
                <div className='grow space-y-1'>
                  <p className='text-sm font-medium leading-none'>{title}</p>
                  <p className='text-sm text-muted-foreground'>{description}</p>
                </div>
                <Checkbox
                  className='pointer-events-none'
                  checked={selectedInterests.includes(id)}
                />
              </Button>
            ))}
          </div>
        </CardContent>
        <StepFooter
          onNextClick={onNextClick}
          onPrevClick={onPrevClick}
          nextDisabled={selectedInterests.length < 1}
        />
      </section>
    );
  }
);
InterestsStep.displayName = 'InterestsStep';
