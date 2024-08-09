import { create } from "zustand";

interface PhotographerData {
  profileUrl: string;
}

interface CustomerData {}

type UserInfoState =
  | {
      userRole: "photographer";
      userData: PhotographerData;
    }
  | {
      userRole: "customer";
      userData: CustomerData;
    };

interface UserInfoActions {
  setUserInfo: (userinfo: UserInfoState) => void;
  deleteUserInfo: () => void;
}

const defaultState: UserInfoState = { userRole: "customer", userData: {} };

const useUserInfo = create<UserInfoState & UserInfoActions>()((set) => ({
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
