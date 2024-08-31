import {
  forwardRef,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { toWords } from 'number-to-words';
import { TransitionSwitchItem } from 'react-transition-switch';

import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { FormItem } from '@/components/ui/Form';
import { Label } from '@/components/ui/Label';
import { Radio } from '@/components/ui/Radio';
import { Separator } from '@/components/ui/Separator';
import { SharedAxis, type Axis } from '@/components/transitions/SharedAxis';
import { cn } from '@/lib/utils';

const TEST_ITEMS_COUNT = 10;

const SharedAxisExample = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0),
    value = useMemo(() => toWords(activeIndex), [activeIndex]);

  const [axis, setAxis] = useState<Axis>('x'),
    [fadeVariant, setFadeVariant] = useState(false),
    [variations, setVariations] = useState(false),
    [rtl, setRtl] = useState(false),
    [debug, setDebug] = useState(false);

  return (
    <div
      {...props}
      ref={ref}
      dir={rtl ? 'rtl' : 'ltr'}
      className='flex flex-col'
    >
      <div className='flex w-full flex-grow items-center justify-center p-4'>
        <SharedAxis
          axis={axis}
          fadeVariant={fadeVariant}
          autoAdjustHeight
          autoAdjustWidth
          value={value}
          className={cn(
            debug && `ring-2 ring-danger ring-offset-4 ring-offset-background`
          )}
        >
          {[...Array(TEST_ITEMS_COUNT).keys()].map(key => (
            <TransitionSwitchItem key={key} value={toWords(key)}>
              <div
                className={cn(
                  `flex h-32 w-32 select-none items-center justify-center rounded-xl text-6xl text-neutral-50 shadow-lg transition-[width,height,background-color,color,box-shadow]`,
                  variations && key % 2 !== 0
                    ? [
                        `bg-secondary text-secondary-foreground shadow-secondary/50`,
                        axis === 'y' ? 'w-64' : 'h-64',
                      ]
                    : `bg-primary text-primary-foreground shadow-primary/50`
                )}
              >
                {key}
              </div>
            </TransitionSwitchItem>
          ))}
        </SharedAxis>
      </div>

      <Button
        size='lg'
        onClick={() => setActiveIndex(prev => prev - 1)}
        disabled={activeIndex <= 0}
        className='fixed start-4 top-1/2 size-10 -translate-y-1/2 px-0'
      >
        {rtl ? <ChevronRight /> : <ChevronLeft />}
      </Button>
      <Button
        size='lg'
        onClick={() => setActiveIndex(prev => prev + 1)}
        disabled={activeIndex >= TEST_ITEMS_COUNT - 1}
        className='fixed end-4 top-1/2 size-10 -translate-y-1/2 px-0'
      >
        {rtl ? <ChevronLeft /> : <ChevronRight />}
      </Button>

      <div className='fixed bottom-0 flex w-full flex-col items-center justify-center gap-2 p-4 md:p-8'>
        <span className='mb-2 text-xl [direction:ltr] md:mb-0'>
          <span className='font-bold'>Current value: </span>
          <code>{`"${value}"`}</code>
        </span>
        <div className='flex flex-col items-center gap-2 md:flex-row md:gap-6'>
          <fieldset className='flex flex-row items-center gap-4'>
            <span>Axis:</span>
            <Radio
              id='radio-axis-x'
              name='axis'
              value='axis-x'
              label='X'
              checked={axis === 'x'}
              onChange={e => e.target.checked && setAxis('x')}
            />
            <Radio
              id='radio-axis-y'
              name='axis'
              value='axis-y'
              label='Y'
              checked={axis === 'y'}
              onChange={e => e.target.checked && setAxis('y')}
            />
            <Radio
              id='radio-axis-z'
              name='axis'
              value='axis-z'
              label='Z'
              checked={axis === 'z'}
              onChange={e => e.target.checked && setAxis('z')}
            />
          </fieldset>
          <Separator
            decorative
            orientation='horizontal'
            className='md:hidden'
          />
          <Separator
            decorative
            orientation='vertical'
            className='hidden h-10 md:block'
          />
          <FormItem>
            <Checkbox
              name='fadevariant'
              id='checkbox-fadevariant'
              checked={fadeVariant}
              onCheckedChange={setFadeVariant}
            />
            <Label htmlFor='checkbox-fadevariant'>Fade variant</Label>
          </FormItem>
          <FormItem>
            <Checkbox
              name='variations'
              id='checkbox-variations'
              checked={variations}
              onCheckedChange={setVariations}
            />
            <Label htmlFor='checkbox-variations'>Item variations</Label>
          </FormItem>
          <FormItem>
            <Checkbox
              name='rtl'
              id='checkbox-rtl'
              checked={rtl}
              onCheckedChange={setRtl}
            />
            <Label htmlFor='checkbox-rtl'>RTL</Label>
          </FormItem>
          <FormItem>
            <Checkbox
              name='debug'
              id='checkbox-debug'
              checked={debug}
              onCheckedChange={setDebug}
            />
            <Label htmlFor='checkbox-debug'>Debug ring</Label>
          </FormItem>
        </div>
      </div>
    </div>
  );
});
SharedAxisExample.displayName = 'SharedAxisExample';

export default SharedAxisExample;
