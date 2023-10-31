import { createContext } from 'react';

export interface TransitionSwitchContextValue {
  activeIndex: number;
  prevIndex?: number;
  animateInitial?: boolean;
  containerEl: HTMLElement | null;
}

const initialState: TransitionSwitchContextValue = {
  activeIndex: 0,
  animateInitial: false,
  containerEl: null,
};

export const TransitionSwitchContext =
  createContext<TransitionSwitchContextValue>(initialState);

export const TransitionSwitchProvider = TransitionSwitchContext.Provider;
