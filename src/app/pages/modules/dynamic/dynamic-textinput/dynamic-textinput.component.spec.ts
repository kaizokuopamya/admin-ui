import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTextinputComponent } from './dynamic-textinput.component';

describe('DynamicTextinputComponent', () => {
  let component: DynamicTextinputComponent;
  let fixture: ComponentFixture<DynamicTextinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicTextinputComponent]
    });
    fixture = TestBed.createComponent(DynamicTextinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
