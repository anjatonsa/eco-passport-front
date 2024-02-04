import { Component } from '@angular/core';
import { Passport } from '../entities/passport';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectMyPassports } from '../store/passport.selector';
import { loadMyPassports } from '../store/passport.actions';

@Component({
  selector: 'app-my-passports',
  templateUrl: './my-passports.component.html',
  styleUrls: ['./my-passports.component.scss']
})
export class MyPassportsComponent {

  myPassports:Passport[]=[];

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectMyPassports).subscribe((myPassports)=>{
      this.myPassports=myPassports;
    });
    this.store.dispatch(loadMyPassports());

  }
}
