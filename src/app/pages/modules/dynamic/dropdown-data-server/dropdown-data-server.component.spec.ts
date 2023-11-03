import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDataServerComponent } from './dropdown-data-server.component';

describe('DropdownDataServerComponent', () => {
  let component: DropdownDataServerComponent;
  let fixture: ComponentFixture<DropdownDataServerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownDataServerComponent]
    });
    fixture = TestBed.createComponent(DropdownDataServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
