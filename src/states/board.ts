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

  tableSize: number;
  settableSize: Function;
}

const initialState: IBoardState = {

  tablesList: TABLES,
  setTablesList: () => { },
  selectedTable: {},
  setSelectedTable: () => { },
  selectedChair: undefined,
  setSelectedChair: () => { },
  tableSize: 0,
  settableSize: () => { },
};

/**
 * State hook definition
 */
export const useBoard = create<IBoardState>((set, get) => ({
  ...initialState,
  setTablesList: (item: any) => set({ tablesList: item }),
  setSelectedTable: (item: any) => set({ selectedTable: item }),
  setSelectedChair: (item: any) => set({ selectedChair: item }),
  settableSize: (item: any) => set({ tableSize: item }),
}));

/**
 * Selectors
 */
export const boardStateSelectors = createSelectors(initialState);
