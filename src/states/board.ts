import { create } from 'zustand';
import { IUser } from '../models/user';
import { createSelectors } from './common';
import { TOOLS } from '../assets/enums';


/**
 * State Structure
 */
export interface IBoardState {
  tablesList: any;
  setTablesList: Function;

  selectedTable: any;
  setSelectedTable: Function;
}

const initialState: IBoardState = {

  tablesList: [],
  setTablesList: () => { },
  selectedTable: {},
  setSelectedTable: () => { },
};

/**
 * State hook definition
 */
export const useBoard = create<IBoardState>((set, get) => ({
  ...initialState,
  setTablesList: (item: any) => set({ tablesList: item }),
  setSelectedTable: (item: any) => set({ selectedTable: item }),
}));

/**
 * Selectors
 */
export const boardStateSelectors = createSelectors(initialState);
