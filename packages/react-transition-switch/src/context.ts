import { createContext } from 'react';

export interface TransitionSwitchContextValue {
  value: number;
  containerEl: HTMLElement | null;
}

const initialState: TransitionSwitchContextValue = {
  value: 0,
  containerEl: null,
};

export const TransitionSwitchContext =
  createContext<TransitionSwitchContextValue>(initialState);

export const TransitionSwitchProvider = TransitionSwitchContext.Provider;
