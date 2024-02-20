import { create } from "zustand";
import { type Preregistration } from "@prisma/client";

type UserStore = {
  user?: Preregistration;
  setUser: (user: Preregistration) => void;
};

const useUserStore = create<UserStore>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
