import { Component, Input } from '@angular/core';
import { Passport } from '../entities/passport';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { AuthState } from '../store/user.reducer';
import { Router } from '@angular/router';
import { deletePassport } from '../store/passport.actions';
import { SuggestionViewComponent } from '../suggestion-view/suggestion-view.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-display-passport',
  templateUrl: './display-passport.component.html',
  styleUrls: ['./display-passport.component.scss']
})
export class DisplayPassportComponent {

  @Input() passport: Passport | null = null;
  energySourcesString: string = "";
  isMine: boolean = false;


  constructor(private router: Router, private store: Store<AppState>, public dialog: MatDialog) { }

  ngOnInit(): void {

    if (this.passport) {
      this.energySourcesString = this.makeEnergySourcesString();
    }

    this.store.select((state) => state.auth).subscribe((authState: AuthState) => {
      if (authState.user) {

        if (this.passport?.owner._id === authState.user._id) {
          this.isMine = true;
        }
      }
    });
  }

  makeEnergySourcesString(): string {
    let energySourcesString: string = "Energy sources: ";
    if (this.passport) {
      for (let i = 0; i < this.passport.energySources.length; i++) {
        energySourcesString += this.passport.energySources[i];
        if (i < this.passport.energySources.length - 1) {
          energySourcesString += ", ";
        }
      }
    }
    return energySourcesString;
  }

  editPassport() {
    this.router.navigate(['/add-and-edit-passport'], { queryParams: this.passport });
  }

  deletePassport() {
    if (this.passport)
      this.store.dispatch(deletePassport({ _id: this.passport._id }));
  }

  getSuggestion() {

    this.dialog.open(SuggestionViewComponent, {
      data: this.passport?._id
    });
  }

  getObjectKeys(passport: Passport): any[] {
    return Object.keys(passport);
  }

  camelCaseToTitleCase(input: string): string {
    if(input==="CO2Emission")
      return "CO2 Emission";
    return input.replace(/([A-Z])/g, ' $1')
      .replace(/^./, function (str) { return str.toUpperCase(); });
  }
}
