import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Passport } from "../entities/passport";
import { createReducer, on } from "@ngrx/store";
import { emptySearch, loadCityStatisticSuccess, loadMyPassportsSuccess, loadSearchedPassportsSuccess } from "./passport.actions";


export interface MyPassportsState extends EntityState<Passport> {
}

export interface SearchPassportsState extends EntityState<Passport> {
}

export interface CityStatisticState extends EntityState<any> {
}


const adapterMyPassports = createEntityAdapter<Passport>({
    selectId: passport => passport._id, 
  });
const adapterSearchedPassports = createEntityAdapter<Passport>({
    selectId: passport => passport._id, 
  });
  
const adapterCityStatistic = createEntityAdapter<any>({
    selectId: stats => stats._id, 
});
export const initialMyPassportsState: MyPassportsState = adapterMyPassports.getInitialState();
export const initialSearchedPassportsState: SearchPassportsState = adapterSearchedPassports.getInitialState();
export const initialCityStatisticState: CityStatisticState = adapterCityStatistic.getInitialState();



export const myPassportsReducer = createReducer(
    initialMyPassportsState,
    on(loadMyPassportsSuccess, (state, { myPassports }) => {
        return adapterMyPassports.setAll(myPassports, state);
    }),
);

export const searchedPassportsReducer = createReducer(
    initialSearchedPassportsState,
    on(loadSearchedPassportsSuccess, (state, { searchedPassports }) => {
        return adapterSearchedPassports.setAll(searchedPassports, state);
    }),
    on(emptySearch, (state) => {
        return adapterSearchedPassports.removeAll(state);
    }),
);

export const cityStatisticReducer = createReducer(
    initialCityStatisticState,
    on(loadCityStatisticSuccess, (state, { statistic }) => {
      return adapterCityStatistic.setAll(statistic, state);
    })
  );