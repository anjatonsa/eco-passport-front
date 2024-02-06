import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Passport } from '../entities/passport';
import { PassportDto } from '../dtos/passport.dto';
import { User } from '../entities/user';
import { selectIsAuth, selectUserData } from '../store/user.selector';
import {buildingCategories,energyClasses,heatingTypes,energySources,ventilationOptions,hotWaterOptions,coolingTypes} from '../env.vars';


@Component({
  selector: 'app-add-and-edit-passport',
  templateUrl: './add-and-edit-passport.component.html',
  styleUrls: ['./add-and-edit-passport.component.scss']
})
export class AddAndEditPassportComponent {

  buildingCategories = buildingCategories;
  energyClasses = energyClasses;
  heatingTypes = heatingTypes;
  energySources = energySources;
  ventilationOptions = ventilationOptions;
  hotWaterOptions = hotWaterOptions;
  coolingTypes = coolingTypes;

  passportNew:PassportDto=new PassportDto("","","","",0,"",0,"","",[],"","","",0,0);
  passportEdit:Passport|null=null;
  owner:User|null=null;
  isGuest:boolean=false;
  altcritFormGroup!: FormGroup;
  altcritFormGroup2!:FormGroup;
  altcritFormGroup3!:FormGroup;


    constructor(private _formBuilder: FormBuilder,
      private store: Store<AppState>,
      private router : Router) {
  }

  ngOnInit(){
    this.altcritFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required],  

    });
    this.altcritFormGroup2=this._formBuilder.group({
      buildingCategory: ['', Validators.required],
      constructionYear: [0, Validators.required],
      totalFloors: [0, Validators.required],
      area: [0, Validators.required],
    })

    this.altcritFormGroup3=this._formBuilder.group({
      heatingType: ['', Validators.required],
      energySources: [[], Validators.required],
      ventilationOption: ['', Validators.required],
      hotWaterOption: ['', Validators.required],
      coolingType: ['', Validators.required],
      annualHeatingNeed: [0, Validators.required],
      CO2Emission: [0, Validators.required],
      energyClass: ['', Validators.required],
    })

    this.store.select(selectIsAuth).subscribe(isAuth => {
      if(!isAuth){
        this.isGuest=true;
      }
    });

    this.store.select(selectUserData).subscribe(user => {
      if(user){
        this.owner=user;
      }
    });

    /*this.store.select(selectEditPassport).subscribe(passport => {
      if(passport!==null && passport!==undefined){
        this.passportEdit=passport;
        if(this.passportEdit!==null){
          this.setPassportParameters();
        }
      }
    });*/

  }
 
  setPassportParameters()
  {

  }
  savePassport()
  {
    this.passportNew = new PassportDto(this.altcritFormGroup2.value.buildingCategory,this.altcritFormGroup.value.address, this.altcritFormGroup.value.city,
      this.altcritFormGroup.value.constructionYear,this.altcritFormGroup.value.area, this.altcritFormGroup3.value.energyClass,this.altcritFormGroup3.value.annualHeatingNeed,
      this.altcritFormGroup.value.description, this.altcritFormGroup3.value.heatingType,this.altcritFormGroup3.value.energySources, this.altcritFormGroup3.value.ventilation,
      this.altcritFormGroup3.value.hotWater,this.altcritFormGroup3.value.coolingType, this.altcritFormGroup2.value.totalFloors,this.altcritFormGroup3.value.CO2Emission
      );
    console.log("pasportNew, ",this.passportNew, " user id", this.owner?._id);
    
  }
  discardPassport(){
    this.router.navigate(['/my-passports']);
  }


}