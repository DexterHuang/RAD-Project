import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTripPageComponent } from './post-trip-page.component';

describe('PostTripPageComponent', () => {
  let component: PostTripPageComponent;
  let fixture: ComponentFixture<PostTripPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTripPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTripPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
