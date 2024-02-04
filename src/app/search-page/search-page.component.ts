import { Component } from '@angular/core';
import { Passport } from '../entities/passport';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Search } from '../entities/search';
import {buildingCategories,energyClasses,heatingTypes,energySources,ventilationOptions,hotWaterOptions,coolingTypes} from '../env.vars';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {

  searchedPassports:Passport[]=[];
  buildingCategories = buildingCategories;
  energyClasses = energyClasses;
  heatingTypes = heatingTypes;
  energySources = energySources;
  ventilationOptions = ventilationOptions;
  hotWaterOptions = hotWaterOptions;
  coolingTypes = coolingTypes;

  
  searchParams:Search = {
    buildingCategory: '',
    address: '',
    city: '',
    constructionYear: '',
    area: 0,
    energyClass: '',
    annualHeatingNeed: 0,
    description: '',
    heatingType: '',
    energySources: [],
    ventilation: '',
    hotWater: '',
    coolingType: '',
    totalFloors: 0,
    CO2Emission: 0
  };
  searchForm: FormGroup;

  constructor(private store:Store<AppState>,private formBuilder: FormBuilder) { 

   this.searchForm = this.formBuilder.group({
    buildingCategory: [''],
    heatingType: [''],
    energySource: [''],
    ventilationOption: [''],
    hotWaterOption: [''],
    coolingType: [''],
    energyClass: [''],
    });

  }

  ngOnInit(): void {
    /*this.store.select(selectSearchedPassports).subscribe((searchedPassports)=>{
      this.searchedPassports=searchedPassports;
    });*/

  }
  
  search(){
   this.searchParams = { ...this.searchParams, ...this.searchForm.value };
   console.log(this.searchParams);
   // this.store.dispatch(loadSearchedPassports({search:this.tag}));

  }
}
