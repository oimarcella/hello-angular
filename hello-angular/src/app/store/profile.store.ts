import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const PROFILE_STATE_KEY = "profile";

export interface IProfileState{
    name:string;
    age: number;
    email: string;
    saySomething: string;
};

const initialState: IProfileState = {
    name : "",
    age: 0,
    email : "",
    saySomething : ""
};

/* Actions */
export const profileSetName = createAction(
    "PROFILE_setName",
    props<{name: string}>()
);

export const profileSetProfile = createAction(
    "PROFILE_setProfile",
    props<{profile: IProfileState}>()
);

/*  Reducer */
export const profileReducer = createReducer(
    initialState,
    on(profileSetName, (state, {name}) => ({...state, name})),
    on(profileSetProfile, (_, {profile}) => profile ),
);

/* Selectors */
const selectProfileState =
  createFeatureSelector<IProfileState>(PROFILE_STATE_KEY);

export const selectProfile =
  createSelector(selectProfileState, s => s);