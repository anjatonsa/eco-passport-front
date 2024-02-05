import { Component, Input } from '@angular/core';
import { Passport } from '../entities/passport';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-display-passport',
  templateUrl: './display-passport.component.html',
  styleUrls: ['./display-passport.component.scss']
})
export class DisplayPassportComponent {

  @Input() passport:Passport|null=null;
  energySourcesString:string="";

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

    if(this.passport){
      this.energySourcesString=this.makeEnergySourcesString();
    }
  }

  makeEnergySourcesString():string{
    let energySourcesString:string="Energy sources: ";
    if(this.passport){
      for(let i=0;i<this.passport.energySources.length;i++){
        energySourcesString+=this.passport.energySources[i]+` (${this.passport.energySources[i]})`;
        if(i<this.passport.energySources.length-1){
          energySourcesString+=", ";
        }
      }
    }
    return energySourcesString;
  }
}
