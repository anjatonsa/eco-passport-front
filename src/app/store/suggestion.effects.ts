import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SuggestionService } from "../suggestion/suggestion.service";
import { exhaustMap, map, mergeMap } from "rxjs";
import { loadSuggestion, loadSuggestionSuccess } from "./suggestion.action";



@Injectable()
export class SuggestionEffects {
    constructor(
        private readonly actions$: Actions,
        private suggestionService: SuggestionService,) { }

        loadSuggestion$ = createEffect(() => {
            return this.actions$.pipe(
              ofType(loadSuggestion),
              exhaustMap((action) => {
                return this.suggestionService.getSuggestion(action.passportId).pipe(
                    map((suggestion) => {
                        return loadSuggestionSuccess({ suggestion: suggestion.body });
                    })
                );
              })
            )
          },
);







  }
