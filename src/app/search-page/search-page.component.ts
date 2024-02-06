import { Component } from '@angular/core';
import { Passport } from '../entities/passport';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Search } from '../entities/search';
import {buildingCategories,energyClasses,heatingTypes,energySources,ventilationOptions,hotWaterOptions,coolingTypes} from '../env.vars';
import { selectSearchedPassports } from '../store/passport.selector';
import { loadSearchedPassports } from '../store/passport.actions';
import { PassportDto } from '../dtos/passport.dto';

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

  
  searchParams:PassportDto = new PassportDto("","","","",0,"",0,"","",[],"","","",0,0);
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
    this.store.select(selectSearchedPassports).subscribe((searchedPassports)=>{
      this.searchedPassports=searchedPassports;
    });

  }
  
  search(){
   this.searchParams = { ...this.searchParams, ...this.searchForm.value };
   console.log(this.searchParams);
   this.store.dispatch(loadSearchedPassports({search:this.searchParams}));
   this.searchParams=new PassportDto("","","","",0,"",0,"","",[],"","","",0,0);
   if (this.searchForm) {
    this.searchForm.get('buildingCategory')?.setValue('');
    this.searchForm.get('heatingType')?.setValue('');
    this.searchForm.get('energySource')?.setValue('');
    this.searchForm.get('ventilationOption')?.setValue('');
    this.searchForm.get('hotWaterOption')?.setValue('');
    this.searchForm.get('coolingType')?.setValue('');
    this.searchForm.get('energyClass')?.setValue('');
  }
  }

  
}
