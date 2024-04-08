import { createAction, props } from "@ngrx/store";

export const setUser = createAction('[User] Set', props<{ user:{id:string, username:string, email:string, password:string} }>);
export const deleteUser = createAction('[User] Delete');