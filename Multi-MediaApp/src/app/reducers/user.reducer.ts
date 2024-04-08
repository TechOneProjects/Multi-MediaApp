import { createReducer, on } from "@ngrx/store";
import { deleteUser, setUser } from "../actions/user.actions";

export const initialState = {
    id: "",
    email: "",
    password: "",
    username: ""
};

export const userReducer = createReducer(
    initialState,
    on(setUser, (state, user ) => {
        return {...state, user};
    }),
    on(deleteUser, ( state ) => {
        return {
            id: "",
            email: "",
            password: "",
            username: ""
        }
    })
)