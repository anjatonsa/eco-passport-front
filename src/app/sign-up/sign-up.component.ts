import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Router } from '@angular/router';
import { UserDto } from '../dtos/user.dto';
import { signUp } from '../store/user.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  hidePassword: boolean = true;

  user:UserDto = new UserDto('','','','','');

  constructor(private store: Store<AppState>,private router:Router) { }

  onSignIn(): void {
    this.router.navigate(['sign-in']);
  }

  onSignUp(): void {
     this.store.dispatch(signUp({user:this.user}));
  }
}
