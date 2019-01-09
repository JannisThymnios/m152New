import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSiteComponent } from './club-site.component';

describe('ClubSiteComponent', () => {
  let component: ClubSiteComponent;
  let fixture: ComponentFixture<ClubSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
