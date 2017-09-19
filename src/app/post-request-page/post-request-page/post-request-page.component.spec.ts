import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRequestPageComponent } from './post-request-page.component';

describe('PostRequestPageComponent', () => {
  let component: PostRequestPageComponent;
  let fixture: ComponentFixture<PostRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
