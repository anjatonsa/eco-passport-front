import { EntityState } from "@ngrx/entity";
import { Passport } from "../entities/passport";


export interface MyPassportsState extends EntityState<Passport> {
}

export interface SearchPassportsState extends EntityState<Passport> {
}
