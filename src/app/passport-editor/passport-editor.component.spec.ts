import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportEditorComponent } from './passport-editor.component';

describe('PassportEditorComponent', () => {
  let component: PassportEditorComponent;
  let fixture: ComponentFixture<PassportEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassportEditorComponent]
    });
    fixture = TestBed.createComponent(PassportEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
