import { commonSlice, CommonSliceType } from "~/store/common";

import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface StoreType {
  common: CommonSliceType;
}

type MiddlewareType = [["zustand/devtools", never], ["zustand/immer", never]];

export type SliceType<T> = StateCreator<StoreType, MiddlewareType, [], T>;

export const store = create<StoreType>()(
  devtools(
    immer((...args) => ({
      common: commonSlice(...args),
    })),
    { name: "RootStore" }
  )
);
