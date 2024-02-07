import { CityStatisticState, MyPassportsState, SearchPassportsState } from "./store/passport.reducer";
import { SuggestionState } from "./store/suggestion.reducer";
import { AuthState } from "./store/user.reducer";


export interface AppState {
    auth: AuthState;
    searchedPassports: SearchPassportsState;
    myPassports: MyPassportsState;
    suggestion:SuggestionState;
    cityStatistic:CityStatisticState;
}