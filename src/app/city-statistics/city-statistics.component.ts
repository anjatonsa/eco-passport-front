import { Component } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { loadCityStatistic } from '../store/passport.actions';
import { selectCityStatistic } from '../store/passport.selector';

@Component({
  selector: 'app-city-statistics',
  templateUrl: './city-statistics.component.html',
  styleUrls: ['./city-statistics.component.scss']
})
export class CityStatisticsComponent {

  city:string="";
  searched:boolean=false;
  citystatistic:any=[];

  constructor(private store:Store<AppState> ){}
  search(){
    this.citystatistic=[];
    this.store.dispatch(loadCityStatistic({city:this.city}));
    
    this.store.select(selectCityStatistic).subscribe((statistic)=>{
      this.citystatistic=statistic;
      if(this.citystatistic.length!==0)
      this.searched=true;  
    })

  }
}
