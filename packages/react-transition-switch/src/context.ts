import { createContext } from 'react';

export interface TransitionSwitchContextValue {
  value: string;
  containerEl: HTMLElement | null;
}

const initialState: TransitionSwitchContextValue = {
  value: '',
  containerEl: null,
};

export const TransitionSwitchContext =
  createContext<TransitionSwitchContextValue>(initialState);

export const TransitionSwitchProvider = TransitionSwitchContext.Provider;
