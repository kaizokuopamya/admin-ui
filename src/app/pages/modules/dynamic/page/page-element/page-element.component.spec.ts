import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageElementComponent } from './page-element.component';

describe('PageElementComponent', () => {
  let component: PageElementComponent;
  let fixture: ComponentFixture<PageElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageElementComponent]
    });
    fixture = TestBed.createComponent(PageElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
