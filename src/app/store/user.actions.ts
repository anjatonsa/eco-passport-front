import { createAction, props } from "@ngrx/store";
import { User } from "../entities/user";
import { UserDto } from "../dtos/user.dto";


export const login = createAction(
    "[Auth] Login",
    props<{ email: string; password: string }>()
  );
  
  export const loginsuccess = createAction(
    "[Auth] Login Success",
    props<{ user: User; }>()
  );
  
  export const loginError = createAction(
    "[Auth] Login Error",
    props<{ message: string }>()
  );
  
  export const logout = createAction("[Auth] Log Out");
  
  export const setUser = createAction(
    "[Auth] Set user",
    props<{ user: User }>(),
  );
  
  export const signUp = createAction(
    "[Auth] Sign Up",
    props<{ user: UserDto }>()
  );

  export const deleteUser = createAction(
    "[Auth] Delete User",
    props<{ email: string }>()
  );
  