import { useState, type ComponentPropsWithoutRef } from 'react';
import { Separator } from '@radix-ui/react-separator';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import SharedAxis, { type Axis } from 'components/SharedAxis';
import { cn } from 'utils/cn';

const TEST_ITEMS_COUNT = 10;

const Button = ({
  onClick,
  disabled,
  className,
  children,
}: Pick<
  ComponentPropsWithoutRef<'button'>,
  'onClick' | 'disabled' | 'className' | 'children'
>) => (
  <button
    className={cn(
      `flex h-10 w-10 cursor-default items-center justify-center rounded
bg-slate-200 text-slate-800 enabled:active:bg-slate-300 disabled:bg-slate-50
disabled:text-slate-500 dark:bg-slate-800 dark:text-slate-200
dark:enabled:active:bg-slate-700 dark:disabled:bg-slate-900`,
      className
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

const Checkbox = ({
  name,
  id,
  label,
  checked,
  onChange,
}: Pick<
  ComponentPropsWithoutRef<'input'>,
  'name' | 'id' | 'checked' | 'onChange' | 'disabled'
> & { label: string }) => (
  <div className='flex select-none flex-row items-center gap-1'>
    <input
      type='checkbox'
      name={name}
      id={id}
      checked={checked}
      onChange={onChange}
      className='h-4 w-4 accent-blue-600 dark:accent-blue-300'
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

const Radio = ({
  id,
  label,
  checked,
  onChange,
  ...props
}: Pick<
  ComponentPropsWithoutRef<'input'>,
  'id' | 'name' | 'value' | 'checked' | 'onChange' | 'disabled'
> & { label: string }) => (
  <div className='flex select-none flex-row items-center gap-1'>
    <input
      {...props}
      id={id}
      type='radio'
      checked={checked}
      onChange={onChange}
      className='h-4 w-4 accent-blue-600 dark:accent-blue-300'
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [axis, setAxis] = useState<Axis>('x'),
    [variations, setVariations] = useState(false),
    [rtl, setRtl] = useState(false),
    [debug, setDebug] = useState(false);

  return (
    <div
      dir={rtl ? 'rtl' : 'ltr'}
      className='flex min-h-[100dvh] w-full flex-col bg-white text-slate-800
dark:bg-slate-950 dark:text-slate-200'
    >
      <div className='flex w-full flex-grow items-center justify-center p-4'>
        <SharedAxis
          axis={axis}
          activeIndex={activeIndex}
          className={
            debug
              ? `ring-2 ring-red-600 ring-offset-4 ring-offset-white
dark:ring-offset-slate-950`
              : ''
          }
        >
          {[...Array(TEST_ITEMS_COUNT).keys()].map(key => (
            <div
              key={key}
              className={cn(
                `flex h-32 w-32 items-center justify-center rounded-lg text-6xl
text-slate-50 transition-[width,height,background-color]`,
                variations && key % 2 !== 0
                  ? cn('bg-green-600', axis === 'y' ? 'w-64' : 'h-64')
                  : 'bg-blue-600'
              )}
            >
              {key}
            </div>
          ))}
        </SharedAxis>
      </div>

      <Button
        onClick={() => setActiveIndex(prev => prev - 1)}
        disabled={activeIndex <= 0}
        className='fixed start-4 top-1/2 -translate-y-1/2'
      >
        {rtl ? <ChevronRight /> : <ChevronLeft />}
      </Button>
      <Button
        onClick={() => setActiveIndex(prev => prev + 1)}
        disabled={activeIndex >= TEST_ITEMS_COUNT - 1}
        className='fixed end-4 top-1/2 -translate-y-1/2'
      >
        {rtl ? <ChevronLeft /> : <ChevronRight />}
      </Button>

      <div className='fixed bottom-0 flex w-full flex-col items-center justify-center gap-2 p-4 md:p-8'>
        <span className='mb-2 text-xl font-bold md:mb-0'>
          Current index: {activeIndex}
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
          </fieldset>
          <Separator
            className='h-px w-full bg-slate-400 dark:bg-slate-600 md:h-10 md:w-px'
            decorative
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
