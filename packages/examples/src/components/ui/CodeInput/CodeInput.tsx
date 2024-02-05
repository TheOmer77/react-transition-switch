import type { ComponentPropsWithoutRef } from 'react';
import OtpInput from 'react-otp-input';

import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

export type CodeInputProps = Omit<
  ComponentPropsWithoutRef<typeof OtpInput>,
  'renderInput' | 'numInputs'
> & { length?: number; className?: string };

export const CodeInput = ({ length, className, ...props }: CodeInputProps) => (
  <OtpInput
    {...props}
    numInputs={length}
    skipDefaultStyles
    renderInput={props => (
      <Input
        {...props}
        className={cn(
          `w-full max-w-9 text-center input-appearance-none
[&:not(:last-of-type)]:me-1`,
          className
        )}
      />
    )}
  />
);
