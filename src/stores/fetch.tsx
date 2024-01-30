import { create } from 'zustand'
import { FetchTest } from './interface';

const useStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state: FetchTest) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))

export { useStore };