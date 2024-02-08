import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type TransitionSwitchDirection = 'backward' | 'forward';

export type TransitionSwitchProps = ComponentPropsWithoutRef<'div'> & {
  /** The value of the active `<TransitionSwitchItem>` child component. */
  value: string;
  /**
   * Change the default `<div>` element for the one passed as a child, merging
   * their props and behavior.
   *
   * When set to `true`, this component must have a single child which accepts
   * a ref, and its children should be `<TransitionSwitchItem>` components.
   *
   * @see [Radix UI composition](https://www.radix-ui.com/primitives/docs/guides/composition)
   */
  asChild?: boolean;
  /**
   * Whether or not the parent container should automatically adjust its width
   * to that of the active child.
   */
  autoAdjustWidth?: boolean;
  /**
   * Whether or not the parent container should automatically adjust its height
   * to that of the active child.
   */
  autoAdjustHeight?: boolean;
  /**
   * Add a `data-direction` attribute to the parent element, representing the
   * transition direction, which would have a value of either 'backward' or
   * 'forward'. This allows to apply a different animation based on the
   * transition direction.
   */
  directional?: boolean;
};

export type TransitionSwitchItemProps = {
  /**
   * The value of this item. If matches the parent's value, this item will be
   * displayed.
   */
  value: string;
  children?: ReactNode;
};
