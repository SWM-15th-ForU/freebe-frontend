import { User } from "user-types";
import { create } from "zustand";

interface PhotographerData {
  profileUrl: string;
}

interface CustomerData {}

type UserDataType = PhotographerData | CustomerData;

interface UserInfoState {
  userRole: User;
  userData: UserDataType;
}

interface UserInfoActions {
  setUserInfo: (userinfo: UserInfoState) => void;
  deleteUserInfo: () => void;
}

const defaultState: UserInfoState = { userRole: "customer", userData: {} };

const useUserInfo = create<UserInfoState & UserInfoActions>((set) => ({
  userRole: defaultState.userRole,
  userData: defaultState.userData,
  setUserInfo: (userInfo: UserInfoState) => {
    set({ ...userInfo });
  },
  deleteUserInfo: () => {
    set({ ...defaultState });
  },
}));

export default useUserInfo;
