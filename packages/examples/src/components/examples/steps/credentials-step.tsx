import { type ElementRef, forwardRef } from 'react';

import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { GithubLogo, GoogleLogo } from '@/components/logos';

import { StepFooter } from './step-footer';
import type { StepProps } from './types';

export const CredentialsStep = forwardRef<ElementRef<'section'>, StepProps>(
  ({ onNextClick, onPrevClick, ...props }, ref) => (
    <section {...props} ref={ref}>
      <CardHeader>
        <CardTitle>Let&apos;s create your account</CardTitle>
        <CardDescription>Start by entering your login details.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex flex-col gap-2 [&>*]:grow'>
          <Button>
            <GoogleLogo className='me-2 size-4' />
            Sign up with Google
          </Button>
          <Button>
            <GithubLogo className='me-2 size-4' />
            Sign up with GitHub
          </Button>
        </div>
        <div className='grid grid-cols-[1fr,auto,1fr] items-center'>
          <Separator />
          <span className='p-2 text-xs uppercase text-muted-foreground'>
            Or
          </span>
          <Separator />
        </div>
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
      </CardContent>
      <StepFooter onNextClick={onNextClick} onPrevClick={onPrevClick} />
    </section>
  )
);
CredentialsStep.displayName = 'CredentialsStep';
