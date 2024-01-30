import { useMemo, useState } from 'react';
import { Separator } from '@radix-ui/react-separator';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { toWords } from 'number-to-words';

import { TransitionSwitchItem } from '@theomer77/react-transition-switch';
import { Button } from '@/components/ui/Button';
import { Checkbox, Radio } from '@/components/general';
import SharedAxis, { type Axis } from '@/components/SharedAxis';
import { cn } from '@/lib/utils';

const TEST_ITEMS_COUNT = 10;

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0),
    value = useMemo(() => toWords(activeIndex), [activeIndex]);

  const [axis, setAxis] = useState<Axis>('x'),
    [fadeVariant, setFadeVariant] = useState(false),
    [variations, setVariations] = useState(false),
    [rtl, setRtl] = useState(false),
    [debug, setDebug] = useState(false);

  return (
    <div
      dir={rtl ? 'rtl' : 'ltr'}
      className='flex min-h-[100dvh] w-full flex-col bg-white text-neutral-800
dark:bg-neutral-950 dark:text-neutral-200'
    >
      <div className='flex w-full flex-grow items-center justify-center p-4'>
        <SharedAxis
          axis={axis}
          fadeVariant={fadeVariant}
          value={value}
          className={
            debug
              ? `ring-2 ring-danger-600 ring-offset-4 ring-offset-white
dark:ring-offset-neutral-950`
              : ''
          }
        >
          {[...Array(TEST_ITEMS_COUNT).keys()].map(key => (
            <TransitionSwitchItem key={key} value={toWords(key)}>
              <div
                className={cn(
                  `flex h-32 w-32 select-none items-center justify-center
rounded-xl text-6xl text-neutral-50 shadow-lg
transition-[width,height,background-color,color,box-shadow]`,
                  variations && key % 2 !== 0
                    ? cn(
                        `bg-secondary text-secondary-foreground
shadow-secondary/50`,
                        axis === 'y' ? 'w-64' : 'h-64'
                      )
                    : `bg-primary text-primary-foreground
shadow-primary/50`
                )}
              >
                {key}
              </div>
            </TransitionSwitchItem>
          ))}
        </SharedAxis>
      </div>

      <Button
        size='icon-lg'
        onClick={() => setActiveIndex(prev => prev - 1)}
        disabled={activeIndex <= 0}
        className='fixed start-4 top-1/2 -translate-y-1/2'
      >
        {rtl ? <ChevronRight /> : <ChevronLeft />}
      </Button>
      <Button
        size='icon-lg'
        onClick={() => setActiveIndex(prev => prev + 1)}
        disabled={activeIndex >= TEST_ITEMS_COUNT - 1}
        className='fixed end-4 top-1/2 -translate-y-1/2'
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
            className='h-px w-full bg-neutral-400 dark:bg-neutral-600 md:h-10 md:w-px'
            decorative
          />
          <Checkbox
            name='fadevariant'
            id='checkbox-fadevariant'
            label='Fade variant'
            checked={fadeVariant}
            onChange={() => setFadeVariant(prev => !prev)}
          />
          <Checkbox
            name='variations'
            id='checkbox-variations'
            label='Item variations'
            checked={variations}
            onChange={() => setVariations(prev => !prev)}
          />
          <Checkbox
            name='rtl'
            id='checkbox-rtl'
            label='RTL'
            checked={rtl}
            onChange={() => setRtl(prev => !prev)}
          />
          <Checkbox
            name='debug'
            id='checkbox-debug'
            label='Debug ring'
            checked={debug}
            onChange={() => setDebug(prev => !prev)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
