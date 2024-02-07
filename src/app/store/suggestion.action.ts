import { createAction, props } from "@ngrx/store";
import { Suggestion } from "../entities/suggestion";

export const loadSuggestion = createAction(
    '[Suggestion] Load Suggestion',
    props<{passportId:string}>()
);

export const loadSuggestionSuccess = createAction(
    '[Suggestion] Load Suggestion Success',
    props<{ suggestion: Suggestion }>()
);