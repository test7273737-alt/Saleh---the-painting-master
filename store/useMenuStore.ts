import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MenuStore {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  openMenu: () => void;
  closeMenu: () => void;
}

export const useMenuStore = create<MenuStore>()(
  persist(
    (set) => ({
      isMenuOpen: false,

      toggleMenu: () =>
        set((state) => ({
          isMenuOpen: !state.isMenuOpen,
        })),

      openMenu: () =>
        set({
          isMenuOpen: true,
        }),

      closeMenu: () =>
        set({
          isMenuOpen: false,
        }),
    }),
    {
      name: "menu-storage",
    },
  ),
);
