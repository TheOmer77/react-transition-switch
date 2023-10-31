import { createContext } from 'react';

export interface TransitionSwitchContextValue {
  activeIndex: number;
  containerEl: HTMLElement | null;
}

const initialState: TransitionSwitchContextValue = {
  activeIndex: 0,
  containerEl: null,
};

export const TransitionSwitchContext =
  createContext<TransitionSwitchContextValue>(initialState);

export const TransitionSwitchProvider = TransitionSwitchContext.Provider;
