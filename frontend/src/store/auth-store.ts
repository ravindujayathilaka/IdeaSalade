import { create } from 'zustand';
import axiosInstance from '../axios/axiosInstance';

type UserStoreState = {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    googleId?: string;
    id: string;
  } | null;
};

type UserStoreAction = {
  checkAuth: () => Promise<boolean>;
};

const useUserStore = create<UserStoreState & UserStoreAction>((set) => {
  return {
    user: null,

    checkAuth: async () => {
      try {
        const userDetails = await axiosInstance.get('/auth/check-auth');
        console.log(userDetails);
        if (userDetails.data.statusCode == 200 || userDetails.data.statusCode == 201) {
          set({ user: userDetails.data.data });
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        return false;
      }
    },
  };
});

export default useUserStore;
