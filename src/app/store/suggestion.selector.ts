import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectSuggestionFeature=createSelector(
    (state: AppState) => state.suggestion,
    (suggestion) => suggestion
);

export const selectSuggestion=createSelector(
    selectSuggestionFeature,
    (state) => state
);
