import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyPassportsComponent } from './my-passports/my-passports.component';
import { CityStatisticsComponent } from './city-statistics/city-statistics.component';
import { PassportEditorComponent } from './passport-editor/passport-editor.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'sign-in', pathMatch: 'full'
  },
  {
    path:'sign-in', component: SignInComponent, pathMatch: 'full'
  },
  {
    path:'sign-up', component: SignUpComponent, pathMatch: 'full'
  },
  {
    path:'my-passports', component: MyPassportsComponent, pathMatch: 'full'
  },
  {
    path:'city-statistics', component: CityStatisticsComponent, pathMatch: 'full'
  },
  {
    path:'passport-editor', component: PassportEditorComponent, pathMatch: 'full'
  },
  {
    path:'my-profile', component: ProfileComponent, pathMatch: 'full'
  },
  {
    path:'search', component: SearchPageComponent, pathMatch: 'full'
  },
  {
    path:'**', redirectTo: 'sign-in', pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
