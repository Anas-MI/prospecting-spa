/* eslint-disable @typescript-eslint/no-explicit-any */
import {createContext} from 'react';

export const StateContext = createContext<{
  answers: (string | string[])[][];
  setAnswers: React.Dispatch<React.SetStateAction<(string | string[])[][]>>;
  counter: number;
  section: number;
} | null>(null);

export const ChangeDataContext = createContext<any>(null);
