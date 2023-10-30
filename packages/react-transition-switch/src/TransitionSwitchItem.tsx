import {
  useContext,
  useLayoutEffect,
  useRef,
  type ReactNode,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Slot } from '@radix-ui/react-slot';

import { TransitionSwitchContext } from './context';

interface TransitionSwitchItemProps {
  index: number;
  children?: ReactNode;
}

export const TransitionSwitchItem = forwardRef<
  HTMLElement,
  TransitionSwitchItemProps
>(({ index, children }, ref) => {
  const { activeIndex, prevIndex, animateInitial, containerEl } = useContext(
    TransitionSwitchContext
  );

  const innerRef = useRef<HTMLElement>(null);
  useImperativeHandle(ref, () => innerRef.current!, []);

  useLayoutEffect(() => {
    if (innerRef.current === null || activeIndex !== index) return;
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
  }, [activeIndex, containerEl, index, ref]);

  return (
    <Slot
      ref={innerRef}
      data-state={
        typeof prevIndex === 'number' || animateInitial
          ? activeIndex === index
            ? 'open'
            : 'closed'
          : 'initial-open'
      }
    >
      {children}
    </Slot>
  );
});
TransitionSwitchItem.displayName = 'TransitionSwitchItem';
