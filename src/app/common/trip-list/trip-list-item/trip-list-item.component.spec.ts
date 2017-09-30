import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListItemComponent } from './trip-list-item.component';

describe('TripListItemComponent', () => {
  let component: TripListItemComponent;
  let fixture: ComponentFixture<TripListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
