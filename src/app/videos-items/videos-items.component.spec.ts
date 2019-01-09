import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosItemsComponent } from './videos-items.component';

describe('VideosItemsComponent', () => {
  let component: VideosItemsComponent;
  let fixture: ComponentFixture<VideosItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
