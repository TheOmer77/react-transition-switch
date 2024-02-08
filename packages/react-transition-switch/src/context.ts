import { createContext } from 'react';

import type { TransitionSwitchProps } from './types';

export type TransitionSwitchContextValue = Pick<
  TransitionSwitchProps,
  'autoAdjustWidth' | 'autoAdjustHeight' | 'value'
> & {
  containerEl: HTMLElement | null;
};

const initialState: TransitionSwitchContextValue = {
  value: '',
  autoAdjustWidth: true,
  autoAdjustHeight: true,
  containerEl: null,
};

export const TransitionSwitchContext =
  createContext<TransitionSwitchContextValue>(initialState);

export const TransitionSwitchProvider = TransitionSwitchContext.Provider;
