import { create } from "zustand";

type Notification = {
  uuid: string;
  content: string;
  createdAt: Date;
};

type User = {
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: string;
  credits: number;
  notifications: Notification[];
};

type Account = {
  firstName: string;
  lastName: string;
  email: string;
};

type UserActions = {
  setUser: (user: User) => void;
  setAccount: (account: Account) => void;
  setNotifications: (notifications: Notification[]) => void;
};

export const useUserStore = create<User & UserActions>((set) => ({
  uuid: "",
  firstName: "",
  lastName: "",
  email: "",
  roles: "",
  credits: 0,
  notifications: [],
  setUser: (user: User) => set(user),
  setAccount: (account: Account) =>
    set({
      firstName: account.firstName,
      lastName: account.lastName,
      email: account.email,
    }),
  setNotifications: (notifications: Notification[]) => set({ notifications }),
}));
