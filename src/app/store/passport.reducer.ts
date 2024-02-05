import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Passport } from "../entities/passport";
import { createReducer, on } from "@ngrx/store";
import { emptySearch, loadMyPassportsSuccess, loadSearchedPassportsSuccess } from "./passport.actions";


export interface MyPassportsState extends EntityState<Passport> {
}

export interface SearchPassportsState extends EntityState<Passport> {
}


const adapterMyPassports = createEntityAdapter<Passport>({
    selectId: passport => passport._id, 
  });
const adapterSearchedPassports = createEntityAdapter<Passport>({
    selectId: passport => passport._id, 
  });

export const initialMyPassportsState: MyPassportsState = adapterMyPassports.getInitialState();
export const initialSearchedPAssportsState: SearchPassportsState = adapterSearchedPassports.getInitialState();


export const myPassportsReducer = createReducer(
    initialMyPassportsState,
    on(loadMyPassportsSuccess, (state, { myPassports }) => {
        return adapterMyPassports.setAll(myPassports, state);
    }),
);

export const searchedPassportsReducer = createReducer(
    initialSearchedPAssportsState,
    on(loadSearchedPassportsSuccess, (state, { searchedPassports }) => {
        return adapterSearchedPassports.setAll(searchedPassports, state);
    }),
    on(emptySearch, (state) => {
        return adapterSearchedPassports.removeAll(state);
    }),
);