import { create } from 'zustand';
import { IUser } from '../models/user';
import { createSelectors } from './common';
import { TOOLS } from '../assets/enums';


/**
 * State Structure
 */
export interface IBoardState {
  // State values
  selectedTool: string;
  setSelectedTool: Function;
  resizingIndex: number;
  setResizingIndex: Function;
  currentPost: any;
  setCurrentPost: Function;
}

const initialState: IBoardState = {
  selectedTool: TOOLS.CAMERA,
  setSelectedTool: () => { },
  resizingIndex: 0,
  setResizingIndex: () => { },
  currentPost: {},
  setCurrentPost: () => { }
};

/**
 * State hook definition
 */
export const useBoard = create<IBoardState>((set, get) => ({
  ...initialState,

  setSelectedTool: (item: any) => set({ selectedTool: item }),
  setResizingIndex: (item: any) => set({ resizingIndex: item }),
  setCurrentPost: (item: any) => set({ currentPost: item }),
}));

/**
 * Selectors
 */
export const boardStateSelectors = createSelectors(initialState);
