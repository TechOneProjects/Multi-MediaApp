import { createAction, props } from "@ngrx/store";
import { User } from "../user";

export const setUser = createAction('[User] Set', props<{ user:User }>);
export const deleteUser = createAction('[User] Delete');