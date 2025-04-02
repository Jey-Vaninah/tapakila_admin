import { create } from "zustand";

interface StoreState {
  isOpen: boolean;
  openButton: () => void;
  closeButton: () => void;
}

const useStore = create<StoreState>((set) => ({
  isOpen: false,
  openButton: () => set({ isOpen: true }),
  closeButton: () => set({ isOpen: false }),
}));

export default useStore;
