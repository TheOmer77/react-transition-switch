import { forwardRef, useState, type ComponentPropsWithoutRef } from 'react';
import {
  CameraIcon,
  CookingPotIcon,
  CpuIcon,
  HeartPulseIcon,
  MusicIcon,
  type LucideIcon,
} from 'lucide-react';

import { TransitionSwitchItem } from '@theomer77/react-transition-switch';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Checkbox } from '@/components/ui/Checkbox';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import SharedAxis from '@/components/SharedAxis';
import { useNavigate } from 'react-router-dom';

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

const StepsExample = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState<
    (typeof interests)[number]['id'][]
  >([]);

  const navigate = useNavigate();

  const nextStep = () => setActiveIndex(prev => prev + 1),
    prevStep = () => setActiveIndex(prev => prev - 1);

  return (
    <div {...props} ref={ref} className='flex items-center justify-center'>
      <SharedAxis
        value={activeIndex.toString()}
        className='w-[calc(100dvw-2rem)] max-w-sm overflow-hidden [&>section]:w-full'
        autoAdjustWidth={false}
        asChild
      >
        <Card>
          <TransitionSwitchItem value='0'>
            <section>
              <CardHeader>
                <CardTitle className='text-center text-3xl font-bold'>
                  Welcome!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='mb-8 text-center text-muted-foreground'>
                  We&apos;re glad to have you here. Let&apos;s setup your
                  account, so you can join our community and start connecting
                  with your friends!
                </p>
                <Button variant='primary' className='w-full' onClick={nextStep}>
                  Get Started
                </Button>
              </CardContent>
            </section>
          </TransitionSwitchItem>
          <TransitionSwitchItem value='1'>
            <section>
              <CardHeader>
                <CardTitle>Let&apos;s create your account</CardTitle>
                <CardDescription>
                  Start by entering your login credentials.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input id='email' placeholder='Email' required type='email' />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    id='password'
                    placeholder='Password'
                    type='password'
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='password'>Repeat password</Label>
                  <Input
                    id='password'
                    placeholder='Repeat password'
                    required
                    type='password'
                  />
                </div>
                <div className='flex flex-row justify-between'>
                  <Button onClick={prevStep}>Back</Button>
                  <Button variant='primary' onClick={nextStep}>
                    Next
                  </Button>
                </div>
              </CardContent>
            </section>
          </TransitionSwitchItem>
          <TransitionSwitchItem value='2'>
            <section>
              <CardHeader>
                <CardTitle>Just to be safe...</CardTitle>
                <CardDescription>
                  We&apos;ve sent a verification code to your email - please
                  enter it below.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='code'>Verification Code</Label>
                  <Input id='code' placeholder='Enter your code' required />
                </div>
                <div className='flex flex-row justify-between'>
                  <Button onClick={prevStep}>Back</Button>
                  <Button variant='primary' onClick={nextStep}>
                    Verify
                  </Button>
                </div>
              </CardContent>
            </section>
          </TransitionSwitchItem>
          <TransitionSwitchItem value='3'>
            <section>
              <CardHeader>
                <CardTitle>Tell us about yourself</CardTitle>
                <CardDescription>
                  Add some extra details to complete your profile.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='displayName'>Display Name</Label>
                  <Input id='displayName' placeholder='Display name' required />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='bio'>Bio</Label>
                  <Textarea
                    className='h-20 w-full'
                    id='bio'
                    placeholder='Write a bit about yourself'
                    required
                  />
                </div>
                <div className='flex flex-row justify-between'>
                  <Button onClick={prevStep}>Back</Button>
                  <Button variant='primary' onClick={nextStep}>
                    Next
                  </Button>
                </div>
              </CardContent>
            </section>
          </TransitionSwitchItem>
          <TransitionSwitchItem value='4'>
            <section>
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
                        <p className='text-sm font-medium leading-none'>
                          {title}
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          {description}
                        </p>
                      </div>
                      <Checkbox
                        className='pointer-events-none'
                        checked={selectedInterests.includes(id)}
                      />
                    </Button>
                  ))}
                </div>
                <div className='flex flex-row justify-between'>
                  <Button onClick={prevStep}>Back</Button>
                  <Button variant='primary' onClick={nextStep}>
                    Next
                  </Button>
                </div>
              </CardContent>
            </section>
          </TransitionSwitchItem>
          <TransitionSwitchItem value='5'>
            <section>
              <CardHeader>
                <CardTitle className='text-center text-2xl font-bold'>
                  Done!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='mb-8 text-center text-muted-foreground'>
                  Your account has been successfully created. We can&apos;t wait
                  for you to join us!
                </p>
                <Button
                  variant='primary'
                  className='w-full'
                  onClick={() => navigate(-1)}
                >
                  Go to Home
                </Button>
              </CardContent>
            </section>
          </TransitionSwitchItem>
        </Card>
      </SharedAxis>
    </div>
  );
});
StepsExample.displayName = 'StepsExample';

export default StepsExample;
