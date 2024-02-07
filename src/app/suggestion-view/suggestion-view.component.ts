import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { loadSuggestion } from '../store/suggestion.action';
import { selectSuggestion } from '../store/suggestion.selector';

@Component({
  selector: 'app-suggestion-view',
  templateUrl: './suggestion-view.component.html',
  styleUrls: ['./suggestion-view.component.scss']
})
export class SuggestionViewComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private store:Store<AppState>) {}
  suggestion:string="You can try implementing: ";

  ngOnInit()
  {

   this.store.dispatch(loadSuggestion({passportId:this.data}));  
   
   this.store.select(selectSuggestion).subscribe((suggestion)=>{

    if(suggestion){

        const suggestionIds = suggestion.ids as string[];
        suggestionIds.forEach((id) => {
        const suggestionEntity = suggestion.entities[id];
        console.log("Suggestion Entity:", suggestionEntity);

        this.suggestion+=suggestionEntity?.coolingType + " for colling, or ";
        this.suggestion+=suggestionEntity?.ventilation + " for ventilation, or ";
        this.suggestion+=suggestionEntity?.hotWater + " for hot water, or ";
        this.suggestion+=suggestionEntity?.heatingType + " for heating, or use: ";
        this.suggestion+=suggestionEntity?.energySources + " as energy soruces, ";
        this.suggestion+="in order to go up to energy class " + suggestionEntity?.energyClass;
      });
      }
    });
  }
}
