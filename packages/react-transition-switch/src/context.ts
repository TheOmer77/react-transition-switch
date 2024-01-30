import { createContext } from 'react';

export type TransitionSwitchContextValue = {
  value: string;
  containerEl: HTMLElement | null;
};

const initialState: TransitionSwitchContextValue = {
  value: '',
  containerEl: null,
};

export const TransitionSwitchContext =
  createContext<TransitionSwitchContextValue>(initialState);

export const TransitionSwitchProvider = TransitionSwitchContext.Provider;
