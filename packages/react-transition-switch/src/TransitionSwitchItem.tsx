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

interface TransitionSwitchItemProps {
  index: number;
  children?: ReactNode;
}

export const TransitionSwitchItem = forwardRef<
  HTMLElement,
  TransitionSwitchItemProps
>(({ index, children }, ref) => {
  const { activeIndex } = useContext(TransitionSwitchContext);
  return (
    <Presence key={`sharedAxis-item-${index}`} present={activeIndex === index}>
      <TransitionSwitchItemContent index={index} ref={ref}>
        {children}
      </TransitionSwitchItemContent>
    </Presence>
  );
});
TransitionSwitchItem.displayName = 'TransitionSwitchItem';

const TransitionSwitchItemContent = forwardRef<
  HTMLElement,
  TransitionSwitchItemProps
>(({ index, children }, ref) => {
  const { activeIndex, animateInitial, updatedOnce, containerEl } = useContext(
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
        activeIndex === index
          ? animateInitial || !updatedOnce
            ? 'open'
            : 'initial-open'
          : 'closed'
      }
    >
      {children}
    </Slot>
  );
});
TransitionSwitchItemContent.displayName = 'TransitionSwitchItemContent';
