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
    CityStatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
