import { Component } from '@angular/core';

@Component({
  selector: 'app-passport-view',
  templateUrl: './passport-view.component.html',
  styleUrls: ['./passport-view.component.scss']
})
export class PassportViewComponent {
  constructor() { }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  deletePost() {
    // throw new Error('Method not implemented.');
  }

}
