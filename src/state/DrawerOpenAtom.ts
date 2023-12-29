import { atom } from "recoil";

export const DrawerOpenAtom = atom<boolean>({
  key: "drawerOpen",
  default: false,
});
