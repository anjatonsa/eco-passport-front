import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy{
  email: string = '';
  password: string = '';
  hidePassword: boolean = true;

  constructor(private store: Store<AppState>, private router:Router) { }

  ngOnInit(): void {
   
  }

  ngOnDestroy(): void {
  }

  onSignIn(): void {
    // this.store.dispatch(login({email:this.email, password:this.password}));
  }

  onSignUp(): void {
    this.router.navigate(['sign-up']);
  }
  onGuestAccess(): void {
    this.router.navigate(['search']);
  }
}
