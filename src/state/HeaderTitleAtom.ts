import { atom } from "recoil";

export const HeaderTitleAtom = atom<string>({
  key: "headerTitle",
  default: "App",
});
