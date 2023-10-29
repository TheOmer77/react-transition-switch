import { useState, type ComponentPropsWithoutRef } from 'react';
import { Separator } from '@radix-ui/react-separator';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import SharedAxis, { type Axis } from 'components/SharedAxis';
import { cn } from 'utils/cn';

const TEST_ITEMS_COUNT = 10;

const Button = ({
  onClick,
  disabled,
  children,
}: Pick<
  ComponentPropsWithoutRef<'button'>,
  'onClick' | 'disabled' | 'children'
>) => (
  <button
    className='flex h-10 w-10 cursor-default items-center justify-center rounded
bg-slate-200 text-slate-800 enabled:active:bg-slate-300 disabled:bg-slate-50
disabled:text-slate-500 dark:bg-slate-800 dark:text-slate-200
dark:enabled:active:bg-slate-700 dark:disabled:bg-slate-900'
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
      type='radio'
      name={name}
      id={id}
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
      className='flex min-h-screen w-full flex-col bg-white text-slate-800
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

      <div className='flex w-full flex-row items-center justify-center gap-2 p-8'>
        <Button
          onClick={() => setActiveIndex(prev => prev - 1)}
          disabled={activeIndex <= 0}
        >
          {rtl ? <ChevronRight /> : <ChevronLeft />}
        </Button>

        <div className='flex flex-grow flex-col items-center justify-center'>
          <span className='text-xl font-bold'>
            Current index: {activeIndex}
          </span>
          <div className='flex flex-row items-center gap-6'>
            <span>Axis:</span>
            <Radio
              name='axis-x'
              id='radio-axis-x'
              label='X'
              checked={axis === 'x'}
              onChange={e => e.target.checked && setAxis('x')}
            />
            <Radio
              name='axis-y'
              id='radio-axis-y'
              label='Y'
              checked={axis === 'y'}
              onChange={e => e.target.checked && setAxis('y')}
            />
            <Separator
              className='h-10 w-px bg-slate-400 dark:bg-slate-600'
              decorative
              orientation='vertical'
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

        <Button
          onClick={() => setActiveIndex(prev => prev + 1)}
          disabled={activeIndex >= TEST_ITEMS_COUNT - 1}
        >
          {rtl ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      </div>
    </div>
  );
};

export default App;
