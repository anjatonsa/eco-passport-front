import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionViewComponent } from './suggestion-view.component';

describe('SuggestionViewComponent', () => {
  let component: SuggestionViewComponent;
  let fixture: ComponentFixture<SuggestionViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestionViewComponent]
    });
    fixture = TestBed.createComponent(SuggestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
