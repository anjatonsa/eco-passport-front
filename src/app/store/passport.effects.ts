import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PassportService } from "../passport/passport.service";
import { Router } from "@angular/router";
import { createPassport, deletePassport, loadCityStatistic, loadCityStatisticSuccess, loadMyPassports, loadMyPassportsSuccess, loadSearchedPassports, loadSearchedPassportsSuccess, updatePassport } from "./passport.actions";
import { exhaustMap, map, mergeMap, switchMap } from "rxjs";

@Injectable()
export class PassportEffects {
    constructor(private actions$: Actions,
        private passportService: PassportService,
        private readonly router: Router,
    ) { }

    loadMyPassports$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadMyPassports),
            switchMap((action) => {
                return this.passportService.getMyPassports().pipe(
                    map((myPassports) => {
                        return loadMyPassportsSuccess({ myPassports: myPassports.body });
                    })
                );
            })
        );
    });

    loadSearchedPassports$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadSearchedPassports),
            exhaustMap((action) => {
                return this.passportService.getSearchedPassports(action.search).pipe(
                    map((searchedPassports) => { return loadSearchedPassportsSuccess({ searchedPassports: searchedPassports.body }) }),
                );
            })
        )
    }
    );

    createPassport$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(createPassport),
            exhaustMap((action) => {
                return this.passportService.createPassport(action.passport).pipe(
                    map((passport) => {
                        this.router.navigate(['/my-passports']);
                        return loadMyPassports();
                    })
                );
            })
        );
    });

    deletePassport$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePassport),
            switchMap((action) => {
                return this.passportService.deletePassport(action._id).pipe(
                    map((draft) => {
                        this.router.navigateByUrl("/my-passports");
                        return loadMyPassports();
                    })
                );
            })
        );
    },);

    updatePassport$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePassport),
            switchMap((action) => {
                return this.passportService.updatePassport(action.passport, action._id).pipe(
                    map((draft) => {
                        this.router.navigateByUrl("/my-passports");
                        return loadMyPassports();
                    })
                );
            })
        );
    },);

    loadCityStatistic$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadCityStatistic),
            switchMap((action) => {
                return this.passportService.getCityStatistic(action.city).pipe(
                    map((statistic) => { 
                         console.log("form effect", statistic.body);
                        
                        return loadCityStatisticSuccess({ statistic: statistic.body }) }),
                );
            })
        );
    },);

}