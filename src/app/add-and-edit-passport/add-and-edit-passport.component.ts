import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Passport } from '../entities/passport';
import { PassportDto } from '../dtos/passport.dto';
import { User } from '../entities/user';
import { selectIsAuth, selectUserData } from '../store/user.selector';
import {buildingCategories,energyClasses,heatingTypes,energySources,ventilationOptions,hotWaterOptions,coolingTypes} from '../env.vars';
import { createPassport, updatePassport } from '../store/passport.actions';


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

  passportNew:PassportDto=new PassportDto("","","","",0,"",0,"","",[],"","","",0,0,true);
  passportEdit:PassportDto|null=null;
  passportEditId:string|null=null;
  owner:User|null=null;
  isGuest:boolean=false;
  altcritFormGroup!: FormGroup;
  altcritFormGroup2!:FormGroup;
  altcritFormGroup3!:FormGroup;


    constructor(private _formBuilder: FormBuilder,
      private store: Store<AppState>,
      private router : Router,private route: ActivatedRoute) {
  }

  ngOnInit(){

    
    this.altcritFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required],  
      isPrivate: [false]
    });
    this.altcritFormGroup2=this._formBuilder.group({
      buildingCategory: ['', Validators.required],
      constructionYear: [0, Validators.required],
      totalFloors: [0, Validators.required],
      area: [0, Validators.required],
    });

    this.altcritFormGroup3=this._formBuilder.group({
      heatingType: ['', Validators.required],
      energySources: [[], Validators.required],
      ventilation: ['', Validators.required],
      hotWater: ['', Validators.required],
      coolingType: ['', Validators.required],
      annualHeatingNeed: [0, Validators.required],
      CO2Emission: [0, Validators.required],
      energyClass: ['', Validators.required],
    });

    this.route.queryParams.subscribe(passport => {
      if(passport!=null && passport!=undefined)
      {
        this.passportEdit = new PassportDto(
          passport['buildingCategory'],
          passport['address'],
          passport['city'],
          passport['constructionYear'],
          passport['area'],
          passport['energyClass'],
          passport['annualHeatingNeed'],
          passport['description'],
          passport['heatingType'],
          passport['energySources'],
          passport['ventilation'],
          passport['hotWater'],
          passport['coolingType'],
          passport['totalFloors'],
          passport['CO2Emission'],
          passport['isPrivate']
        );  
        this.passportEditId=passport['_id'] ;
        
        this.setPassportParameters();
       
      }

    });

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

  }
 
  setPassportParameters()
  {
      this.altcritFormGroup.patchValue({
        address: this.passportEdit?.address,
        description: this.passportEdit?.description,
        city: this.passportEdit?.city,
        isPrivate: this.passportEdit?.isPrivate
      });

      this.altcritFormGroup2.patchValue({
        buildingCategory:this.passportEdit?.buildingCategory,
        constructionYear: this.passportEdit?.constructionYear,
        totalFloors: this.passportEdit?.totalFloors,
        area: this.passportEdit?.area,
      });     
      
      this.altcritFormGroup3.patchValue({
        heatingType: this.passportEdit?.heatingType,
        energySources: this.passportEdit?.energySources,
        ventilation: this.passportEdit?.ventilation,
        hotWater: this.passportEdit?.hotWater,
        coolingType: this.passportEdit?.coolingType,
        annualHeatingNeed: this.passportEdit?.annualHeatingNeed,
        CO2Emission: this.passportEdit?.CO2Emission,
        energyClass: this.passportEdit?.energyClass,
      });

  }
  savePassport()
  {
    if(this.altcritFormGroup.value.isPrivate===null || this.altcritFormGroup.value.isPrivate===undefined)
    this.altcritFormGroup.get('isPrivate')!.setValue(false);
    this.passportNew = new PassportDto(this.altcritFormGroup2.value.buildingCategory,this.altcritFormGroup.value.address, this.altcritFormGroup.value.city,
      this.altcritFormGroup2.value.constructionYear,this.altcritFormGroup2.value.area, this.altcritFormGroup3.value.energyClass,this.altcritFormGroup3.value.annualHeatingNeed,
      this.altcritFormGroup.value.description, this.altcritFormGroup3.value.heatingType,this.altcritFormGroup3.value.energySources, this.altcritFormGroup3.value.ventilation,
      this.altcritFormGroup3.value.hotWater,this.altcritFormGroup3.value.coolingType, this.altcritFormGroup2.value.totalFloors,this.altcritFormGroup3.value.CO2Emission
      ,this.altcritFormGroup.value.isPrivate);
    
      if(this.passportEditId===null || this.passportEditId===undefined || this.passportEditId==="")
      this.store.dispatch(createPassport({passport:this.passportNew}));
      else
      this.store.dispatch(updatePassport({passport:this.passportNew, _id:this.passportEditId}))

    this.router.navigate(['/my-passports']);
  }
  discardPassport(){
    this.router.navigate(['/my-passports']);
  }

  updateIsPrivate(event: any) {
    this.altcritFormGroup.get('isPrivate')!.setValue(event.checked);
  }


}
