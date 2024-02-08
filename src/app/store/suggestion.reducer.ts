import { ActionReducer, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Suggestion } from '../entities/suggestion';
import { loadSuggestionSuccess, removeSuggestion } from './suggestion.action';

export interface SuggestionState extends EntityState<Suggestion> {}

const adapterSuggestion = createEntityAdapter<Suggestion>({
  selectId: suggestion => suggestion._id,
});

export const initialSuggestionState: SuggestionState = adapterSuggestion.getInitialState();

export const suggestionReducer: ActionReducer<SuggestionState, any> = createReducer(
  initialSuggestionState,
  on(loadSuggestionSuccess, (state, { suggestion }) => {
    return adapterSuggestion.setOne(suggestion, state);
  }),
  on(removeSuggestion, (state) => {
    return adapterSuggestion.removeAll(state);
}),
);
