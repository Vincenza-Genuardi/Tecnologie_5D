import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSearchResultComponentComponent } from './album-search-result-component.component';

describe('AlbumSearchResultComponentComponent', () => {
  let component: AlbumSearchResultComponentComponent;
  let fixture: ComponentFixture<AlbumSearchResultComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumSearchResultComponentComponent]
    });
    fixture = TestBed.createComponent(AlbumSearchResultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
