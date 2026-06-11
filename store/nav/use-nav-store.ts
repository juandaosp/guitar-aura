import { create } from 'zustand'
import { NavStore } from './types';
import { navGroups } from '@/mocks/nav';

export const useNavStore = create<NavStore>()(() => ({ navGroups }));