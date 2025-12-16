/* Here will be maped all the states of app */

import { PROFILE_STATE_KEY, profileReducer } from "./profile.store";

export const appReducers = {
    [PROFILE_STATE_KEY]: profileReducer,
};