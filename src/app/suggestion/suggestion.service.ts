import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from '../env.vars';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(private http: HttpClient) { }

  getSuggestion(passportId:string):Observable<HttpResponse<any>>{

    return this.http.get(url + `/suggestion/upgrade/${passportId}`,{ observe: 'response' });
  }

}
