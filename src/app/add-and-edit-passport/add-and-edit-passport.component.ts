import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-and-edit-passport',
  templateUrl: './add-and-edit-passport.component.html',
  styleUrls: ['./add-and-edit-passport.component.scss']
})
export class AddAndEditPassportComponent {



    constructor(private _formBuilder: FormBuilder,
      private store: Store<AppState>,
      private router : Router) {
  }
 
  savePassport()
  {
    
  }
}
