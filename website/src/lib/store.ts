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

type UserActions = {
  setUser: (user: User) => void;
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
  setNotifications: (notifications: Notification[]) => set({ notifications }),
}));
