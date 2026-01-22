import { atomWithStorage } from "jotai/utils";

export const tagsAtom = atomWithStorage<string[]>("recent", []);
