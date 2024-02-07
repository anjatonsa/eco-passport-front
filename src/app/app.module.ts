import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { MyPassportsComponent } from './my-passports/my-passports.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PassportEditorComponent } from './passport-editor/passport-editor.component';
import { PassportViewComponent } from './passport-view/passport-view.component';
import { CityStatisticsComponent } from './city-statistics/city-statistics.component';
import { AppState } from './app.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { UserEffects } from './store/user.effects';
import { authReducer } from './store/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { cityStatisticReducer, myPassportsReducer, searchedPassportsReducer } from './store/passport.reducer';
import { PassportEffects } from './store/passport.effects';
import { DisplayPassportComponent } from './display-passport/display-passport.component';
import { AddAndEditPassportComponent } from './add-and-edit-passport/add-and-edit-passport.component';
import { SuggestionViewComponent } from './suggestion-view/suggestion-view.component';
import { suggestionReducer } from './store/suggestion.reducer';
import { SuggestionEffects } from './store/suggestion.effects';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NavComponent,
    ProfileComponent,
    MyPassportsComponent,
    SearchPageComponent,
    PassportEditorComponent,
    PassportViewComponent,
    CityStatisticsComponent,
    DisplayPassportComponent,
    AddAndEditPassportComponent,
    SuggestionViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({auth:authReducer, myPassports:myPassportsReducer, searchedPassports:searchedPassportsReducer, suggestion:suggestionReducer, cityStatistic:cityStatisticReducer}, {}),
    EffectsModule.forRoot([UserEffects,PassportEffects,SuggestionEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    HttpClientModule,
    MatSelectModule,
    MatStepperModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
