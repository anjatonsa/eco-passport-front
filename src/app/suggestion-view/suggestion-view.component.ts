import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { loadSuggestion, removeSuggestion } from '../store/suggestion.action';
import { selectSuggestion } from '../store/suggestion.selector';

@Component({
  selector: 'app-suggestion-view',
  templateUrl: './suggestion-view.component.html',
  styleUrls: ['./suggestion-view.component.scss']
})
export class SuggestionViewComponent implements OnDestroy{


  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private store:Store<AppState>) {}
 
  suggestion:string="No suggestions available";

  ngOnInit()
  {

   this.store.dispatch(loadSuggestion({passportId:this.data}));  
   
   this.store.select(selectSuggestion).subscribe((suggestion)=>{

    if(suggestion){

        const suggestionIds = suggestion.ids as string[];
        suggestionIds.forEach((id) => {
        const suggestionEntity = suggestion.entities[id];

        this.suggestion="You can try implementing: ";

        if(suggestionEntity?.coolingType!=="" && suggestionEntity?.coolingType!==undefined)
          this.suggestion+=suggestionEntity?.coolingType + " for cooling, ";
        if(suggestionEntity?.ventilation!=="" && suggestionEntity?.ventilation!==undefined)
          this.suggestion+=suggestionEntity?.ventilation + " for ventilation,  ";
        if(suggestionEntity?.hotWater!=="" && suggestionEntity?.hotWater!==undefined)
          this.suggestion+=suggestionEntity?.hotWater + " for hot water,  ";
        if(suggestionEntity?.heatingType.length!=0 && suggestionEntity?.heatingType!==undefined)
          this.suggestion+=suggestionEntity?.heatingType + " for heating,  ";
        if(suggestionEntity?.energySources.length!==0 && suggestionEntity?.energySources!==undefined)
          this.suggestion+=suggestionEntity?.energySources + " as energy soruces, ";
        this.suggestion+="in order to go up to energy class " + suggestionEntity?.energyClass+"!";

        if(this.suggestion==="You can try implementing: in order to go up to energy class " + suggestionEntity?.energyClass+"!")
          this.suggestion="No suggestions available";
      });
      }
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(removeSuggestion());
  }
}
