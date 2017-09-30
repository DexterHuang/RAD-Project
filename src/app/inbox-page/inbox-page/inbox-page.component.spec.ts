import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxPageComponent } from './inbox-page.component';

describe('InboxPageComponent', () => {
  let component: InboxPageComponent;
  let fixture: ComponentFixture<InboxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
