import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSearchResultComponentComponent } from './artist-search-result-component.component';

describe('ArtistSearchResultComponentComponent', () => {
  let component: ArtistSearchResultComponentComponent;
  let fixture: ComponentFixture<ArtistSearchResultComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistSearchResultComponentComponent]
    });
    fixture = TestBed.createComponent(ArtistSearchResultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
