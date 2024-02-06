import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable, filter, map } from 'rxjs';
import { selectUserData } from '../store/user.selector';
import { url } from '../env.vars';
import { PassportDto } from '../dtos/passport.dto';
import { Passport } from '../entities/passport';

@Injectable({
  providedIn: 'root'
})
export class PassportService {

  userEmail: string = "";

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  getMyPassports(): Observable<HttpResponse<any>> {
    this.store.select(selectUserData).pipe(
      filter((userData) => !!userData),
      map((userData) => userData!.email)
    ).subscribe((email) => {
      this.userEmail = email;
    });

    return this.http.get(url + `/passport/owner/${this.userEmail}`, { observe: 'response' });//mail
  }

  getSearchedPassports(search: any): Observable<HttpResponse<any>> {
    this.store.select(selectUserData).pipe(
      filter((userData) => !!userData),
      map((userData) => userData!.email)
    ).subscribe((email) => {
      this.userEmail = email;
    });
    return this.http.get(url + '/passport/search', {params: new HttpParams({ fromObject: search as any }),  observe: 'response' });

  }

  createPassport(passport: PassportDto): Observable<HttpResponse<any>> {
    this.store.select(selectUserData).pipe(
      filter((userData) => !!userData),
      map((userData) => userData!.email)
    ).subscribe((email) => {
      this.userEmail = email;
    });
    return this.http.post(url + `/passport/${this.userEmail}`,  passport , { observe: 'response' });
  }

  deletePassport(_id: string): Observable<HttpResponse<any>> {
    return this.http.delete(url + `/passport/${_id}`, { observe: 'response' });
  }

  updatePassport(passport: PassportDto, _id:string): Observable<HttpResponse<any>> {
    return this.http.put(url + `/passport/${_id}`,  passport , { observe: 'response' });
  }


}
