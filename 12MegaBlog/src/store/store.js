import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../features/authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice   //you can name the key anything you want, i named it auth
    }
})

export default store;


//    remember:
//    default export → name can change
//    named export → name must match

// Rule:

// Import name can be anything
// Only one default export per file