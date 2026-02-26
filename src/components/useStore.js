import { create } from 'zustand';

// create() takes a callback function that returns the state and actions
export const useStore = create((set) => ({
    // 1. The State
    bears: 0,

    // 2. The Actions (functions that update the state)
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}));
