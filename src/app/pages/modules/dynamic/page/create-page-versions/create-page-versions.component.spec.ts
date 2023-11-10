import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePageVersionsComponent } from './create-page-versions.component';

describe('CreatePageVersionsComponent', () => {
  let component: CreatePageVersionsComponent;
  let fixture: ComponentFixture<CreatePageVersionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePageVersionsComponent]
    });
    fixture = TestBed.createComponent(CreatePageVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
