import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Passport } from "../entities/passport";

export const selectSearchedPassportsFeature=createSelector(
    (state: AppState) => state.searchedPassports,
    (searchedPassports) => searchedPassports
);

export const selectSearchedPassports=createSelector(
    selectSearchedPassportsFeature,
    (state) => state.ids.map(id => state.entities[id])
    .filter(passport => passport !== undefined)
    .map(passport => <Passport>passport)
);

export const selectMyPassportsFeature=createSelector(
    (state: AppState) => state.myPassports,
    (myPassports) => myPassports
);

export const selectMyPassports=createSelector(
    selectMyPassportsFeature,
    (state) => state.ids.map(id => state.entities[id])
    .filter(passport => passport !== undefined)
    .map(passport => <Passport>passport)
);
