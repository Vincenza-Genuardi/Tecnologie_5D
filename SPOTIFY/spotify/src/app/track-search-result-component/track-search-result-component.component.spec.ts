import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSearchResultComponentComponent } from './track-search-result-component.component';

describe('TrackSearchResultComponentComponent', () => {
  let component: TrackSearchResultComponentComponent;
  let fixture: ComponentFixture<TrackSearchResultComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackSearchResultComponentComponent]
    });
    fixture = TestBed.createComponent(TrackSearchResultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
