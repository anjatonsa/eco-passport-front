import { createAction, props } from "@ngrx/store";
import { Passport } from "../entities/passport";
import { PassportDto } from "../dtos/passport.dto";

export const loadMyPassports = createAction(
    '[Passports] Load My Passports'
);

export const loadMyPassportsSuccess = createAction(
    '[Passports] Load My Passports Success',
    props<{ myPassports: Passport[] }>()
);

export const loadSearchedPassports = createAction(
    '[Passports] Load Searched Passports',
    props<{ search: {} }>()
);

export const loadSearchedPassportsSuccess = createAction(
    '[Passports] Load Searched Passports Success',
    props<{ searchedPassports: Passport[] }>()
);

export const createPassport = createAction(
    '[Passports] Create Passport',
    props<{ passport: PassportDto}>()
);

export const deletePassport = createAction(
    '[Passports] Delete Passport',
    props<{ _id: number }>()
);

export const deletePassportSuccess = createAction(
    '[Passports] Deleted Passport Sucsess'
);

export const emptySearch = createAction(
    '[Passports] Empty Search'
);

export const emptySearchSuccess = createAction(
    '[Passports] Empty Search Success'
);

export const updatePassport = createAction(
    '[Passports] Update Passport',
    props<{ passport: PassportDto,_id:string}>()
);

export const updatePassportSuccess = createAction(
    '[Passports] Update Passport Success',
);