import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { TransitionSwitchProvider } from './context';

export interface TransitionSwitchProps extends ComponentPropsWithoutRef<'div'> {
  value: number;
}

export const TransitionSwitch = forwardRef<
  HTMLDivElement,
  TransitionSwitchProps
>(({ value = 0, children, ...props }, ref) => {
  const innerRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => innerRef.current!, []);

  useEffect(() => {
    const initialChild = innerRef.current?.children?.[0];
    if (!innerRef.current || typeof initialChild === 'undefined') return;

    const { width, height } = getComputedStyle(initialChild);
    innerRef.current.style.width = width;
    innerRef.current.style.height = height;
  }, []);

  return (
    <TransitionSwitchProvider value={{ value, containerEl: innerRef.current }}>
      <div {...props} ref={innerRef}>
        {children}
      </div>
    </TransitionSwitchProvider>
  );
});
TransitionSwitch.displayName = 'TransitionSwitch';
