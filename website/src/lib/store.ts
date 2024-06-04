import { create } from "zustand";

type User = {
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: string;
  credits: number;
};

type UserActions = {
  setUser: (user: User) => void;
};

export const useUserStore = create<User & UserActions>((set) => ({
  uuid: "",
  firstName: "",
  lastName: "",
  email: "",
  roles: "",
  credits: 0,
  setUser: (user: User) => set(user),
}));
