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

  selectedZone: number;
  setselectedZone: Function;
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
  selectedZone: 0,
  setselectedZone: () => { },
};

/**
 * State hook definition
 */
export const useBoard = create<IBoardState>((set, get) => ({
  ...initialState,
  setTablesList: (value: any) => set({ tablesList: value }),
  setSelectedTable: (value: any) => set({ selectedTable: value }),
  setSelectedChair: (value: any) => set({ selectedChair: value }),
  settableSize: (value: any) => set({ tableSize: value }),
  setselectedZone: (value: any) => set({ selectedZone: value }),
}));

/**
 * Selectors
 */
export const boardStateSelectors = createSelectors(initialState);
