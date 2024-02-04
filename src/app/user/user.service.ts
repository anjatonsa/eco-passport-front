import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserDto } from '../dtos/user.dto';
import { Observable } from 'rxjs';
import { url } from '../env.vars';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  signUp(userDto: UserDto): Observable<HttpResponse<any>> {
    return this.http.post(
      url + '/user',
      { ...userDto },
      { observe: 'response' }
    );
  }

  signIn(email: string, password: string): Observable<HttpResponse<any>> {///sta ovde
    return this.http.post(
      url + '/user/signIn',
      { email: email, password: password },
      { observe: 'response' }
    );
  }

  getUser(email: string): Observable<HttpResponse<any>> {
    return this.http.get(url + '/user/' + email, { observe: 'response' });
  }

  deleteUser(email: string): Observable<HttpResponse<any>> {
    return this.http.delete(url + '/user/' + email, { observe: 'response' });
  }
}
