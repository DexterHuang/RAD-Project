import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailPageComponent } from './request-detail-page.component';

describe('RequestDetailPageComponent', () => {
  let component: RequestDetailPageComponent;
  let fixture: ComponentFixture<RequestDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
