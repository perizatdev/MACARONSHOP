import { configureStore } from '@reduxjs/toolkit';
import profileSlice from '../features/Profile/store/slice'

const store = configureStore({
    reducer: {
        profile: profileSlice,
    },
});

export default store;
