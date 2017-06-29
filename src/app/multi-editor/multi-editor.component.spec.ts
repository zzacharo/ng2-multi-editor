import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiEditorComponent } from './multi-editor.component';

describe('MultiEditorComponent', () => {
  let component: MultiEditorComponent;
  let fixture: ComponentFixture<MultiEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
