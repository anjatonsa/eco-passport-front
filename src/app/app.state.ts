import { MyPassportsState, SearchPassportsState } from "./store/passport.reducer";
import { AuthState } from "./store/user.reducer";


export interface AppState {
    auth: AuthState;
    searchedPassports: SearchPassportsState;
    myPassports: MyPassportsState;
}