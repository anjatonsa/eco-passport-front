import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

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
    /*this.store.select().subscribe((suggestion)=>{
      
    });*/
  }
}
