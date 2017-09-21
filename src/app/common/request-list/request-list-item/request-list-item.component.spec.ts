import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListItemComponent } from './request-list-item.component';

describe('RequestListItemComponent', () => {
  let component: RequestListItemComponent;
  let fixture: ComponentFixture<RequestListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
