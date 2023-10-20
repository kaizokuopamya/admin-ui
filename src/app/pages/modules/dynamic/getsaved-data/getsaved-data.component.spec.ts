import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsavedDataComponent } from './getsaved-data.component';

describe('GetsavedDataComponent', () => {
  let component: GetsavedDataComponent;
  let fixture: ComponentFixture<GetsavedDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetsavedDataComponent]
    });
    fixture = TestBed.createComponent(GetsavedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
