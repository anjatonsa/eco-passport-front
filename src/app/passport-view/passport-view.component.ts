import { Component, Input, OnInit } from '@angular/core';
import { Passport } from '../entities/passport';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/user.reducer';
import { deletePassport, emptySearch } from '../store/passport.actions';

@Component({
  selector: 'app-passport-view',
  templateUrl: './passport-view.component.html',
  styleUrls: ['./passport-view.component.scss']
})
export class PassportViewComponent implements OnInit {
  @Input() passport: Passport | null = null;
  isMine: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select((state) => state.auth).subscribe((authState: AuthState) => {
      if (authState.user) {
        if (this.passport?.owner?.email === authState.user.email) {
          this.isMine = true;
        }
      }
    });
  }

  getObjectKeys(passport: Passport): any[] {
    return Object.keys(passport);
  }
  deletePost() {
    if (this.passport?._id) {
      this.store.dispatch(deletePassport({ _id: this.passport._id }));
      this.store.dispatch(emptySearch());
    }
  }

}
