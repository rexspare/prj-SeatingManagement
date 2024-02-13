import { create } from 'zustand';
import { IUser } from '../models/user';
import { createSelectors } from './common';


/**
 * State Structure
 */
export interface IAppState {
  // State values
  isAuthenticated: boolean;
  currentUserId: string;
  user: IUser | {};
  setAuthenticated: (status: boolean, accessToken?: IUser | {}) => void;
  setUser: (item: IUser) => void;
  accessToken: string;

}

const initialState: IAppState = {
  user: {},
  isAuthenticated: false,
  currentUserId: '',
  setAuthenticated: () => { },
  setUser: () => { },
  accessToken: '',

};

/**
 * State hook definition
 */
export const useApp = create<IAppState>((set, get) => ({
  ...initialState,
  setAuthenticated: (status, user) =>
    set({ isAuthenticated: status, user: user ?? {} }),
  setUser: item => set({ user: item }),
}));

/**
 * Selectors
 */
export const appStateSelectors = createSelectors(initialState);
