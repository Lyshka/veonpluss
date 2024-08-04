import { create } from "zustand";

type MobileMenu = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const useMobileMenu = create<MobileMenu>()((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
