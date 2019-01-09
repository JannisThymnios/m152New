import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlclubsComponent } from './nlclubs.component';

describe('NlclubsComponent', () => {
  let component: NlclubsComponent;
  let fixture: ComponentFixture<NlclubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlclubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlclubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
