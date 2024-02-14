import { create } from 'zustand';
import { IUser } from '../models/user';
import { createSelectors } from './common';
import { TOOLS } from '../assets/enums';
import { TABLES } from '../data';


/**
 * State Structure
 */
export interface IBoardState {
  tablesList: any;
  setTablesList: Function;

  selectedTable: any;
  setSelectedTable: Function;

  selectedChair: any;
  setSelectedChair: Function;
}

const initialState: IBoardState = {

  tablesList: TABLES,
  setTablesList: () => { },
  selectedTable: {},
  setSelectedTable: () => { },
  selectedChair: undefined,
  setSelectedChair: () => { },
};

/**
 * State hook definition
 */
export const useBoard = create<IBoardState>((set, get) => ({
  ...initialState,
  setTablesList: (item: any) => set({ tablesList: item }),
  setSelectedTable: (item: any) => set({ selectedTable: item }),
  setSelectedChair: (item: any) => set({ selectedChair: item }),
}));

/**
 * Selectors
 */
export const boardStateSelectors = createSelectors(initialState);
