import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Presence } from '@radix-ui/react-presence';

import { TransitionSwitchContext } from './context';

export interface TransitionSwitchItemProps {
  value: number;
  children?: ReactNode;
}

export const TransitionSwitchItem = forwardRef<
  HTMLElement,
  TransitionSwitchItemProps
>(({ value, children }, ref) => {
  const { value: activeValue } = useContext(TransitionSwitchContext);
  return (
    <Presence key={`sharedAxis-item-${value}`} present={activeValue === value}>
      <TransitionSwitchItemContent value={value} ref={ref}>
        {children}
      </TransitionSwitchItemContent>
    </Presence>
  );
});
TransitionSwitchItem.displayName = 'TransitionSwitchItem';

const TransitionSwitchItemContent = forwardRef<
  HTMLElement,
  TransitionSwitchItemProps
>(({ value, children }, ref) => {
  const { value: activeValue, containerEl } = useContext(
    TransitionSwitchContext
  );

  const innerRef = useRef<HTMLElement>(null);
  useImperativeHandle(ref, () => innerRef.current!, []);

  useLayoutEffect(() => {
    if (innerRef.current === null || activeValue !== value) return;
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const { clientWidth, clientHeight } = entry.target,
        width = `${clientWidth}px`,
        height = `${clientHeight}px`;

      if (!containerEl) return;
      if (containerEl.style.width !== width) containerEl.style.width = width;
      if (containerEl.style.height !== height)
        containerEl.style.height = height;
    });
    observer.observe(innerRef.current);

    return () => observer.disconnect();
  }, [activeValue, containerEl, value, ref]);

  return (
    <Slot
      ref={innerRef}
      data-state={activeValue === value ? 'active' : 'inactive'}
    >
      {children}
    </Slot>
  );
});
TransitionSwitchItemContent.displayName = 'TransitionSwitchItemContent';
